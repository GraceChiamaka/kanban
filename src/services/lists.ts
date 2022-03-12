import BaseRequest from ".";
import { CreateListPayload } from "./types";
import { LISTS_ROUTES } from "./routes";

class ListService extends BaseRequest {
  constructor() {
    super();
  }
  getAllLists = async () => {
    return await this.api.get(LISTS_ROUTES.GET_LISTS);
  };
  createList = async (payload: CreateListPayload) => {
    return await this.api.post(LISTS_ROUTES.GET_LISTS, payload);
  };
  getList = async (payload) => {
    return await this.api.get(`${LISTS_ROUTES.GET_LISTS}/${payload.listId}`);
  };
}
const listService = new ListService();
export { listService };
