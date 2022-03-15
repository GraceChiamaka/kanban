import BaseRequest from ".";
import {
  CreateColumnPayload,
  UpdateTaskColumnPayload,
  CreateTaskPayload,
  GetColumnPayload,
} from "./types";

enum DEFAULT_ROUTES {
  LIST_ROUTE = "/lists",
}

class ColumnService extends BaseRequest {
  getAllColumns = async () => {
    return await this.api.get(DEFAULT_ROUTES.LIST_ROUTE);
  };

  createColumn = async (payload: CreateColumnPayload) => {
    return await this.api.post(DEFAULT_ROUTES.LIST_ROUTE, payload);
  };

  updateTaskColumn = async (payload: UpdateTaskColumnPayload) => {
    return await this.api.put(
      `${DEFAULT_ROUTES.LIST_ROUTE}/${payload.listId}/tasks/${payload.taskId}`,
      { listId: payload.destinationId }
    );
  };

  getColumn = async (payload: GetColumnPayload) => {
    return await this.api.get(
      `${DEFAULT_ROUTES.LIST_ROUTE}/${payload.columnId}`
    );
  };

  createTask = async (payload: CreateTaskPayload) => {
    return await this.api.post(
      `${DEFAULT_ROUTES.LIST_ROUTE}/${payload.columnId}/tasks`,
      {
        title: payload.title,
        description: payload.description,
      }
    );
  };
}
const columnService = new ColumnService();
export { columnService };
