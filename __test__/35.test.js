import { searchInsert } from '../problems/35'

test('test 35', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
  expect(searchInsert([1, 3, 5, 6], 0)).toBe(0)
  expect(searchInsert([1], 1)).toBe(0)
})