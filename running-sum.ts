function runningSum(nums: number[]): number[] {
  let arr: number[] = [];

  let prefix = 0;

  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i];

    arr.push(prefix);
  }

  return arr;
}

// Space: O(1), Time O(n)
console.log(runningSum([1, 2, 3, 4]));
