export function calculateOptimalPathBetweenDigits(
  from: number,
  to: number
): number {
  if (from < 0 || from >= 1 || to < 0 || to >= 1) {
    throw new Error(
      `Digits must be between 0 and 1. Received (${from}, ${to}).`
    );
  }
  let distance = from * 1000 - to * 1000;
  if (distance < 0 && distance < -500) {
    distance = (1000 + distance) * -1;
  } else if (distance > 0 && distance > 500) {
    distance = 1000 - distance;
  } else {
    distance *= -1;
  }

  return distance / 1000;
}
