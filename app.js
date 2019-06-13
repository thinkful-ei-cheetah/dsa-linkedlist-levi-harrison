const LinkedList = require('./linkedlist')

function main() {
  let SLL = new LinkedList()

  // let init = [
  //   'Apollo',
  //   'Boomer',
  //   'Helo',
  //   'Husker',
  //   'Starbuck'
  // ]
  // init.map(name => SLL.insertLast(name))
  // init.map(name => console.log(SLL.find(name)))
  // SLL.insertLast('Tauhida')
  // console.log(SLL.find('Tauhida'))
  // SLL.remove('squirrel')
  // console.log(SLL.find('bannana'))
  // SLL.insertBefore('banana', 'Tauhida')
  // console.log(SLL.find('Starbuck'))
  // console.log(SLL.find('banana'))
  // console.log(SLL.find('Tauhida'))
  // SLL.insertBefore('banana2', 'Apollo')
  // console.log(SLL.find('banana2'))
  // SLL.insertAfter('banana3' , 'Tauhida')
  // console.log(SLL.find('Tauhida'))
  // let ordered = [
  //   1,
  //   2,
  //   4
  // ]
  SLL.insertLast(1)
  SLL.insertLast(2)
  SLL.insertLast(4)
  SLL.insertLast(5)
  SLL.insertLast(6)
  SLL.insertLast(2)
  SLL.insertLast(4)
  SLL.display()
  // ordered.map(num => SLL.insertLast(num))
  // ordered.map(num => console.log(SLL.find(num).value))
  // SLL.insertInSortedOrder(3)
  // console.log(SLL.find(2))
  // SLL.insertBefore(3, 4)
  // SLL.insertAfter(3, 2)
  // SLL.display()
  // SLL.isEmpty()
  // console.log(SLL.findPrevious(5))
  // console.log(SLL.findLast())
  // SLL.reverseList()
  // SLL.display()
  // console.log(SLL.findMiddle())
  console.log(SLL.isCycle())
}

main()