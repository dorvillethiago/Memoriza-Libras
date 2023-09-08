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
            className={`flex flex-row items-center justify-center bg-gap-20 bg-purple-700 rounded-[17px]
                smartphone:absolute smartphone:h-[850px] smartphone:w-[320px] smartphone:bg-[#453C85]
                tablet:absolute tablet:w-[750px] tablet:h-[520px]
                laptop:w-[1000px] laptop:h-[520px] laptop:relative`}>
            <div className={
                `smartphone:absolute smartphone:h-[850px] smartphone:w-[320px] smartphone:bg-[#6456C8] smartphone:left-6 smartphone:top-8
                tablet:absolute tablet:w-[750px] tablet:h-[520px] tablet:bg-[#6456C8] tablet:left-6 tablet:top-8
                laptop:absolute laptop:w-[1000px] laptop:h-[520px] laptop:bg-[#6456C8] laptop:left-6 laptop:top-8
                rounded-[17px]`
            }/>
            <div className={`
                smartphone:absolute smartphone:h-[850px] smartphone:w-[336px]  smartphone:bg-[#6456C8] smartphone:left-6 smartphone:top-8 smartphone:pt-[20px] smartphone:pb-[30px] smartphone:pl-[20px]
                tablet:absolute tablet:grid-cols-2 tablet:w-[750px] tablet:h-[520px] tablet:bg-[#6456C8] tablet:left-6 tablet:top-8
                laptop:w-[1000px] laptop:h-[520px] laptop:grid-cols-3 laptop:left-6 laptop:top-8 laptop:p-[50px]
                rounded-[17px] flex flex-row grid items-center gap-2
            `}>
              <ColaboradorCard src={ThiagoDorville} firstName={'THIAGO'} surName={'DORVILLE'} duty={'Desenvolvedor'} organizor={'Organizador'}></ColaboradorCard>
              <ColaboradorCard src={NathalyaArcida} firstName={'NATHALYA'} surName={'ARCIDA'} duty={'Pesquisa'}></ColaboradorCard>
              <ColaboradorCard src={EugenioLopes} firstName={'EUGENIO'} surName={'LOPES'} duty={'Desenvolvedor'}></ColaboradorCard>
              <ColaboradorCard src={HugoLessa} firstName={'HUGO'} surName={'LESSA'} duty={'Prototipagem'}></ColaboradorCard>
              <ColaboradorCard src={MikaelHenrique} firstName={'MIKAEL'} surName={'HENRIQUE'} duty={'Desenvolvedor'}></ColaboradorCard>
              <ColaboradorCard src={BrenoSiqueir} firstName={'BRENO'} surName={'SIQUEIRA'} duty={'Documentação'}></ColaboradorCard>
            </div>
          </motion.div>
        </div>
      );
}

