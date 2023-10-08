import ButtonSequence from "./sessions/ButtonSequence.tsx";
import LogoContainer from "./sessions/LogoContainer.tsx";

export default function Root() {
    return(
        <div className={`flex w-screen flex-col items-center justify-center gap-20 min-h-[700px]`} style={{height: "100dvh"}}>
            <LogoContainer/>
            <ButtonSequence/>
        </div>
    )
}