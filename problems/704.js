export const search = function (nums, target) {
  let i = 0
  let j = nums.length - 1

  if (nums[i] > target) {
    return -1
  } else if (nums[j] < target) {
    return -1
  }

  while (i <= j) {
    if (nums[i] === target) {
      return i
    } else if (nums[j] === target) {
      return j
    }
    if (j - i > 1) {
      let mid = Math.ceil((j + i) / 2)
      if (nums[mid] > target) {
        j = mid
      } else {
        i = mid
      }
    } else {
      return -1
    }
  }

};
