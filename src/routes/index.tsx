import { createFileRoute } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementFive,
  incrementWithPayload,
} from "../store/actions/counterAction";
import type { AppDispatch, RootState } from "../store";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter);
  return (
    <div>
      <div>counter: {count}</div>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            dispatch(incrementFive());
          }}
        >
          + 5
        </button>

        <button
          onClick={() => {
            dispatch(incrementWithPayload(10));
          }}
        >
          + 10
        </button>

        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
