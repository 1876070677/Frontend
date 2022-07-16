import { createSlice } from "@reduxjs/toolkit";

const animate = createSlice ({
    name: 'animation',
    initialState: {
        subtitle: 0,
    },
    reducers: {
        setSbIdx: (state, action) => {
            state.subtitle = (state.subtitle + 1) % 2;
        }
    }
})

export default animate;
export const {
    setSbIdx
  } = animate.actions;