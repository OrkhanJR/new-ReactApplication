import { increment, decrement } from "../../redux/slices/counterSlice";
import {
  increment as stepIncrement,
  decrement as stepDecrement,
} from "../../redux/slices/stepSlice";
import { useTypedDispatch, useTypedSelector } from "../../store";

const CounterRedux = () => {
  const count = useTypedSelector((state) => state.counterReducer);
  const step = useTypedSelector((state) => state.stepReducer);
  const dispatch = useTypedDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement(step))}>minus</button>
      {count}
      <button onClick={() => dispatch(increment(step))}>plus</button>{" "}
      <button onClick={() => dispatch(stepIncrement())}>step plus</button>
      {step}
      <button onClick={() => dispatch(stepDecrement())}>step minus</button>
    </div>
  );
};

export default CounterRedux;
