import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialStateMistakes: string[] = []

export const mistakesSlice = createSlice({
    name: 'mistakes',
    initialState: initialStateMistakes,
    reducers: {
        add: (state: string[], action:PayloadAction<string>) => {
            console.log([...state, action.payload])
            return [...state, action.payload]
        },
        reset: () => []
    },
})
export const { reset, add } = mistakesSlice.actions

export default mistakesSlice.reducer