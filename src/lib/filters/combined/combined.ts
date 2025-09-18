import { reverseInput as myReverse } from '../reverse'
import { facts as peerFacts } from 'realwsim/src/lib/filters'

export function Combined(xs: number[]): string 
{
    const afterMine = peerFacts(xs); // number[]
    return myReverse(afterMine);     // now it's valid
}
