export const GetTaskByIdService = async (userId: number) => {
    const task = await Task.findByPk(taskId)
    if (task?.UserId !== userId) throw new HttpError(401, 'Permission denied')
    if (task == null) throw new HttpError(404, 'Can\'t find this task')
    return task
}


class HttpError extends Error {
    status: number

    constructor(status: number, message: string) {
        super(message); 
        this.name = "HttpError"; 
        this.status = status; 
    }
}