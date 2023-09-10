interface CollaboratorCardProps {
    img: string;
    firstName: string;
    lastName: string;
    role: string;
}

export default function CollaboratorCard({img, firstName, lastName, role}: CollaboratorCardProps) {
    return (
        <div className="flex">
            <img src={img} alt={`card-${firstName}_${lastName}`} />
            <div className="flex flex-col">
                <h1>{firstName}<br/>{lastName}</h1>
                <label>{role}</label>
            </div>
        </div>
    )
}