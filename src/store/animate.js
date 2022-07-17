import { createSlice } from "@reduxjs/toolkit";

function randomNumbuerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const animate = createSlice ({
    name: 'animation',
    initialState: {
        subtitle: 0,
        pageIdx: 0,
        prevPage: -1,
        effectNum: randomNumbuerInRange(0, 5),
        toggle: false,
    },
    reducers: {
        setSbIdx: (state, action) => {
            state.subtitle = (state.subtitle + 1) % 2;
        },
        setPgIdx: (state, action) => {
            state.pageIdx = action.payload;
        },
        setPrevPage: (state, action) => {
            state.prevPage = action.payload;
        },
        setEffectNum: (state, action) => {
            state.effectNum = randomNumbuerInRange(0, 5);
        },
        increasePg: (state, action) => {
            state.pageIdx = (state.pageIdx + 1) % 3;
        },
        decreasePg: (state, action) => {
            state.pageIdx = (state.pageIdx - 1) < 0 ? 2 : (state.pageIdx - 1)
        },
        setToggle: (state, action) => {
            state.toggle = !(state.toggle);
        },
        toggleInit: (state, action) => {
            state.toggle = false;
        }
    }
})

export default animate;
export const {
    setSbIdx, setPgIdx, setPrevPage, setEffectNum,
    increasePg, decreasePg, setToggle, toggleInit
  } = animate.actions;