import "../assets/BoardShadow.css"
import { Letter } from "../letterUtils"

interface MainPictureAndTextProps {
    letter: Letter;
}

export default function MainPictureAndText({letter}:MainPictureAndTextProps) {
    
    return (
        <div className="bg-primary w-full max-w-[700px] h-[400px] board-shadow rounded-xl flex flex-row items-center p-24 justify-between">
            <img className="rounded-xl w-[180px]" src={letter.url} alt={letter.str}/>
            <h1 className="text-right font-bold text-background text-[50px] leading-[55px]">QUE<br/>LETRA<br/>É<br/>ESSA?</h1>
        </div>
    )
}