import { AuthActionCreators } from "./auth/auth";
import { EventActionCreators } from "./event/event";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};
