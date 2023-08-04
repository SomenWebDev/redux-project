import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import {
  decrement,
  increment,
  setCustom,
} from "../../redux/state/counter/counterSlice";

const Counter = () => {
  const myNumber = useRef();
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="card">
        <div className="card-header bg-secondary">
          <h4>My Counter App</h4>
        </div>
        <div className="card-body">
          <h1>{count}</h1>
          <div className="my-4">
            <button
              onClick={() => {
                dispatch(increment());
              }}
              className="btn btn-success"
            >
              Increase
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="btn btn-danger mx-2"
            >
              Decrease
            </button>
          </div>
          <div className="my-4">
            <input
              ref={myNumber}
              type="number"
              className="form-control w-50 my-2"
            />
            <button
              onClick={() => {
                dispatch(setCustom(myNumber.current.value));
              }}
              className="btn w-50 m-2 btn-danger my-2"
            >
              Set Custom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
