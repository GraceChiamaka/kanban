import BaseRequest from ".";
import { TASKS_ROUTES } from "./routes";
import { CreateTaskPayload, UpdateTaskParentPayload } from "./types";

class TasksService extends BaseRequest {
  constructor() {
    super();
  }
  getAllTasks = async (payload) => {
    return await this.api.get(
      `${TASKS_ROUTES.GET_ALL_TASKS}/${payload.listId}/tasks`
    );
  };
  createTask = async (payload: CreateTaskPayload) => {
    return await this.api.post(
      `${TASKS_ROUTES.CREATE_TASK}/${payload.listId}/tasks`,
      { title: payload.title, description: payload.description }
    );
  };
  updateTaskContainer = async (payload: UpdateTaskParentPayload) => {
    return await this.api.put(
      `${TASKS_ROUTES.UPDATE_TASK}/${payload.listId}/tasks/${payload.taskId}`,
      { listId: payload.destinationId }
    );
  };
}

const tasksService = new TasksService();

export { tasksService };
