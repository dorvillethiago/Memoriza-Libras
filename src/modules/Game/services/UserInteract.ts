import store from '@/store.ts';
import {reset as resetLetter} from "@/modules/Game/states/letter.ts";
import {add, reset as resetMistakes} from "@/modules/Game/states/mistakes.ts";

function handleLetterVerificationLogic(letter_local: string) {

    const letter = store.getState().letter;
    const mistakes = store.getState().mistakes;

    if (letter_local == letter.str)  {
        store.dispatch(resetLetter())
        store.dispatch(resetMistakes())
    } else {
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