import store from '@/store.ts';
import { reset as resetLetter } from "@/modules/Game/states/letter.ts";
import { add, reset as resetMistakes } from "@/modules/Game/states/mistakes.ts";
import { add as addModal, reset as resetModal } from "@/modules/Game/states/modals.ts"

import CorrectSfx from '../assets/correct.mp3';
import IncorrectSfx from '../assets/incorrect.mp3';
import {handleUserCombo, resetUserScore} from "@/modules/Game/services/LocalDataHandler.ts";

//Carregando Sfx

const CorrectSfxObject = new Audio(CorrectSfx);
CorrectSfxObject.volume = 0.3;

const IncorrectSfxObject = new Audio(IncorrectSfx);
IncorrectSfxObject.volume = 0.25;

function handleLetterVerificationLogic(letter_local: string) {

    const letter = store.getState().letter;
    const mistakes = store.getState().mistakes;

    if (letter_local == letter.str) {
        handleUserCombo()
        CorrectSfxObject.play();
        store.dispatch(resetLetter())
        store.dispatch(resetMistakes())
    } else {
        IncorrectSfxObject.play();
        resetUserScore()
        if (mistakes.length == 2) {
            store.dispatch(add(letter_local))
            setTimeout(() => {
                store.dispatch(resetLetter())
                store.dispatch(resetMistakes())
            }, 200)
        } else {
            store.dispatch(add(letter_local))
        }
    }

}

function handleOpenModal(modal_string: string) {
    const modals = store.getState().modals;
    if (modals.includes(modal_string)) return;
    store.dispatch(addModal(modal_string))
}

function handleCloseModal() {
    store.dispatch(resetModal())
}

export { handleLetterVerificationLogic, handleOpenModal, handleCloseModal };