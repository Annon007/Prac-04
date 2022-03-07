import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch()

  const incrementHandeler = () => {
    dispatch({ type: "INCREMENT" });
  }
  const incrementBy5Handeler = () => {
    dispatch({ type: "INCREMENTBY5", value: 5 });
  }
  const decrementHandeler = () => {

    dispatch({ type: "DECREMENT" });
  }
  const toggleCounterHandeler = () => {
    dispatch({ type: "TOGGLE" });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <>
        <div className={classes.value}>{counter}</div>
        <div>
          <button onClick={incrementHandeler}>Increment</button>
          <button onClick={incrementBy5Handeler}>Increment by 5</button>
          <button onClick={decrementHandeler}>Decrement</button>
        </div>
      </>}

      <button onClick={toggleCounterHandeler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
