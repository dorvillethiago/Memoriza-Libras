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
            <motion.button
                whileTap={{scale: 0.8}}
                className={`relative w-[200px] h-[61px] no-flicker`}>
                <div className={`absolute w-[200px] h-[61px] bg-[#453C85] rounded-[17px] -z-10 right-3 bottom-3`}/>
                <button
                    className={`bg-[#6456C8] text-background w-[200px] h-[61px] rounded-[17px] text-[20px] font-extrabold tracking-wide`}
                    onClick={() => {
                        navigate(page);
                    }}
                >
                    {title}
                </button>
            </motion.button>
        );
    } else {
        return (
            <motion.button
                whileTap={{scale: 0.7}}
                className={`relative w-[300px] h-[71px] no-flicker`}>
                <div className={`absolute w-[300px] h-[71px] bg-[#453C85] rounded-[17px] -z-10 right-3 bottom-3`}/>
                <button
                    onMouseOver={() => {}}
                    className={`bg-[#6456C8] text-background w-[300px] h-[71px] rounded-[17px] text-[23px] font-extrabold tracking-wide`}
                    onClick={() => {
                        navigate(page);
                    }}
                >
                    {title}
                </button>
            </motion.button>
        );
    }
}