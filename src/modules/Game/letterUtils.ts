export interface Letter {
    url: string;
    str: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
}

export const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function getRandomLetter(): Letter {
    const randomNumber = Math.floor(Math.random() * Alphabet.length);
    return <Letter>{
        url: `src/modules/Game/assets/${Alphabet[randomNumber]}.jpeg`,
        str: Alphabet[randomNumber]
    }
}