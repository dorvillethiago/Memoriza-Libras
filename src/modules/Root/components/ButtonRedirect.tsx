import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "@utils/NoFlicker.css"
interface ButtonRedirectProps {
    page: string,
    title: string
    mobile?: boolean
}
export default function ButtonRedirect({page, title, mobile = false}: ButtonRedirectProps) {
    const navigate = useNavigate();

    if (mobile) {
        return (
            <button
                onClick={() => {
                    navigate(page);
                }}
                className={`relative w-[200px] h-[61px] no-flicker hover:scale-105 active:scale-75 transition-transform`}>
                <div className={`absolute w-[200px] h-[61px] bg-[#453C85] rounded-[17px] -z-10 right-3 bottom-3`}/>
                <button
                    className={`bg-[#6456C8] text-background w-[200px] no-flicker h-[61px] rounded-[17px] text-[20px] font-extrabold tracking-wide`}
                >
                    {title}
                </button>
            </button>
        );
    } else {
        return (
            <button
            onClick={() => {
                navigate(page);
            }}
                className={`relative w-[300px] h-[71px] no-flicker hover:scale-105 active:scale-75 transition-transform`}>
                <div className={`absolute w-[300px] h-[71px] bg-[#453C85] rounded-[17px] -z-10 right-3 bottom-3`}/>
                <button
                    onMouseOver={() => {}}
                    className={`bg-[#6456C8] text-background w-[300px] no-flicker h-[71px] rounded-[17px] text-[23px] font-extrabold tracking-wide`}
                >
                    {title}
                </button>
            </button>
        );
    }
}