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
            <div className="flex relative items-center justify-center grid
                laptop:w-[300px] laptop:h-[125px] laptop:p-2
                tablet:w-[300px] tablet:h-[125px] tablet:p-2
                smartphone:w-[200px] smartphone:h-[100px]">
                <div className="flex
                    smartphone:w-[200px] smartphone:h-[100px]
                    laptop:w-[250px] laptop:h-[125px]
                    tablet:w-[250px] tablet:h-[125px]">
                    <div className="flex relative items-center justify-center
                        laptop:w-[250px] laptop:h-[125px]
                        tablet:w-[250px] tablet:h-[125px]
                        smartphone:w-[200px] smartphone:h-[100px]
                        ">
                            <img className={`
                                laptop:w-[120px] laptop:h-[120px]
                                tablet:w-[120px] tablet:h-[120px]
                                smartphone:w-[80px] smartphone:h-[90px]
                                rounded-full`}
                                alt={`Colaborador ${ColaboradorInfo.firstName}  ${ColaboradorInfo.surName} `}
                                src={ColaboradorInfo.src} />
                    </div>
                    <div className='m-2
                        tablet:m-2
                        laptop:m-2'></div>
                        <div className="flex relative flex-col justify-center
                             smartphone:h-[100px]">
                            <div>
                                <span className={`text-center font-bold text-[#FFFFFF]
                                    laptop:text-[24px] laptop:leading-[22px]
                                    tablet:text-[24px] tablet:leading-[22px]
                                    smartphone:text-[16px] smartphone:leading-[12px]
                                    `}>{ColaboradorInfo.firstName}</span>
                                <br />
                                <span className={`
                                    text-center font-bold text-[#FFFFFF]
                                    laptop:text-[22px] tablet:leading-[22px]
                                    tablet:text-[22px] tablet:leading-[22px]
                                    smartphone:text-[16px] smartphone:leading-[12px]
                                    `}>{ColaboradorInfo.surName}</span>
                            </div>
                            <div>
                                <span className={`text-center font-extralight text-[#FFFFFF]
                                    laptop:text-[16px] tablet:leading-[15px]
                                    tablet:text-[16px] tablet:leading-[15px]
                                    smartphone:text-[14px] smartphone:leading-[12px]
                                    `}>{ColaboradorInfo.duty}</span>
                            </div>
                            <div>
                                <span className={`text-center leading-[15px] text-[16px] font-extralight text-[#FFFFFF]
                                    laptop:text-[16px] tablet:leading-[15px]
                                    tablet:text-[16px] tablet:leading-[15px]
                                    smartphone:text-[14px] smartphone:leading-[12px]`
                                }>{ColaboradorInfo.organizor}</span>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}