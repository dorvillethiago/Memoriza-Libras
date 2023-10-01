import { createSlice } from '@reduxjs/toolkit'
import { getRandomLetter } from "../letterUtils.ts";

export const letterSlice = createSlice({
    name: 'letter',
    initialState: {
        ...getRandomLetter()
    },
    reducers: {
        reset: (state) => {
            const newLetter = getRandomLetter()
            state.url = newLetter.url
            state.str = newLetter.str
        },
    },
})

export const { reset } = letterSlice.actions

export default letterSlice.reducer