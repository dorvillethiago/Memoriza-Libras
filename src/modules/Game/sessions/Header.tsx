import BackArrow from "../components/BackArrow.tsx";
import {motion} from "framer-motion";
import LibraSymbomButton from "../components/LibraSymbolButton.tsx";

export default function Header() {
    
    return (
        <motion.header
            initial={{ y: 100, opacity: 0}}
            animate={{ y: 0, opacity: 100}}
            className={`w-full p-6 flex flex-row justify-between`}>
            <BackArrow/>
            <LibraSymbomButton onClick={() => {}}/>
        </motion.header>
    )
}