import { createSlice } from '@reduxjs/toolkit'

export const comboSlice = createSlice({
    name: 'combo',
    initialState: 0,
    reducers: {
        add: state => {
            console.log(state+1)
            return state + 1
        },
        reset: () => 0
    },
})

export const { add, reset } = comboSlice.actions

export default comboSlice.reducer