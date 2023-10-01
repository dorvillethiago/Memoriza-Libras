import { configureStore } from '@reduxjs/toolkit'
import { Letter } from "./modules/Game/letterUtils.ts";

import letterReducer from './modules/Game/states/letter.ts'
import mistakesReducer from './modules/Game/states/mistakes.ts'

export interface RootState {
    letter: Letter
    mistakes: string[]
}

export default configureStore({
    reducer: {
        letter: letterReducer,
        mistakes: mistakesReducer
    },
})