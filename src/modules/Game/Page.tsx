import Header from "./sessions/Header.tsx";
import MainPictureContainer from "./sessions/MainPictureContainer.tsx";
import LetterContainer from "./sessions/LetterContainer.tsx";
import ScoreModal from "@/modules/Game/components/ScoreModal.tsx";
import NewBestScore from "./components/NewBestScore.tsx";

export default function Game() {
    return (
        <div className={`flex w-screen flex-col items-center justify-between min-h-[700px]`} style={{height: "100svh"}}>
            <Header/>
            <MainPictureContainer/>
            <LetterContainer/>
            <ScoreModal />
            <NewBestScore/>
        </div>
    )
}