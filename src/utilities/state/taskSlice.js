import {createSlice} from "@reduxjs/toolkit";
import {render} from "react-dom";

const taskSlice=createSlice({
name: "tasks",
    initialState: {
    tasks: [],
    },
    reducers: {
        storeTask: (state,action) => {
           state.tasks.push(action.payload)
        },
        removeTask: () => {

        }
    }
})


export const{storeTask,removeTask}=taskSlice.actions;
export default taskSlice.reducer;