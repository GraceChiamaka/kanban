export type CreateColumnPayload = {
  title: string;
};
export type CreateTaskPayload = {
  columnId: string;
  title: string;
  description: string;
};
export type UpdateTaskColumnPayload = {
  listId: string;
  taskId: string;
  destinationId: string;
};

export type GetColumnPayload = {
  columnId: string;
};
