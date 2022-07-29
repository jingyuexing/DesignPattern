interface Target{
  request():void;
}

class ConcreteTarget implements Target{
    request(): void {
      console.log("方法的实现");
    }
}

class Adaptee{
  adapteeRequest():void{
    console.log("被适配的方法")
  }
}

class Adapter extends Adaptee implements Target{
    request(): void {
      super.adapteeRequest()
    }
}
