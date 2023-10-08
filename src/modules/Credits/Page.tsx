import BackArrowContainer from "./sessions/BackArrowContainer";
import CollaboratorsContainer from "./sessions/CollaboratorsContainer";

export default function Credits() {
    return (
        <div className="w-screen min-h-[750px] flex flex-col" style={{height: '100dvh'}}>
            <BackArrowContainer/>
            <div className="flex h-full items-center justify-center">
                <CollaboratorsContainer />
            </div>   
        </div>
    )
}