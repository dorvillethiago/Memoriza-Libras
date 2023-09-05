import ColaboradorCard from './components/ColaboradorCard';



export default function CreditScreen() {
    return(
        <div className={`flex w-screen flex-col items-center justify-center gap-20 min-h-[700px]`} style={{height: "100svh"}}>
            <ColaboradorCard src={''} name={"Eugenio Lopes"} duty={"Desenvolvedor"}></ColaboradorCard>
        </div>
    )
}