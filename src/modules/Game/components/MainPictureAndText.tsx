import "../assets/BoardShadow.css"
import "../assets/ImageShadow.css"
import { useSelector } from 'react-redux'
import {RootState} from "@/store.ts";

interface MainPictureAndTextProps {
    mobile?: boolean;
}

export default function MainPictureAndText({mobile = false}:MainPictureAndTextProps) {

    const letter = useSelector((state: RootState) => state.letter)

    if (mobile) {
        return (
            <div
                className="bg-primary w-full max-w-[700px] h-[400px] board-shadow rounded-xl flex flex-col items-center py-[50px] px-[15px] justify-between">
                <img className="rounded-xl w-[140px] image-shadow color-filter" src={letter.url} alt={letter.str}/>
                <span className={`relative z-10`}>
                    <h1 className="text-center font-extrabold text-background text-[35px] leading-[40px]">QUE LETRA É ESSA?</h1>
                    <h1 className="text-center font-extrabold text-[#453C85] text-[35px] leading-[40px] absolute top-2 -z-10">QUE LETRA É ESSA?</h1>
                </span>
            </div>
        )
    } else {
        return (
            <div
                className="bg-primary w-full max-w-[700px] h-[400px] board-shadow rounded-xl flex flex-row items-center p-24 justify-between">
                <img className="rounded-xl w-[180px] image-shadow color-filter" src={letter.url} alt={letter.str}/>
                <span className={`relative z-10`}>
                    <h1 className="text-right font-bold text-background text-[50px] leading-[55px]">QUE<br/>LETRA<br/>É<br/>ESSA?</h1>
                    <h1 className="text-right font-bold text-[#453C85] text-[50px] leading-[55px] absolute right-[5px] bottom-[5px] -z-10">QUE<br/>LETRA<br/>É<br/>ESSA?</h1>
                </span>
            </div>
        )
    }
}