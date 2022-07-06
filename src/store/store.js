import {configureStore} from '@reduxjs/toolkit';
import updateBodyState from './updateBodyState';

const store = configureStore({
  reducer:{
    changeBodyState:updateBodyState.reducer
  }
})

export default store;