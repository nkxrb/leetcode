import { search } from '../problems/704'

/**
 * 1 <= nums.length <= 104
 * -104 < nums[i], target < 104
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 */

test('test 704', () => {
  const nums = [-1, 2, 3, 9, 41]
  const target = 9
  expect(search([0], 0)).toBe(0)
  expect(search([9], 9)).toBe(0)
  expect(search([9], 8)).toBe(-1)
  expect(search([-129, -45, -28, -10], -28)).toBe(2)
  expect(search(nums, target)).toBe(3)
})



