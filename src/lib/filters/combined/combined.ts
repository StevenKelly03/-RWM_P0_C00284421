import { reverseInput as myReverse } from '../reverse'
import { facts as peerFacts } from 'realwsim/src/lib/filters'

export function Combined(xs: number[]): string 
{
	const afterMine = peerFacts(xs);
    const reversed = myReverse(afterMine) as number[];
    return reversed.join(" ");
}
