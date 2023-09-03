import ButtonSequence from "./sessions/ButtonSequence.tsx";
import LogoContainer from "./sessions/LogoContainer.tsx";

export default function Root() {
    return(
        <div className={`flex w-screen flex-col items-center justify-center gap-20`} style={{height: "100svh"}}>
            <LogoContainer/>
            <ButtonSequence/>
        </div>
    )
}