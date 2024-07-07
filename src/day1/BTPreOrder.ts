export default function pre_order_search(head: BinaryNode<number>): number[] {
  return search(head, []);
}

function search(node: BinaryNode<number> | null, arr: number[]): number[] {
  if (!node) {
    return arr;
  }

  arr.push(node.value);
  search(node.left, arr);
  search(node.right, arr);
  return arr;
}
