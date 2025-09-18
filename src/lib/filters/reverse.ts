export function reverseInput(input: string): string;
export function reverseInput(input: number[]): number[];
export function reverseInput(input: string | number[]): string | number[]
{
  if (typeof input === 'string')
  {
    const values = input.split(",");
    const reversed = values.reverse();
    return reversed.join(",");
  }

	// reverse array
  const result: number[] = [];
  for (let i = input.length - 1; i >= 0; i--)
  {
    result.push(input[i]);
  }
  return result;
}
