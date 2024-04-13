import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DisplayState {
    value: string
}

const initialState: DisplayState = {
    value: 'mainPage'
}


export const displaySlice = createSlice( {
    name: 'display',
    initialState,
    reducers: {
        displayView: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.value = action.payload;
        }
    }
});

export const {displayView} = displaySlice.actions;

export default displaySlice.reducer
