export function randomNumber(min, max) {
  const num = min + Math.random() * (max - min);
  return Math.round(num);
}

export function randomTranslate(min, max, size) {
  let num;
  if (size > 2000) {
    num = `${min * 20 + Math.random() * (max * 20 - min * 20)}px`;
  } else {
    num = `${min + Math.random() * (max - min)}vw`;
  }

  return num;
}

export function randomRotate(min, max) {
  const num = min + Math.random() * (max - min);
  return num;
}

export function getSortedDateArray(obj) {
  const dates = Object.keys(obj).map((x) => new Date(x));
  const datesSorted = dates.sort((a, b) => b - a);
  const datesSortedFormated = datesSorted.map((x) => x.toISOString().slice(0, 10));

  return datesSortedFormated;
}
