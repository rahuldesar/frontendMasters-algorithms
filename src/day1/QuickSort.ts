function qs(arr: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }

  const pivotIdx = partition(arr, low, high);

  qs(arr, low, pivotIdx - 1);
  qs(arr, pivotIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
  let pivot = arr[high];
  let idx = low - 1;
  for (let index = low; index < high; index++) {
    if (arr[index] <= pivot) {
      idx++;
      let temp = arr[index];
      arr[index] = arr[idx];
      arr[idx] = temp;
    }
  }

  idx++;
  arr[high] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
