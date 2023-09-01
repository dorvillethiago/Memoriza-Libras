import Mao from '../assets/mao_menu.png'
import Titulo from './Titulo'

export default function Logo() {
    return (
        <div className="flex relative w-[670px] h-[293px] items-center">
            <img alt="ícone de mão"
                 src={Mao}/>
            <Titulo className="absolute right-0 bottom-5"/>
        </div>
    )
}