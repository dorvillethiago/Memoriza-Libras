import Arrow from '../assets/arrow.svg'
import {useNavigate} from "react-router-dom";

export default function BackArrow() {
    const navigate = useNavigate();
    return(
        <div className={`relative w-[40px] h-[40px] hover:scale-110 active:scale-75 transition-transform`}>
            <div className={`absolute bg-[#453C85] w-[40px] h-[40px] rounded-full right-1 bottom-1 -z-10`}/>
            <button
                className={`bg-[#6E5AFF] w-[40px] h-[40px] rounded-full flex items-center justify-center z-10`}
                onClick={() => {
                    navigate(`/`);
                }}>
                <img src={Arrow}/>
            </button>
        </div>
    )
}