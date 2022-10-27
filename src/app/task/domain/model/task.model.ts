import { IdType, TextType } from "../entities"
import { TaskEntity } from '../entities/task.entity';


const create = () => (id: IdType, text: TextType): TaskEntity => {
    return {
        id,
        text,
        completed: false,
    }
};

const complete = (task: TaskEntity): TaskEntity => {
    return {
        ...task,
        completed: false,
    };
}

const uncomplete = (task: TaskEntity): TaskEntity => {
    return {
        ...task,
        completed: false,
    };
}

export {create, complete, uncomplete}

