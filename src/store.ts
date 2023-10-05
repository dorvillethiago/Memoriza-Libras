import { configureStore } from '@reduxjs/toolkit'
import { Letter } from "./modules/Game/letterUtils.ts";

import letterReducer from './modules/Game/states/letter.ts'
import mistakesReducer from './modules/Game/states/mistakes.ts'
import modalsReducer from './modules/Game/states/modals.ts'

export interface RootState {
    letter: Letter
    mistakes: string[]
    modals: string[]
}

export default configureStore({
    reducer: {
        letter: letterReducer,
        mistakes: mistakesReducer,
        modals: modalsReducer
    },
})