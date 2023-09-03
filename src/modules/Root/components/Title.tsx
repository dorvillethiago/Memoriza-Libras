interface TitleProps {
    className?: string;
    rotate?: boolean;
    mobile?: boolean;
}

export default function Title({ className, rotate = false, mobile = false }: TitleProps) {
    if (mobile) {
        return (
            <div className={className}>
                <h1 className={`text-center leading-[42px] text-[48px] font-black ${rotate ? "rotate-[1.4deg]" : ""} text-[#A199DE] absolute right-1 bottom-1 -z-10`}>MEMORIZA<br/>LIBRAS
                </h1>
                <h1 className={`text-center leading-[42px] text-[48px] font-black ${rotate ? "rotate-[1.4deg]" : ""} text-[#6E5AFF]`}>MEMORIZA<br/>LIBRAS
                </h1>
            </div>
        )
    } else {
        return (
            <div className={className}>
                <h1 className={`text-center leading-[72px] text-[88px] font-black ${rotate ? "rotate-[1.4deg]" : ""} text-[#A199DE] absolute right-1 bottom-1 -z-10`}>MEMORIZA<br/>LIBRAS
                </h1>
                <h1 className={`text-center leading-[72px] text-[88px] font-black ${rotate ? "rotate-[1.4deg]" : ""} text-[#6E5AFF]`}>MEMORIZA<br/>LIBRAS
                </h1>
            </div>
        )
    }
}
