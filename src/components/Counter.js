import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()

  const incrementHandeler = () => {
    dispatch({ type: "INCREMENT" });
  }
  const decrementHandeler = () => {

    dispatch({ type: "DECREMENT" });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandeler}>Increment</button>
        <button onClick={decrementHandeler}>Decrement</button>
      </div>
      <button >Toggle Counter</button>
    </main>
  );
};

export default Counter;
