export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

interface IncrementAction {
  type: typeof INCREMENT;
  payload?: number;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

export type CounterActionTypes = IncrementAction | DecrementAction;

export const increment = (): CounterActionTypes => ({
  type: INCREMENT,
});

export const incrementFive = (): CounterActionTypes => ({
  type: INCREMENT,
  payload: 5,
});

export const incrementWithPayload = (payload: number): CounterActionTypes => ({
  type: INCREMENT,
  payload,
});

export const decrement = (): CounterActionTypes => ({
  type: DECREMENT,
});