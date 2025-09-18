import { reverseInput as myReverse } from '../reverse'
import { facts as peerFacts } from 'realwsim/src/lib/filters'

export function Combined(xs: number[]): string {
    // Apply factorial, then reverse order as a string
    const afterMine = peerFacts(xs).toString();
    return myReverse(afterMine);
}