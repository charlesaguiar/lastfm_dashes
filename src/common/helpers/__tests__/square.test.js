import { squareIt } from '../square.ts';

describe('Testing jest', () => {
  it('should square number correctly', () => {
    expect(squareIt(0)).toBe(0);
    expect(squareIt(-2)).toBe(4);
    expect(squareIt(2)).toBe(4);
    expect(squareIt(3)).toBe(9);
  });
});
