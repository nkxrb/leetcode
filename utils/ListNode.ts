class ListNode<T> {
  val: number | T
  next: ListNode<T> | null
  constructor(val?: T, next?: ListNode<T>) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  toString() {
    let arr = []
    let node = this as ListNode<T> | null
    while (node !== null) {
      arr.push(node.val)
      node = node.next
    }
    return Array.prototype.toString.call(arr)
  }

  static transformArr<T>(arr: Array<T>) {
    if (arr.length < 2) {
      return new ListNode<T>(arr[0])
    }

    let next = new ListNode(arr[1])
    let head = new ListNode(arr[0], next)
    for (let i = 2; i < arr.length; i++) {
      let node = new ListNode(arr[i])
      next.next = node
      next = node
    }
    return head
  }
}

export { ListNode }
