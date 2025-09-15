import { describe, it, expect } from 'vitest';
import { reverseInput } from './reverse';

describe('reverseInput function', () => {
  it('reverses a string of numbers separated by spaces', () => { 
    const input = "4 3 10 1 127"; 
    const expected = "127 1 10 3 4";
    expect(reverseInput(input)).toEqual(expected);
  });
  it('reverses multiple words', () => {
    const input = "the quick brown fox";
    const expected = "fox brown quick the";
    expect(reverseInput(input)).toEqual(expected);
  });
});
