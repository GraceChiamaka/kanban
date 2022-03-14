import { combineReducers } from "redux";
import { columnReducer } from "./columns";

export const rootReducer = combineReducers({ columnGroups: columnReducer });
