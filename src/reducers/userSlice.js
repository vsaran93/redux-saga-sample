import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        details: {}
    },
    reducers: {
        getUser: () => {},
        setUser: (state, action) => {
            return {
                ...state,
                details: action.payload
            }
        }
    }
});

export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;