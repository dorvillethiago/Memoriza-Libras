import "../assets/LetterShadow.css"
interface LetterButtonProps {
    letter: string;
    onClick: () => void;
}

export default function LetterButton({letter, onClick}: LetterButtonProps) {
    return (
        <button className="bg-primary font-bold text-background rounded-[15px] w-[50px] h-[50px] letter-shadow hover:scale-110 active:scale-75 transition-transform" onClick={onClick}>
            {letter}
        </button>
    )
}