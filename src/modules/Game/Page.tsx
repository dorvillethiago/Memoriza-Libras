import {Letter, getRandomLetter} from "./letterUtils.ts";
import {useState} from "react";
import Header from "./sessions/Header.tsx";

export default function Game() {
    
    const [letter] = useState<Letter>(getRandomLetter())
    
    return (
        <div className={`flex w-screen flex-col items-center gap-20 min-h-[700px]`} style={{height: "100svh"}}>
            <Header/>
            {<img src={letter.url} alt={letter.str} width={200} height={200}/>}
            <h1 className={`text-[200px] font-bold text-accent`}>{letter.str}</h1>
        </div>
    )
}