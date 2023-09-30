import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { getRandomLetter, Letter } from "./letterUtils.ts";

export const letterSlice = createSlice({
    name: 'letter',
    initialState: {
        ...getRandomLetter()
    },
    reducers: {
        change: (state, action: PayloadAction<Letter>) => {
            state.url = action.payload.url
            state.str = action.payload.str
        },
    },
})

export const { change } = letterSlice.actions

export default letterSlice.reducer