interface ElementSize {
  height: number;
  width: number;
}
export interface TypographyDimentions {
  fontSize: number;
  lineHeight: number;
}
// TODO: Add support for optional height.
export function calculateTypographyDimentions(
  elementSize: ElementSize,
  str: string
): TypographyDimentions {
  const words = composeWords(str.split(" "), 6);
  const longestWord = calcLonguestStrInArray(words);
  const lines = Math.ceil((str.length - 1) / longestWord.length);
  const fontSize = calcFontSize(elementSize, longestWord, lines);
  const lineHeight = elementSize.height / lines / fontSize;

  return {
    fontSize: Number(fontSize.toFixed(2)),
    lineHeight: Number(lineHeight.toFixed(2)),
  };
}

function composeWords(words: string[], maxWordLength: number) {
  return words.reduce(function (acc, curr, index) {
    if (
      acc[index - 1] &&
      acc[index - 1].length + curr.length <= maxWordLength
    ) {
      acc[index - 1] = `${acc[index - 1]} ${curr}`;
    } else {
      acc.push(curr);
    }

    return acc;
  }, []);
}

// "calcAverageCharRatio" function takes a string as parameter and returns
// the average ratio between font-size and character width in full percentage.
function calcAverageCharRatio(str: string): number {
  str = str.toLowerCase();
  // "charRatios" calculated for secondary theme font "Montserrat Bold" by
  // experimenting on the browser
  const charRatios = {
    "i .": 31.25,
    j: 50,
    eétysflz: 62.5,
    px: 68.75,
    rakcvb: 75,
    qudghn: 81.25,
    oó: 87.5,
    m: 93.75,
    w: 118.75,
  };

  return (
    str.split("").reduce(function (acc, curr) {
      for (const key in charRatios) {
        if (key.includes(curr)) acc += charRatios[key];
      }

      return acc;
    }, 0) / str.length
  );
}

function calcLonguestStrInArray(words: string[]) {
  return words.reduce(function (acc, curr) {
    if (
      curr.length * calcAverageCharRatio(curr) >
      acc.length * calcAverageCharRatio(acc)
    ) {
      acc = curr;
    }

    return acc;
  }, " ");
}

function calcFontSize(
  elementSize: ElementSize,
  longuestLine: string,
  totalLines: number
) {
  let fontSize =
    elementSize.width /
    longuestLine.length /
    (calcAverageCharRatio(longuestLine) / 100);
  if (fontSize * totalLines > elementSize.height) {
    fontSize = elementSize.height / totalLines;
  }

  return fontSize;
}
