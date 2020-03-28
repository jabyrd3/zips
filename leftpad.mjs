export default (str, length = 3) => {
  // note: this is probably not optimized
  // fresh array reversed from integer
  const initial = str.toString()
    .slice()
    .split('')
    .reverse();
  return Array.from({length})
    .map((x, i) =>
      initial[length - 1 - i] &&
      initial[length - 1 - i].toString() ||
      '0')
    .join('');
};
