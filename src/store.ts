import { configureStore } from '@reduxjs/toolkit'
import letterReducer from './modules/Game/letterState'
import { Letter } from "./modules/Game/letterUtils.ts";

export interface RootState {
    letter: Letter
}

export default configureStore({
    reducer: {
        letter: letterReducer,
    },
})