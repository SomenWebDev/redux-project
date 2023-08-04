import { useDispatch } from "react-redux";
import { AddToDo } from "../../redux/state/todo/todoSlice";
import { useRef } from "react";

const CreateToDo = () => {
  const dispatch = useDispatch();
  const taskInput = useRef();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <input
              type="text"
              ref={taskInput}
              className="form-control"
              placeholder="Task Name"
            />
          </div>
          <div className="col-md-2">
            <button
              onClick={() => {
                dispatch(AddToDo(taskInput.current.value));
                taskInput.current.value = "";
              }}
              className="btn btn-primary"
            >
              Add To Do
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateToDo;
