import { motion } from "framer-motion";
import ColaboradorCard from "./components/ColaboradorCard";
import BackArrow from "./components/BackArrow";
import EugenioLopes from "../Credits/assets/Collaborators/EugenioLopes.jpg";
import ThiagoDorville from "../Credits/assets/Collaborators/ThiagoDorville.png";
import NathalyaArcida from "../Credits/assets/Collaborators/NathalyaArcida.png";
import BrenoSiqueir from "../Credits/assets/Collaborators/BrenoSiqueira.png";
import HugoLessa from "../Credits/assets/Collaborators/HugoLessa.png";
import MikaelHenrique from "../Credits/assets/Collaborators/MikaelHenrique.png";


export default function CreditScreen() {


    return (
        <div className={`flex flex-col items-center justify-center gap-20 min-h-[700px]`} style={{height: "100svh"}}>
            <div className="absolute top-6 left-7">
                <BackArrow></BackArrow>
            </div>
            <motion.div
            initial={{ y: 100, opacity: 0}}
            animate={{ y: 0, opacity: 100}}
            className={`relative flex flex-row items-center justify-center bg-gap-20 w-[1053px] h-[621px] bg-purple-700 rounded-[17px]`}>
                <div className={`absolute w-[1053px] h-[621px] bg-[#6456C8] rounded-[17px] left-6 top-6`}/>
                <div className={`flex flex-row items-center justify-center gap-7 p-[50px] w-[1053px] h-[621px] bg-[#453C85] rounded-[17px] grid grid-cols-3`}>
                    <ColaboradorCard src={ThiagoDorville} firstName={'THIAGO'} surName={'DORVILLE'} duty={'Desenvolvedor'} organizor={'Organizador'}></ColaboradorCard>
                    <ColaboradorCard src={NathalyaArcida} firstName={'NATHALYA'} surName={'ARCIDA'} duty={'Pesquisa'}></ColaboradorCard>
                    <ColaboradorCard src={EugenioLopes} firstName={'EUGENIO'} surName={'LOPES'} duty={'Desenvolvedor'}></ColaboradorCard>
                    <ColaboradorCard src={HugoLessa} firstName={'HUGO'} surName={'LESSA'} duty={'Prototipagem'}></ColaboradorCard>
                    <ColaboradorCard src={MikaelHenrique} firstName={'MIKAEL'} surName={'HENRIQUE'} duty={'Desenvolvedor'}></ColaboradorCard>
                    <ColaboradorCard src={BrenoSiqueir} firstName={'BRENO'} surName={'SIQUEIRA'} duty={'Documentação'}></ColaboradorCard>
                </div>
            </motion.div>
        </div>
    )
}