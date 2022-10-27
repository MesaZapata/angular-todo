import { TaskEntity, TaskRepository } from "../../domain";

type deleteTaskRepository = Pick<TaskRepository, "delete">;

const deleteTaskRepository = (task: TaskEntity, taskRepository: deleteTaskRepository) => {
    taskRepository.delete(task);
}

export {deleteTaskRepository};