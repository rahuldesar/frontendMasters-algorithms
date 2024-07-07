export default function bs_list(haystack: number[], needle: number): boolean {
  let min = 0;
  let max = haystack.length;
  let mid = Math.floor(haystack.length / 2);

  while (min < max) {
    if (haystack[mid] === needle) {
      return true;
    } else if (haystack[mid] < needle) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
    mid = Math.floor((min + max) / 2);
  }

  return false;
}
