import ThiagoDorville from './assets/CollaboratorsImages/ThiagoDorville.png'
import EugenioLopes from './assets/CollaboratorsImages/EugenioLopes.jpg'
import HugoLessa from './assets/CollaboratorsImages/HugoLessa.png'
import MikaelHenrique from './assets/CollaboratorsImages/MikaelHenrique.png'
import NathalyaArcida from './assets/CollaboratorsImages/NathalyaArcida.png'
import BrenoSiqueira from './assets/CollaboratorsImages/BrenoSiqueira.png'

interface Collaborator {
    firstName: string;
    lastName: string;
    img: string;
    role: 'Desenvolvedor' | 'Designer' | 'Documentação' | 'Pesquisa' | 'Desenvolvedora';
}

const Collaborators: Collaborator[] = [
    {
        firstName: 'Thiago',
        lastName: 'Dorville',
        img: ThiagoDorville,
        role: 'Desenvolvedor'
    },
    {
        firstName: 'Eugenio',
        lastName: 'Lopes',
        img: EugenioLopes,
        role: 'Pesquisa'
    },
    {
        firstName: 'Nathalya',
        lastName: 'Arcida',
        img: NathalyaArcida,
        role: 'Desenvolvedora'
    },
    
    {
        firstName: 'Mikael',
        lastName: 'Henrique',
        img: MikaelHenrique,
        role: 'Documentação'
    },
    {
        firstName: 'Hugo',
        lastName: 'Lessa',
        img: HugoLessa,
        role: 'Designer'
    },
    {
        firstName: 'Breno',
        lastName: 'Siqueira',
        img: BrenoSiqueira,
        role: 'Documentação'
    },
]

export default Collaborators