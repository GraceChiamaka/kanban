import { RootState } from "./../index";
import { action as typesafeAction } from "typesafe-actions";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { ColumnTypes } from "../types/columns";
import { columnService } from "../../services/columns";
import { AnyAction } from "redux";
import { formatErrMsg } from "../../utils";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
function* getAllColumnsTask(action: AnyAction) {
  const { payload: data, meta: onSuccess, error: onError } = action;
  try {
    const payload: ResponseGenerator = yield call(columnService.getAllColumns);

    if (payload && payload.data) {
      const columnState = (state: RootState) => state.columnGroups.columns;
      const columns = yield select(columnState);
      yield put(
        typesafeAction(
          ColumnTypes.REQUEST_ALL_COLUMNS_CALL_SUCCESS,
          payload.data || columns
        )
      );

      onSuccess?.(payload.data);
    }
  } catch (error) {
    let errMsg = formatErrMsg(error);

    onError?.(errMsg ?? "Something went wrong, please try again");
  }
}
function* getColumnsTask(action: AnyAction) {
  const { payload: data, meta: onSuccess, error: onError } = action;
  try {
    const payload: ResponseGenerator = yield call(
      columnService.getColumn,
      data
    );

    if (payload && payload.data) {
      yield put(
        typesafeAction(
          ColumnTypes.REQUEST_COLUMN_BY_ID_CALL_SUCCESS,
          payload.data
        )
      );
      yield put(typesafeAction(ColumnTypes.UPDATE_COLUMN_CALL, payload.data));

      onSuccess?.(payload.data);
    }
  } catch (error) {
    let errMsg = formatErrMsg(error);

    onError?.(errMsg ?? "Something went wrong, please try again");
  }
}

function* createColumnTask(action: AnyAction) {
  const { payload: data, meta: onSuccess, error: onError } = action;
  try {
    const payload: ResponseGenerator = yield call(
      columnService.createColumn,
      data
    );

    if (payload && payload.data) {
      yield put(
        typesafeAction(
          ColumnTypes.REQUEST_CREATE_COLUMN_CALL_SUCCESS,
          payload.data
        )
      );
      yield put(typesafeAction(ColumnTypes.REQUEST_ALL_COLUMNS_CALL));

      onSuccess?.(payload.data);
    }
  } catch (error) {
    let errMsg = formatErrMsg(error);

    onError?.(errMsg ?? "Something went wrong, please try again");
  }
}
function* updateTaskColumn(action: AnyAction) {
  const { payload: data, error: onUpdateError } = action;
  try {
    const payload: ResponseGenerator = yield call(
      columnService.updateTaskColumn,
      data
    );

    if (payload && payload.data) {
      yield put(
        typesafeAction(
          ColumnTypes.REQUEST_UPDATE_TASK_COLUMN_CALL_SUCCESS,
          payload.data
        )
      );
      yield put(typesafeAction(ColumnTypes.REQUEST_ALL_COLUMNS_CALL));
    }
  } catch (error) {
    let errMsg = formatErrMsg(error);

    onUpdateError?.(errMsg ?? "Something went wrong, please try again");
  }
}
function* createTask(action: AnyAction) {
  const { payload: data, meta: onSuccess, error: onError } = action;

  try {
    const payload: ResponseGenerator = yield call(
      columnService.createTask,
      data
    );

    if (payload && payload.data) {
      yield put(
        typesafeAction(
          ColumnTypes.REQUEST_CREATE_TASK_CALL_SUCCESS,
          payload.data
        )
      );
      yield put(typesafeAction(ColumnTypes.REQUEST_ALL_COLUMNS_CALL));
      onSuccess?.(payload.data);
    }
  } catch (error) {
    let errMsg = formatErrMsg(error);

    onError?.(errMsg ?? "Something went wrong, please try again");
  }
}

function* actionWatcher() {
  yield takeLatest(ColumnTypes.REQUEST_ALL_COLUMNS_CALL, getAllColumnsTask);
  yield takeLatest(ColumnTypes.REQUEST_CREATE_COLUMN_CALL, createColumnTask);
  yield takeLatest(
    ColumnTypes.REQUEST_UPDATE_TASK_COLUMN_CALL,
    updateTaskColumn
  );
  yield takeLatest(ColumnTypes.REQUEST_CREATE_TASK_CALL, createTask);
  yield takeLatest(ColumnTypes.REQUEST_COLUMN_BY_ID_CALL, getColumnsTask);
}

export default function* rootColumnSaga() {
  yield all([actionWatcher()]);
}
