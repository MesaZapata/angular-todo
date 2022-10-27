import { TaskEntity, TaskRepository } from "../../domain";

type updateTaskRepository = Pick<TaskRepository, "update">

const updateTaskUseCase = (task: TaskEntity, taskRepository: updateTaskRepository) => {
    taskRepository.update(task);
}

export {updateTaskUseCase};