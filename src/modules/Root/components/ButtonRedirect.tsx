import { useNavigate } from "react-router-dom";

interface ButtonRedirectProps {
    page: string,
    title: string
}
export default function ButtonRedirect({page, title}: ButtonRedirectProps) {
    const navigate = useNavigate();

    return (
        <div className={`relative w-[307px] h-[71px]`}>
            <div className={`absolute w-[307px] h-[71px] bg-[#453C85] rounded-[17px] -z-10 right-3 bottom-3`}/>
            <button
                className={`bg-[#6456C8] text-background w-[307px] h-[71px] rounded-[17px] text-[20px] font-extrabold tracking-wide`}
                onClick={() => {
                    navigate(page);
                }}
            >
                {title}
            </button>
        </div>
    );
}