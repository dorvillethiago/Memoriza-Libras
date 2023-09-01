interface TituloProps {
    className?: string;
}

export default function Titulo({ className }: TituloProps) {
    return (
        <div className={className}>
            <h1 className="text-center leading-[72px] text-[88px] font-black rotate-[1.4deg] text-[#A199DE] absolute right-1 bottom-1">MEMORIZA<br/>LIBRAS</h1>
            <h1 className="text-center leading-[72px] text-[88px] font-black rotate-[1.4deg] text-[#6E5AFF]">MEMORIZA<br/>LIBRAS</h1>
        </div>
    )
}
