import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  const incrementHandeler = () => {
    dispatch(counterActions.increment());
  }
  const incrementBy5Handeler = () => {
    dispatch(counterActions.incrementBy5(5));
  }
  const decrementHandeler = () => {

    dispatch(counterActions.deccrement());
  }
  const toggleCounterHandeler = () => {
    dispatch(counterActions.toggle());
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
