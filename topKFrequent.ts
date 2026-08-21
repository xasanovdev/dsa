function topKFrequent(nums: number[], k: number): number[] {
  const counts = new Map();

  for (const num of nums) {
    if (counts.has(num)) {
      counts.set(num, counts.get(num) + 1);
    } else {
      counts.set(num, 1);
    }
  }

  const sortedList = Array.from(counts)
    .sort((a, b) => b[1] - a[1])
    .map((value) => value[0]);

  return sortedList.slice(0, k);
}

console.log(topKFrequent([5, 5, 6, 6, 6, 7], 1));
