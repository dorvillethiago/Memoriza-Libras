import "../assets/BoardShadow.css"
import "../assets/ImageShadow.css"
import { Letter } from "../letterUtils"

interface MainPictureAndTextProps {
    letter: Letter;
    mobile?: boolean;
}

export default function MainPictureAndText({letter, mobile = false}:MainPictureAndTextProps) {
    if (mobile) {
        return (
            <div
                className="bg-primary w-full max-w-[700px] h-[500px] board-shadow rounded-xl flex flex-col items-center p-24 justify-between">
                <img className="rounded-xl w-[140px] image-shadow" src={letter.url} alt={letter.str}/>
                <span className={`relative z-10 `}>
                    <h1 className="text-center font-bold text-background text-[35px] leading-[40px]">QUE LETRA É ESSA?</h1>
                    <h1 className="text-center font-bold text-[#B89DCD] text-[35px] leading-[40px] absolute bottom-[2px] right-[2px] -z-10">QUE LETRA É ESSA?</h1>
                </span>
            </div>
        )
    } else {
        return (
            <div
                className="bg-primary w-full max-w-[700px] h-[400px] board-shadow rounded-xl flex flex-row items-center p-24 justify-between">
                <img className="rounded-xl w-[180px] image-shadow" src={letter.url} alt={letter.str}/>
                <span className={`relative z-10`}>
                    <h1 className="text-right font-bold text-background text-[50px] leading-[55px]">QUE<br/>LETRA<br/>É<br/>ESSA?</h1>
                    <h1 className="text-right font-bold text-[#B89DCD] text-[50px] leading-[55px] absolute right-[3px] bottom-[3px] -z-10">QUE<br/>LETRA<br/>É<br/>ESSA?</h1>
                </span>
            </div>
        )
    }
}