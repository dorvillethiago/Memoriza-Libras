import BackArrowContainer from "./sessions/BackArrowContainer";
import CollaboratorsContainer from "./sessions/CollaboratorsContainer";

export default function Credits() {
    return (
        <div className="w-screen min-h-[750px] h-screen flex flex-col">
            <BackArrowContainer/>
            <div className="flex h-full items-center justify-center">
                <CollaboratorsContainer />
            </div>   
        </div>
    )
}