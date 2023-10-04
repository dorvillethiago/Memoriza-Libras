import store from '@/store.ts';
import { reset as resetLetter } from "@/modules/Game/states/letter.ts";
import { add, reset as resetMistakes } from "@/modules/Game/states/mistakes.ts";

import CorrectSfx from '../assets/correct.mp3';
import IncorrectSfx from '../assets/incorrect.mp3';

//Carregando Sfx

const CorrectSfxObject = new Audio(CorrectSfx);
CorrectSfxObject.volume = 0.3;

const IncorrectSfxObject = new Audio(IncorrectSfx);
IncorrectSfxObject.volume = 0.25;

function handleLetterVerificationLogic(letter_local: string) {

    const letter = store.getState().letter;
    const mistakes = store.getState().mistakes;

    if (letter_local == letter.str) {
        CorrectSfxObject.play();
        store.dispatch(resetLetter())
        store.dispatch(resetMistakes())
    } else {
        IncorrectSfxObject.play();
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

export { handleLetterVerificationLogic };