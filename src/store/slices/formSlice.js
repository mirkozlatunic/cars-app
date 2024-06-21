import { createSlice } from "@reduxjs/toolkit";

const fromSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducer: {
    changeName(state, action) {},
    changeCost(state, action) {},
  },
});
