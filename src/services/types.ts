export type CreateListPayload = {
  listId: string;
  title: string;
};
export type CreateTaskPayload = {
  listId: string;
  title: string;
  description: string;
};
export type UpdateTaskParentPayload = {
  listId: string;
  taskId: string;
  destinationId: string;
};
