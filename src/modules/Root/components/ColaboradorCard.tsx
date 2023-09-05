import EugenioLopes from '../assets/Collaborators/Eugenio Lopes.jpg'



interface ImageProps {
    src: string,
    name: string,
    duty: string,
}

export default function ColaboradorCard({...ColaboradorInfo} :ImageProps) {
    return(
        <>
        {/* O background está presente somente para fins de contraste e a imagem está hardcoded provisoriamente */}
            <div className="flex relative w-[300px] h-[125px] items-center justify-center bg-slate-300 p-2">
                <div className="flex relative items-center justify-center">
                    <img className={`w-[120px] h-[120px] rounded-full`}
                        alt="Colaborador"
                        src={EugenioLopes} />
                </div>
                <div className='m-2'></div>
                <div className="flex relative flex-col justify-center">
                    <div>
                        <span className={`text-center leading-[22px] text-[24px] font-bold text-[#FFFFFF]`}>{ColaboradorInfo.name}</span>
                    </div>
                    <div>
                    <span className={`text-center leading-[15px] text-[16px] font-extralight text-[#FFFFFF]`}>{ColaboradorInfo.duty}</span>
                    </div>
                </div>
            </div>
        </>
    )
}