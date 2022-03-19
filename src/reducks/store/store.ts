import { createStore as reduxCreateStore, combineReducers } from "redux";
import { UsersReducer } from "../users/reducers";

// TODO: 要リファクタ
export type ReducerType = { users: any };

export function createStore() {
  return reduxCreateStore(
    combineReducers({
      users: UsersReducer,
    })
  );
}
