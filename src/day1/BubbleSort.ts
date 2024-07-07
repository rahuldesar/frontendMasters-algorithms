export default function bubble_sort(arr: number[]): void {
  for (let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr.length - index; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
