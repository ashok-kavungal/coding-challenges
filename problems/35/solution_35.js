class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    //create new node with value
    //if firest element, set head val to val
    //set tail to head
    //else set tail.next to this node
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const l1 = new SinglyLinkedList();
l1.push(1);
l1.push(2);
l1.push(4);

const l2 = new SinglyLinkedList();
l2.push(1);
l2.push(3);
l2.push(4);

var mergeTwoLists = function (l1, l2) {
  //l1 and l2 are heads
  //create a dummy node
  //make the dummy node the head of newlinkedlist
  //loop through l1 and l2
  //if l1 <= l2
  //put dumm.next as l1
  //change l1 to next node in l1
  //else
  //put dumm.nxt to l2
  //change to next node
  //repeat the same for next node of dummy

  //put dummy.next to l1 or l2 (if their values is not null)
  //return head.next, not include the dummy node

  let dummyNode = new Node(-1);
  let head = dummyNode;

  while (l1 !== null && l2 !== null) {
    if (l1.value <= l2.value) {
      dummyNode.next = l1;
      l1 = l1.next;
    } else {
      dummyNode.next = l2;
      l2 = l2.next;
    }

    dummyNode = dummyNode.next;
  }

  if (l1 !== null) {
    dummyNode.next = l1;
  } else {
    dummyNode.next = l2;
  }
  return head.next;
};

let result = mergeTwoLists(l1.head, l2.head);
//just printing the result as an array
let arr = [];
arr.push(result.value);
while (result.next) {
  result = result.next;
  arr.push(result.value);
}
console.log(arr); //[1,1,2,3,4,4]
