import { configureStore } from '@reduxjs/toolkit'
import { Letter } from "./modules/Game/letterUtils.ts";

import letterReducer from './modules/Game/states/letter.ts'
import triesReducer from './modules/Game/states/tries.ts'
import mistakesReducer from './modules/Game/states/mistakes.ts'

export interface RootState {
    letter: Letter
    tries: number
    mistakes: string[]
}

export default configureStore({
    reducer: {
        letter: letterReducer,
        tries: triesReducer,
        mistakes: mistakesReducer
    },
})