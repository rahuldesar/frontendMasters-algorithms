export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q = [head];

  while (q.length) {
    let current = q.shift()!;

    if (needle == current.value) {
      return true;
    }

    if (current.left) {
      // path.push(current.value);
      q.push(current.left);
    }
    if (current.right) {
      q.push(current.right);
    }
  }
  return false;
}
