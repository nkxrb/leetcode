export const searchInsert = function (nums, target) {
  let i = 0
  let j = nums.length - 1
  let mid = 0

  if (nums[0] > target) {
    return 0
  }

  if (nums[j] < target) {
    return j + 1
  }

  while (i <= j) {
    mid = Math.ceil((j + i) / 2)
    if (nums[mid] > target) {
      j = mid
    } else {
      i = mid
    }

    if (j - i === 1 || j - i === 0) {
      return nums[i] === target ? i : j
    }
  }
};