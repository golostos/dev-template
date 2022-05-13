import { Button, makeStyles, TextField } from "@material-ui/core"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { createTask } from "../features/tasks/tasksSlice"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        gap: '.5rem',
        padding: '0 16px'
    },
    input: {
        flexGrow: 1
    }
})

export default function NewTask() {
    const classes = useStyles()
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (inputValue === '') return;
        dispatch(createTask({
            text: inputValue,
            completed: false
        }))
        setInputValue('')
    }

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <form onSubmit={submitHandler} className={classes.root}>
            <TextField className={classes.input} value={inputValue} onChange={inputHandler} label="Task" variant="outlined" />
            <Button type="submit" variant="contained" color="primary">Add task</Button>
        </form>
    )
}