import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store.ts';
import "../assets/LetterShadow.css";
import { reset as resetLetter } from "@/modules/Game/states/letter.ts";
import { increment, reset as resetTries } from '@/modules/Game/states/tries.ts';

interface LetterButtonProps {
    letter_string: string;
    mobile?: boolean;
}

export default function LetterButton({ letter_string, mobile = false}: LetterButtonProps) {

    const tries = useSelector((state: RootState) => state.tries)
    const letter = useSelector((state: RootState) => state.letter)
    const dispatch = useDispatch()

    function handleLetterClick(button_letter: string) {
        if (button_letter == letter.str)  {
            dispatch(resetTries())
            dispatch(resetLetter())
        } else {
            if (tries == 2) {
                dispatch(resetTries())
                dispatch(resetLetter())
            } else {
                dispatch(increment())
            }
        }
    }

    {
        if (mobile) return (
            <button className={`bg-primary text-[16px] font-bold text-background
         rounded-[15px] w-[26px] h-[50px] hover:scale-110
          active:scale-75 transition-transform`} onClick={() => handleLetterClick(letter_string)}>
                {letter_string}
            </button>
        ); else { return (
            <button className={`bg-primary text-[20px] font-bold text-background
     rounded-[15px] w-[55px] h-[55px] letter-shadow hover:scale-110
      active:scale-75 transition-transform`} onClick={() => handleLetterClick(letter_string)}>
                {letter_string}
            </button>
            )
        }
    }
}