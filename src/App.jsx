import {useState} from "react";

const App = () => {

   const [task,setTask] = useState()

    const handleInput=(event)=>{
     setTask(event.target.value)
    }


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
          onChange={handleInput}
          className="w-1/4 m-4 p-1 text-gray-900 border border-gray-300 rounded-lg   focus:ring-blue-500 "
        />
        <button
          type="button"
          className="text-white bg-gray-800  focus:ring-4  rounded-full text-sm px-5 py-2.5 me-2 mb-2  "
        >
          Add New Task
        </button>
      </div>

    </div>

      <div>
          {task}
      </div>
      </>
  );
};

export default App;
