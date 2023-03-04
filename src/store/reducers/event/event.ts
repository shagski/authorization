import { IEvent } from "../../../moduls/IEvent";
import {
  EventActionEnum,
  EventActionType,
  EventState,
  SetEventsAction,
  SetGuestsAction,
} from "./types";
import { IUser } from "./../../../moduls/IUser";
import { AppDispatch } from "../..";
import UsersData from "../../../api/UsersData";

const initialState: EventState = {
  events: [],
  guests: [],
};

function EventReducer(
  state = initialState,
  action: EventActionType
): EventState {
  switch (action.type) {
    case EventActionEnum.SET_GUESTS:
      return { ...state, guests: action.payload };
    case EventActionEnum.SET_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
}

export const EventActionCreators = {
  setEvent: (payload: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  setGuests: (payload: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UsersData.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  },
};

export default EventReducer;
