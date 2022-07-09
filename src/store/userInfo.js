import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name : "userInfo",
    initialState : {
        isLogin : false,
        nickname: ''
    },
    reducers: {
        isLogin : (state, action) => {
            state.isLogin = !state.isLogin;
        },
        setNickname : (state, action) => {
            state.nickname = action.payload;
        }
    }
})

export default userInfo;
export const {isLogin, setId, setNickname, setActk} = userInfo.actions;