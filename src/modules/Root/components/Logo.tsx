import Mao from '../assets/hand_menu.png'
import Title from './Title.tsx'

interface LogoProps {
    mobile?: boolean
}

export default function Logo({mobile = false}: LogoProps) {
    if (mobile) {
        return(
            <div className="flex relative w-[300px] h-[260px] items-center justify-center">
                <img className={`w-[240px] h-[240px]`}
                     alt="ícone de mão"
                     src={Mao}/>
                <Title rotate={false} mobile={true} className="absolute bottom-8 z-10"/>
            </div>)
    } else {
        return(
            <div className="flex relative w-[670px] h-[293px] items-center">
                <img className={`rotate-[-4.4deg]`}
                     alt="ícone de mão"
                     src={Mao}/>
                <Title rotate={true} mobile={false} className="absolute right-0 bottom-5 z-10"/>
            </div>)
    }
}