import CollaboratorCard from "../components/CollaboratorCard";
import Collaborators from "../Collaborators";
import {useEffect, useState} from "react";
import { getWindowDimensions } from "../../../utils/getWindowDimensions.ts"
import { motion } from "framer-motion";
import "@utils/CartoonShadow.css"

export default function CollaboratorsContainer() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0}}
            animate={{ y: 0, opacity: 100}}
            className={`bg-primary max-w-[1053px] p-[40px] h-[600px] w-full max-[1150px]:mx-10 rounded-xl cartoon-shadow ${windowDimensions.width <= 755 ? 'overflow-y-scroll' : ''}`}>
            <div className="h-min w-full flex flex-wrap justify-around gap-14">
                {Collaborators.map((collaborator, index) => 
                    <CollaboratorCard key={index}
                        firstName={collaborator.firstName}
                        lastName={collaborator.lastName}
                        role={collaborator.role}
                        img={collaborator.img}
                        mobile={windowDimensions.width < 756}
                    />
                )}
            </div>
        </motion.div>
    )
}