import { useState } from "react";
import {Letter, getRandomLetter} from "./letterUtils.ts";
import Header from "./sessions/Header.tsx";
import MainPictureContainer from "./sessions/MainPictureContainer.tsx";

export default function Game() {
    const [letter] = useState<Letter>(getRandomLetter());
    return (
        <div className={`flex w-screen flex-col items-center gap-20 min-h-[700px]`} style={{height: "100svh"}}>
            <Header/>
            <MainPictureContainer letter={letter}/>
        </div>
    )
}