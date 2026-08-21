function twoSum(nums: number[], target: number) {
  const list = new Map()

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const needed = target - current;

    if (list.has(needed)) {
      return [list.get(needed), i];
    }

    list.set(current, i);
  }
}
                //  0 1 2 3 4 5 6    
console.log(twoSum([3,4,1,2,5,6,3], 8))

// Space: O(n), Time: O(n)
