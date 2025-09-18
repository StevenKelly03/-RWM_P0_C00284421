import { facts as peerFacts } from 'realwsim'
import { reverseInput as myReverse } from '../reverse'

export function Combined(xs: number[]): string {
    // Apply factorial, then reverse order as a string
    const afterMine = peerFacts(xs).toString();
    return myReverse(afterMine);
}