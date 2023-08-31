import Mao from '../assets/mao_menu.png'
import Titulo from '../assets/titulo_menu.png'

export default function Logo() {
    return (
        <div className="flex relative w-[630px] h-[293px] items-center">
            <img alt="ícone de mão"
                 src={Mao}/>
            <img alt="logo principal"
                 src={Titulo} 
                 className="absolute right-0 bottom-10"/>
        </div>
    )
}