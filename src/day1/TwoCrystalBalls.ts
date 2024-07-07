export default function two_crystal_balls(breaks: boolean[]): number {
  let size = breaks.length;
  let min_window = 0;
  let answer = -1;

  for (let index = 0; index < breaks.length; index = index + Math.sqrt(size)) {
    if (breaks[index] === true) {
      break;
    }
    min_window = index;
  }

  for (let index = min_window; index < min_window + Math.sqrt(size); index++) {
    if (breaks[index] == true) {
      answer = index;
      break;
    }
  }
  return answer;
}
