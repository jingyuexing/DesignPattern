interface CourseIterator{
  nextCourse(): ACourse;
  isLastCourse():boolean;
}

interface CourseAggregate{
  addCourse(course:ACourse):void;
  removeCourse(course:ACourse):void;

}

class ACourse{
  _name: string;
  constructor(name:string){
    this._name = name;
  }
  get name(): string{
    return this._name;
  }
}
class CourseIteratorImpl implements CourseIterator{
    private list:Array<ACourse>;
    private position:number;
    constructor(courseList:Array<ACourse>){
      this.list = courseList;
      this.position = 0;
    }
    nextCourse(): ACourse {
      return this.list[this.position++]
    }
    isLastCourse(): boolean {
      return this.position < this.list.length;
    }
}

class CourseAggregateImpl implements CourseAggregate{
    courseList:Array<ACourse>;
    constructor(){
      this.courseList = [];
    }
    addCourse(course: ACourse): void {
      this.courseList.push(course);
    }
    removeCourse(course: ACourse): void {
      this.courseList.pop();
    }

    getCourseIterator(){
      return new CourseIteratorImpl(this.courseList);
    }
}

/**
 * 使用迭代器实现链表的迭代器
 */
interface IListIterator<T>{
  next():T|null;
  isLast():boolean;
}

interface IListNode<T>{
  value:T;
  next:IListNode<T>|null;
}
interface IList<T>{
  append(element: T):void;
  remove(node:IListNode<T>):void;
  find(node:IListNode<T>):IListNode<T>|null;
}

class ListNode<T> implements IListNode<T>{
    value: T;
    next: IListNode<T>|null;
    constructor(value:T){
      this.value = value;
      this.next = null;
    }
}

class List<T> implements IList<T>{
    head:ListNode<T|null>;
    position:ListNode<T>|null;
    constructor(){
      this.position = this.head = new ListNode<T|null>(null);
    }
    append(element:T): void {
      let newNode = new ListNode<T>(element);
      if(this.head == null){
        this.position = this.head = newNode;
      }else{
        this.position.next = newNode;
        this.position = this.position.next
      }
    }
    remove(node: ListNode<T>): void {
      let findOne = this.find(node);
      if(findOne){
        node.value = findOne.next.value;
        node.next = findOne.next.next;
      }
    }
    find(node: ListNode<T>|null): ListNode<T> {
      let currentNode:ListNode<T>|null = this.head;
      if(node){
        while(currentNode.value != node.value && currentNode != null){
          currentNode = currentNode.next;
        }
      }
      return currentNode;
    }
}

class ListIterator<T> implements IListIterator<T>{
    list:List<T>;
    position:ListNode<T>;
    constructor(list:List<T>){
      this.list = list;
      this.position = this.list.head;
    }
    next():ListNode<T>{
      this.position = this.position.next;
      return this.position;
    }
    isLast(): boolean {
      return this.position.next == null;
    }
}


  let list = new List<number>();
  list.append(66);
  list.append(45);
  list.append(90);
  list.append(83);
  let itr = new ListIterator<number>(list);
  while(!itr.isLast()){
    let num =itr.next();
    console.log(num.value)
  }
