import {
  DECREMENT,
  INCREMENT,
  type CounterActionTypes,
} from "../actions/counterAction";

interface CounterState {
  count: number;
}

// Initial state
const initialState: CounterState = {
  count: 0,
};

// Reducer function

export const counterReducer = (
  state = initialState.count,
  action: CounterActionTypes
): number => {
  switch (action.type) {
    case INCREMENT:
      if (action.payload && action.payload > 0) {
        return state + action.payload;
      }
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
