import { AppDispatch } from "../..";
import UsersData from "../../../api/UsersData";
import { IUser } from "../../../moduls/IUser";
import {
  AuthAction,
  AuthActionEnum,
  AuthState,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction,
  SetUserAction,
} from "../types";

const initialState: AuthState = {
  IsAuth: false,
  isLoading: false,
  user: {} as IUser,
  error: "",
};

export default function AuthReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, IsAuth: action.payload, isLoading: false };
    case AuthActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case AuthActionEnum.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),
  setLoading: (isLoading: boolean): SetLoadingAction => ({
    type: AuthActionEnum.SET_LOADING,
    payload: isLoading,
  }),
  setIsAuth: (IsAuth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: IsAuth,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setLoading(true));
        const response = await UsersData.getUsers();
        const mockUser = response.data.find(
          (user: IUser) =>
            user.username === username && user.password === password
        );
        if (mockUser) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("username", mockUser.username);
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(AuthActionCreators.setUser(mockUser));
        } else {
          dispatch(
            AuthActionCreators.setError("некорректный логин или пароль")
          );
        }
        dispatch(AuthActionCreators.setLoading(false));
      } catch (e) {
        dispatch(AuthActionCreators.setError("произошла ошибка"));
      }
    },

  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
