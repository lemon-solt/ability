import * as Action from "./actions";
import initialState from "../store/initialState";

// TODO: 要リファクタ any
export const UsersReducer = (state = initialState.users, action: any) => {
  switch (action.type) {
    case Action.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
