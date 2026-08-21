function containsDuplicate(nums: number[]) {
  const filteredSet = new Set(nums);

  return filteredSet.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 30, 4, 5, 3]));

// Space: O(n), Time: O(n)

// why O(n) ? Because we have loop when set Set(nums)