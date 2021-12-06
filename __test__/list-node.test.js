import { ListNode } from '../utils/ListNode'

test('test ListNode', () => {
  let emptyNode = new ListNode()
  expect(emptyNode.val).toBe(0)
  expect(emptyNode.next).toBeNull()
  expect(emptyNode instanceof ListNode).toBe(true)

  let arr = [1, 2, 3, 4]
  let node = ListNode.transformArr(arr)
  expect(node.val).toBe(1)
  expect(node.next.val).toBe(2)
  expect(node.next.next.next.val).toBe(4)
  expect(node.next.next.next.next).toBeNull()
})