import { largePlus } from '../utils/large-plus'

test('plus 999999999999 + 213456 to equal 1000000213455', () => {
  expect(largePlus('999999999999', '213456')).toBe('1000000213455');
})