import ThiagoDorville from './assets/CollaboratorsImages/ThiagoDorville.png'
import EugenioLopes from './assets/CollaboratorsImages/EugenioLopes.jpg'
import MikaelHenrique from './assets/CollaboratorsImages/MikaelHenrique.png'
import NathalyaArcida from './assets/CollaboratorsImages/NathalyaArcida.png'
import BrenoSiqueira from './assets/CollaboratorsImages/BrenoSiqueira.png'

interface Collaborator {
    firstName: string;
    lastName: string;
    img: string;
    role: 'Desenvolvimento' | 'Documentação' | 'Prototipação' | 'Suporte';
}

const Collaborators: Collaborator[] = [
    {
        firstName: 'Thiago',
        lastName: 'Dorville',
        img: ThiagoDorville,
        role: 'Desenvolvimento'
    },
    {
        firstName: 'Eugenio',
        lastName: 'Lopes',
        img: EugenioLopes,
        role: 'Documentação'
    },
    {
        firstName: 'Nathalya',
        lastName: 'Arcida',
        img: NathalyaArcida,
        role: 'Suporte'
    },
    {
        firstName: 'Mikael',
        lastName: 'Henrique',
        img: MikaelHenrique,
        role: 'Prototipação'
    },
    {
        firstName: 'Breno',
        lastName: 'Siqueira',
        img: BrenoSiqueira,
        role: 'Documentação'
    },
]

export default Collaborators