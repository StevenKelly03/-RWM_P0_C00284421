export function reverseInput(input: string): string 
{
  const parts = input.split(" "); // split input
  let result: string[] = [];      // store reversed

  for (let i = parts.length - 1; i >= 0; i--) // loop backwards
    { 
        result.push(parts[i]); // add each element
    }

  return result.join(" ");  // join back
}