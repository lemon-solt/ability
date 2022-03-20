import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { UsersReducer } from "../users/reducers";

// TODO: 要リファクタ
export type ReducerType = { users: any };

// TODO: 要リファクタ
export function createStore(history: any) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(routerMiddleware(history))
  );
}
