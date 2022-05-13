// @ts-check
require('dotenv').config()
const bcryptjs = require('bcryptjs');

const cookieParser = require('cookie-parser');

const { body, validationResult } = require('express-validator');
const express = require('express');


const sequelize = require('./db');
const { UsersModel } = require('./user.model');
const { SessionsModel } = require('./session.model');

const { nanoid } = require('nanoid');
const { sign, unsign } = require('./signature');
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.use(cookieParser());

async function createSession(res, userId) {
  const sid = nanoid() // Example: WKlEdLMwTjJE9cSfOuniI
  const token = sign(sid, process.env.SECRET) // WKlEdLMwTjJE9cSfOuniI.KKF2QT4fwpMeJf36POk6yJV_adQssw5c // DB + JWT
  res.cookie('sid', token, { httpOnly: true, maxAge: 2 * 24 * 60 * 60 * 1000 })
  const session = await SessionsModel.create({ sid, userId })
  res.send(session)
}

async function checkCookie(req, res, next) {
  const token = req.cookies['Token']
  if (token) {
    const sid = unsign(token, process.env.SECRET)
    if (sid) {
      const session = await SessionsModel.findOne({ where: { sid } })
      if (session) {
        const plainedSession = session.get({ plain: true })
        req.user = { id: plainedSession.userId }
        return next()
      }
    }
  }
  res.status(403).send({ status: 'Wrong token' })
}


// secure route
app.patch('/user/:id', checkCookie, async (req, res) => {
  const { id } = req.params
  const { name, surname, birthday } = req.body
  const user = req.user
  if (user.id === +id)
    await UsersModel.update({ name, surname, birthday }, { where: { id: user.id } })
  res.status(200).send({ status: 'success' })
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  const userByEmail = await UsersModel.findOne({ where: { email } })
  if (userByEmail) {
    const plainedUser = userByEmail.get({ plain: true })
    if (await bcryptjs.compare(password, plainedUser.passwordHash)) {
      // sessions
      createSession(res, plainedUser.id)
    } else {
      res.status(401).send({ status: 'Incorrect credentials' })
    }
  } else {
    res.status(401).send({ status: 'Incorrect credentials' })
  }
})

app.post('/signup',
  body('email').isEmail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, surname, birthday, email, password } = req.body
    try {
      const passwordHash = await bcryptjs.hash(password, 10)
      const userByEmail = await UsersModel.findOne({ where: { email } })
      if (!userByEmail) {
        const newUser = await UsersModel.create({ name, surname, birthday, email, passwordHash })
        res.status(201).send(newUser)
      } else {
        res.status(400).send({ message: 'This email is not unique' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Server error' })
    }
  })

// app.get('/cookie', (req, res) => {
//   // res.header('Set-Cookie', 'token=djksfksjdfk; Expires=Thu, 21 Feb 2022 07:28:00 GMT; HttpOnly;')
//   res.cookie('Token', nanoid(), { httpOnly: true, maxAge: 600000 })
//   res.send('Get cookies')
// })

// app.get('/read_cookie', (req, res) => {
//   // console.log(req.headers.cookie)
//   console.log(req.cookies['Token'])
//   res.send('<h1>Read cookies</h1>')
// })

app.use((err, req, res, next) => {
  res.status(400).send(err)
})

async function start() {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log('Successful db sync');
    app.listen(port)
  } catch (error) {
    console.error(error)
  }
}

start()