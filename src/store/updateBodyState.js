import { createSlice } from "@reduxjs/toolkit";

const updateBodyState = createSlice({
    name: 'UpdateBodyState',
    initialState:{
        nudgeOpen : true,
    },
    reducers:{
      updateNudge: (state, action) => {
        state.nudgeOpen = action.payload;
      },
    }
  })
  export default updateBodyState;
  export const {
    updateNudge
  } = updateBodyState.actions;