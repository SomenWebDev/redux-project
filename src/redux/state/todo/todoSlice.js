import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    AddToDo: (state, action) => {
      state.value.push(action.payload);
    },
    RemoveToDo: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    // EditToDo: (state, action) => {
    //   state.value.splice(action.payload["index"], 1, action.payload["task"]);
    // },
    EditToDo: (state, action) => {
      const { index, task } = action.payload;
      state.value[index] = task;
    },
  },
});

export const { AddToDo, RemoveToDo, EditToDo } = todoSlice.actions;
export default todoSlice.reducer;
