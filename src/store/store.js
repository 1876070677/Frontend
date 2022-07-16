import {configureStore} from '@reduxjs/toolkit';
import updateBodyState from './updateBodyState';
import userInfo from './userInfo';
import animate from './animate';

const store = configureStore({
  reducer:{
    changeBodyState:updateBodyState.reducer,
    setUserinfo:userInfo.reducer,
    animate:animate.reducer
  }
})

export default store;