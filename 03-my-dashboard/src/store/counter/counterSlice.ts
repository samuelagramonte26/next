import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number;
    isReady: boolean;
}
const initialState: CounterState = {
    count: 5,
    isReady: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initialicedState: (state, action: PayloadAction<number>) => {
            if (state.isReady) return;
            state.count = action.payload
            state.isReady = true;
        },
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            if (state.count == 1) return;
            state.count -= 1
        }
    }
});

export const { increment, decrement,initialicedState } = counterSlice.actions

export default counterSlice.reducer