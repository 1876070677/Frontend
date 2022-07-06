import { createSlice } from "@reduxjs/toolkit";

const updateBodyState = createSlice({
    name: 'UpdateBodyState',
    initialState:{
        idFocus : false,
        pwFocus : false,
        nbFocus : false,
        nudgeOpen : true,
        currentIdx : 1
    },
    reducers:{
      updateIdFocus: (state, action) => {
        state.idFocus = !state.idFocus;
      },
      updatePwFocus: (state, action) => {
        state.pwFocus = !state.pwFocus;
      },
      updateNbFocus: (state, action) => {
        state.nbFocus = !state.nbFocus;
      },
      updateNudge: (state, action) => {
        state.nudgeOpen = action.payload;
      },
      updateCurrentIdx: (state, action) => {
        state.currentIdx = action.payload;
      }
    }
  })
  export default updateBodyState;
  export const {
    updateIdFoucs, updatePwFocus, updateNbFocus, updateNudge, updateCurrentIdx
  } = updateBodyState.actions;