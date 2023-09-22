import "../assets/LetterShadow.css"
interface LetterButtonProps {
    letter: string;
    onClick: () => void;
}

export default function LetterButton({letter, onClick}: LetterButtonProps) {
    return (
        <button className="bg-primary font-bold text-background rounded-[15px] w-[50px] h-[50px] letter-shadow" onClick={onClick}>
            {letter}
        </button>
    )
}