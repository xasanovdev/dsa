// Version 1. Time: O(n2), Space: O(n)

function productExceptSelfV1(nums: number[]): number[] {
  const arr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = nums.reduce(
      (acc, num, index) => (index !== i ? acc * num : acc),
      1,
    );

    arr.push(sum);
  }

  return arr;
}

// console.log(productExceptSelfV1([1, 2, 3, 4]));

// Version 2. Time: O(n), Space: O(1)
function productExceptSelfV2(nums: number[]): number[] {
  const arr: number[] = [];

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    arr[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] *= suffix;
    suffix *= nums[i];
  }

  return arr;
}

console.log(productExceptSelfV2([1, 2, 3, 4]));

// 2*3*4, 1*3*4, 1*2*4, 1*2*3
