import { useSelector } from 'react-redux';
import { RootState } from '@/store.ts';
import "../assets/LetterShadow.css";
import {handleLetterVerificationLogic} from "@/modules/Game/services/UserInteract.ts";
import {useEffect, useState} from "react";

interface LetterButtonProps {
    letter_string: string;
    mobile?: boolean;
}

export default function LetterButton({ letter_string, mobile = false}: LetterButtonProps) {

    const mistakes = useSelector((state: RootState) => state.mistakes)
    const letter = useSelector((state: RootState) => state.letter)
    const [correct, setCorrect] = useState<boolean>(false)

    useEffect(() => {
        if (correct) {
            setTimeout(() => {
                setCorrect(false)
            }, 300)
        }
    }, [correct]);

    function handleLetterClick(button_letter: string) {
        handleLetterVerificationLogic(button_letter)
        button_letter == letter.str ? setCorrect(true) : setCorrect(false)
    }

    {
        if (mobile) return (
            <button className={`${mistakes.includes(letter_string) ? 'bg-red-600' : 'bg-primary'} text-[16px] font-bold text-background
         rounded-[15px] w-[26px] h-[50px] hover:scale-110 transition-all
          active:scale-75 ${correct ? 'bg-accent' : 'bg-primary'}`} onClick={() => handleLetterClick(letter_string)}>
                {letter_string}
            </button>
        ); else { return (
            <button className={`${mistakes.includes(letter_string) ? 'bg-red-600' : 'bg-primary'} text-[20px] font-bold text-background
         rounded-[15px] w-[55px] h-[55px] letter-shadow hover:scale-110 transition-all
          active:scale-75 ${correct ? 'bg-accent' : 'bg-primary'}`} onClick={() => handleLetterClick(letter_string)}>
                {letter_string}
            </button>
            )
        }
    }
}