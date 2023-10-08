export interface Letter {
    url: string;
    str: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
}

export const Alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';

export function getRandomLetter(): Letter {
    const randomNumber = Math.floor(Math.random() * Alphabet.length);
    console.log(Alphabet[randomNumber])
    return <Letter>{
        url: `/${Alphabet[randomNumber]}.jpeg`,
        str: Alphabet[randomNumber]
    }
}