

// two pointers won't work for this problem, this code is trash (2)
function pivotIndex(nums: number[]): number {
  let pivotIndex = -1;

  let left = 0;
  let right = nums.length - 1;

  let leftSum = nums[left];
  let rightSum = nums[right];

  while (left < right) {
    if (leftSum > rightSum) {
      right--;
      rightSum += nums[right];
    } else if (leftSum < rightSum) {
      left++;
      leftSum += nums[left];
    } else {
      pivotIndex = left;
      break;
    }
  }

  return pivotIndex;
}

pivotIndex([1, 7, 3, 6, 5, 6]);
