import { useState } from "react";
import {Letter, getRandomLetter} from "./letterUtils.ts";
import Header from "./sessions/Header.tsx";
import MainPictureContainer from "./sessions/MainPictureContainer.tsx";
import LetterContainer from "./sessions/LetterContainer.tsx";

export default function Game() {
    const [letter] = useState<Letter>(getRandomLetter());
    return (
        <div className={`flex w-screen flex-col items-center justify-between min-h-[700px]`} style={{height: "100svh"}}>
            <Header/>
            <MainPictureContainer letter={letter}/>
            <LetterContainer letter={letter}/>
        </div>
    )
}