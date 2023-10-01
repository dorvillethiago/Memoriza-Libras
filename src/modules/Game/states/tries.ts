import {createSlice} from '@reduxjs/toolkit'

export const triesSlice = createSlice({
    name: 'tries',
    initialState: 0,
    reducers: {
        increment: (state) => state += 1,
        reset: () => 0
    },
})
export const { reset, increment } = triesSlice.actions

export default triesSlice.reducer