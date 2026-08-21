function leftRightDifference(nums: number[]): number[] {
  let leftSum = 0;
  let rightSum = 0;
  const leftArr = [];
  const rightArr = [];

  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    leftArr[i] = leftSum;
    leftSum += nums[i];
  }

  for (let i = nums.length; i > 0; i--) {
    rightArr[i] = rightSum;
    rightSum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    answer.push(Math.abs(leftArr[i] - rightArr[i]));
  }

  return answer;
}

// Space O(n), Time O(n)