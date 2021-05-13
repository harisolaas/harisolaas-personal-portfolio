import { calculateOptimalPathBetweenDigits } from "./dodecahedron";

describe("'calculateOptimalPathBetweenDigits' function", () => {
  it("should return a number between 1 and -1 describing the minimal distance between 2 digits", () => {
    expect(calculateOptimalPathBetweenDigits(0.1, 0.9)).toEqual(-0.2);
    expect(calculateOptimalPathBetweenDigits(0.5, 0.4)).toEqual(-0.1);
    expect(calculateOptimalPathBetweenDigits(0.3, 0.6)).toEqual(0.3);
    expect(calculateOptimalPathBetweenDigits(0.8, 0.2)).toEqual(0.4);
  });
});
