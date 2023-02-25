import { AuthAction, AuthActionEnum, AuthState } from "./types";

const initialState: AuthState = {
  IsAuth: false,
};

export default function AuthReducer(
  state = initialState,
  action: AuthAction
): AuthAction {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, IsAuth: action.payload };
    default:
      return state;
  }
}
