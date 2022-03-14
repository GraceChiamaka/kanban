import { Reducer } from "redux";
import { ColumnTypes, ColumnActions, ColumnState } from "../types/columns";

const INITIAL_STATE: ColumnState = {
  columns: [],
};

const columnReducer: Reducer<ColumnState, ColumnActions> = (
  state: ColumnState = INITIAL_STATE,
  action: ColumnActions
): ColumnState => {
  switch (action.type) {
    case ColumnTypes.REQUEST_ALL_COLUMNS_CALL_SUCCESS: {
      return {
        ...state,
        columns: action.payload,
      };
    }
    default:
      return state;
  }
};

export { columnReducer };
