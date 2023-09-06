interface ColaboradorProps {
    src: string,
    firstName: string,
    surName: string,
    duty: string,
    organizor?: string
}


export default function ColaboradorCard({...ColaboradorInfo} :ColaboradorProps) {
    return(
        <>
            <div className="flex relative w-[300px] h-[125px] items-center justify-center p-2 grid ">
                <div className="flex ">
                    <div className="flex relative items-center justify-center">
                            <img className={`w-[120px] h-[120px] rounded-full`}
                                alt={`Colaborador ${ColaboradorInfo.firstName}  ${ColaboradorInfo.surName} `}
                                src={ColaboradorInfo.src} />
                    </div>
                    <div className='m-2'></div>
                        <div className="flex relative flex-col justify-center">
                            <div>
                                <span className={`text-center leading-[22px] text-[24px] font-bold text-[#FFFFFF]`}>{ColaboradorInfo.firstName}</span>
                                <br />
                                <span className={`text-center leading-[22px] text-[24px] font-bold text-[#FFFFFF]`}>{ColaboradorInfo.surName}</span>
                            </div>
                            <div>
                                <span className={`text-center leading-[15px] text-[16px] font-extralight text-[#FFFFFF]`}>{ColaboradorInfo.duty}</span>
                            </div>
                            <div>
                                <span className={`text-center leading-[15px] text-[16px] font-extralight text-[#FFFFFF]`}>{ColaboradorInfo.organizor}</span>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}