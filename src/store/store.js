import {configureStore} from '@reduxjs/toolkit';
import updateBodyState from './updateBodyState';
import userInfo from './userInfo';

const store = configureStore({
  reducer:{
    changeBodyState:updateBodyState.reducer,
    setUserinfo:userInfo.reducer
  }
})

export default store;