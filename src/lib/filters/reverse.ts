export function reverseInput(input: number[]): string 
{
  let result: number[] = [];
  for (let i = input.length - 1; i >= 0; i--) 
  {
    result.push(input[i]);
  }
  return result.join(" ");
}
