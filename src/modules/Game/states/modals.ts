import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialStateModals: string[] = []

export const modalsSlice = createSlice({
    name: 'modals',
    initialState: initialStateModals,
    reducers: {
        add: (state: string[], action:PayloadAction<string>) => {
            return [...state, action.payload]
        },
        reset: () => []
    },
})
export const { reset, add } = modalsSlice.actions

export default modalsSlice.reducer