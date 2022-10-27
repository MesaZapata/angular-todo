import { TaskEntity, TaskRepository } from "../../domain";

type createTaskRepository = Pick<TaskRepository, "create">;

const createTaskUseCase = (task: TaskEntity, taskRepository: createTaskRepository) => {
    taskRepository.create(task);
}

export {createTaskUseCase};