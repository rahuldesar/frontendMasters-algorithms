export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number,
): number[] | null {
  const seen: boolean[] = new Array(graph.length).fill(false);
  seen[source] = true;

  const prev = new Array(graph.length).fill(-1);
  const q: number[] = [source];

  do {
    const curr = q.shift()!;
    if (curr === needle) break;

    const adjs = graph[curr];

    for (let i = 0; i < adjs.length; i++) {
      if (adjs[i] === 0) continue;
      if (seen[i] === true) continue;
      seen[i] = true;
      prev[i] = curr;

      q.push(i);
    }
    seen[curr] = true;
  } while (q.length);

  let curr = needle;
  const out: number[] = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  if (out.length) {
    return [source].concat(out.reverse());
  } else return null;
}
