import { useNavigate } from "react-router-dom";
import "@utils/NoFlicker.css"
import {useState} from "react";
import Arrow from '../assets/Arrow.svg';
import "../assets/AnimationUtils.css"

interface ButtonRedirectProps {
    page: string,
    title: string
    mobile?: boolean
}
export default function ButtonRedirect({page, title, mobile = false}: ButtonRedirectProps) {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false)
    if (mobile) {
        return (
            <div
                onClick={() => {
                    navigate(page);
                }}
                className={`relative w-[200px] h-[61px] no-flicker hover:scale-105 active:scale-75 transition-transform`}>
                <div className={`absolute w-[200px] h-[61px] bg-[#453C85] rounded-[17px] -z-10 right-3 bottom-3`}/>
                <button
                    className={`bg-[#6456C8] flex items-center justify-center text-background w-[200px] no-flicker h-[61px] rounded-[17px] text-[20px] font-extrabold tracking-wide`}
                >
                    {title}
                </button>
            </div>
        );
    } else {
        return (
            <div
                onMouseOver={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            onClick={() => {
                navigate(page);
            }}
                className={`relative w-[300px] h-[71px] no-flicker hover:scale-105 active:scale-75 transition-transform`}>
                <div className={`absolute w-[300px] h-[71px] bg-[#453C85] rounded-[17px] -z-10 right-3 bottom-3`}/>
                <button
                    onMouseOver={() => {}}
                    className={`bg-[#6456C8] flex items-center justify-center text-background w-[300px] no-flicker h-[71px] rounded-[17px] text-[23px] font-extrabold tracking-wide`}
                >
                    {isHover ?
                        <img
                            alt="Arrow Selector"
                            src={Arrow}
                            className={`absolute left-5 transition-opacity-translate`}
                        />
                        :
                        <></>
                    }
                    {title}
                </button>
            </div>
        );
    }
}