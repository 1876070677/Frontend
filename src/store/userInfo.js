import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name : "userInfo",
    initialState : {
        isLogin : false,
        id : '',
        nickname: '',
        actk : ''
    },
    reducers: {
        isLogin : (state, action) => {
            state.isLogin = !state.isLogin;
        },
        setId : (state, action) => {
            state.id = action.payload;
        },
        setNickname : (state, action) => {
            state.nickname = action.payload;
        },
        setActk : (state, action) => {
            state.actk = action.payload;
        }
    }
})

export default userInfo;
export const {isLogin, setId, setNickname, setActk} = userInfo.actions;