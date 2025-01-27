import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeTask, storeTask} from "./utilities/state/taskSlice.js";

const App = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const alreadyAddedTask = useSelector((state) => state.alreadyAddedTask.tasks);

  const handleInput = (event) => {
    setTask(event.target.value);
  };

  const addNewTask = () => {
    dispatch(storeTask(task));
    setTask("");
  };

  return (
    <>
      <div>
        <div>
          <label htmlFor="small-input" className=" mb-2 text-sm font-medium ">
            Task
          </label>
          <input
            type="text"
            id="small-input"
            name="task"
            value={task}
            onChange={handleInput}
            className="w-1/4 m-4 p-1 text-gray-900 border border-gray-300 rounded-lg   focus:ring-blue-500 "
          />
          <button
            type="button"
            onClick={addNewTask}
            className="text-white bg-gray-800  focus:ring-4  rounded-full text-sm px-5 py-2.5 me-2 mb-2  "
          >
            Add New Task
          </button>
        </div>
      </div>

      <div>
        {alreadyAddedTask.length > 0 &&
          alreadyAddedTask.map((task) => (
            <div key={task.id} className="m-4 ">
              <p className="inline mr-4">{task.task}</p>
              <button
                  onClick={()=>dispatch(removeTask(task.id))}
                  className="text-white bg-red-500  focus:ring-4  rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                Remove Task
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default App;
