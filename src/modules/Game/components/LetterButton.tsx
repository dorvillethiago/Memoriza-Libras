import "../assets/LetterShadow.css"
interface LetterButtonProps {
    letter: string;
    onClick: () => void;
    mobile?: boolean;
}

export default function LetterButton({letter, onClick, mobile = false}: LetterButtonProps) {
    {
        if (mobile) return (
            <button className={`bg-primary text-[16px] font-bold text-background
         rounded-[15px] w-[26px] h-[50px] hover:scale-110
          active:scale-75 transition-transform`} onClick={onClick}>
                {letter}
            </button>
        ); else {
            return (
                <button className={`bg-primary text-[20px] font-bold text-background
         rounded-[15px] w-[55px] h-[55px] letter-shadow hover:scale-110
          active:scale-75 transition-transform`} onClick={onClick}>
                    {letter}
                </button>
            )
        }
    }
}