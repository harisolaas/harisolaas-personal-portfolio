function debounce(callback: () => void, wait: number): () => void {
  let timeout: NodeJS.Timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, wait);
  };
}

function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function getRandomBoolean(): boolean {
  return Boolean(Math.round(Math.random()));
}

export { debounce, getRandomArbitrary, getRandomBoolean };
