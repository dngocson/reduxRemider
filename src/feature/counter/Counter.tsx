import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { useAppDispatch } from "../../app/store";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const [amount, setAmount] = useState(0);
  const dispatch = useAppDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          increment by {amount}
        </button>
      </div>
    </section>
  );
}

export default Counter;
