export enum ColumnTypes {
  REQUEST_ALL_COLUMNS_CALL = "REQUEST_ALL_LIST_CALL",
  REQUEST_ALL_COLUMNS_CALL_SUCCESS = "REQUEST_ALL_LIST_CALL_SUCCESS",

  UPDATE_COLUMN_CALL = "UPDATE_COLUMN_CALL",

  REQUEST_CREATE_COLUMN_CALL = "REQUEST_CREATE_COLUMN_CALL",
  REQUEST_CREATE_COLUMN_CALL_SUCCESS = "REQUEST_CREATE_COLUMN_CALL_SUCCESS",

  REQUEST_UPDATE_TASK_COLUMN_CALL = "REQUEST_UPDATE_TASK_COLUMN_CALL",
  REQUEST_UPDATE_TASK_COLUMN_CALL_SUCCESS = "REQUEST_UPDATE_TASK_COLUMN_CALL_SUCCESS",

  REQUEST_COLUMN_BY_ID_CALL = "REQUEST_COLUMN_BY_ID_CALL",
  REQUEST_COLUMN_BY_ID_CALL_SUCCESS = "REQUEST_COLUMN_BY_ID_CALL_SUCCESS",

  REQUEST_CREATE_TASK_CALL = "REQUEST_CREATE_TASK_CALL",
  REQUEST_CREATE_TASK_CALL_SUCCESS = "REQUEST_CREATE_TASK_CALL_SUCCESS",
}
export interface TaskProps {
  id: string;
  title: string;
  createdAt: string;
  description: string;
}
export interface ColumnProps {
  id: string;
  title: string;
  createdAt: string;
  tasks: TaskProps[];
}

export type ColumnState = {
  columns: ColumnProps[];
};

export type columnAction = {
  type: ColumnTypes.REQUEST_ALL_COLUMNS_CALL_SUCCESS;
  payload: ColumnProps[];
};

export type updateColumnAction = {
  type: ColumnTypes.UPDATE_COLUMN_CALL;
  payload: ColumnProps;
};

export type ColumnActions = columnAction | updateColumnAction;
