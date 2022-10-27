import { TaskEntity } from "../entities";

interface TaskRepository {
    tasks: TaskEntity[] | null;
    isLoading: boolean;

    create(task: TaskEntity): Promise<TaskEntity>;
    get(): Promise<TaskEntity>;
    update(task: TaskEntity): Promise<TaskEntity>
    delete(task: TaskEntity): Promise<void>
}

export type {TaskRepository}