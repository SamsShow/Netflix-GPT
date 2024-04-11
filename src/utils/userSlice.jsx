import {createSlice} from '@reduxjs/toolkit';
import { remove } from 'firebase/database';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        }
    }

})

export const {addUser, removeUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
export default userSlice;