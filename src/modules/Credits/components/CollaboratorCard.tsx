import './CollaboratorShadow.css'

interface CollaboratorCardProps {
    img: string;
    firstName: string;
    lastName: string;
    role: string;
    mobile?: boolean;
}

export default function CollaboratorCard({ img, firstName, lastName, role, mobile = false }: CollaboratorCardProps) {
    if (mobile) {
        return (
            <div className="flex flex-col items-center gap-4 w-[200px] py-2">
                <img src={img}
                    className="rounded-full"
                    width={120}
                    height={120}
                    alt={`card-${firstName}_${lastName}`} />
                <div className="flex flex-col items-center">
                    <h1 className="text-background text-center text-2xl leading-[23px] font-bold">
                        {firstName.toUpperCase()}<br />{lastName.toUpperCase()}
                    </h1>
                    <label className="text-background">{role}</label>
                </div>
            </div>
            )
    } else {
        return (
            <div className="flex items-center gap-4 w-[270px] py-2">
                <img src={img}
                    className="rounded-full collaborator-shadow"
                    width={120}
                    height={120}
                    alt={`card-${firstName}_${lastName}`} />
                <div className="flex flex-col">
                    <h1 className="text-background text-2xl leading-[23px] font-bold">
                        {firstName.toUpperCase()}<br />{lastName.toUpperCase()}
                    </h1>
                    <label className="text-background">{role}</label>
                </div>
            </div>
            )
    }
}