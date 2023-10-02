import "../assets/ButtonShadow.css"
import Tradutor from "../assets/tradutor1.png"

interface LibraSymbolButtonProps {
    onClick: () => void
}

export default function LibraSymbolButton( {onClick} : LibraSymbolButtonProps ) {
    return (
        <button
        className="bg-primary h-[40px] gap-3 rounded-md button-shadow flex flex-row items-center justify-between px-3 active:scale-75 transition-transform hover:scale-110"
        onClick={onClick}>
            <span className="text-background font-bold">PONTOS</span>
            <img alt="tradutor asset" src={Tradutor} width={25} height={25}></img>
        </button>
    )
}