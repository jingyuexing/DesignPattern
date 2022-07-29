/**
 * 让多个观察者同时监听某个对象,当对象发生变化,
 * 它的所有依赖者(观察者)都会收到通知并且更新
 *
 * 比如一个婴儿受到观察 分别为妈妈  爸爸 宠物狗
 * 当婴儿醒来的时候三个观察者分别执行对应的行为
 */

interface Observer{
  action(e:any):void;
}

class Dad implements Observer{
    action(e:any): void {
      if(e){
      }
    }

}
class StateEvent{
  state:string;
  target:object;
  constructor(state:string,target:object){
    this.state = state;
    this.target = target;
  }
}

class Child{
  cry:boolean = false;
  list:Observer[] = []
  addObserver(ob:Observer){
    this.list.push(ob);
  }
  changeState(state:boolean){
    this.cry = state;
    if(this.cry){
      for(let x of this.list){
        x.action(this.cry);
      }
    }
  }
}


// 对消息进行观察
// 观察者是机器人

interface Message{
  uid:number; // QQ号
  time:number; // 消息时间戳
  content:string; // 消息正文
}

class Member implements Observer{
  message:Message;
  constructor(message:Message){
    this.message = {
      uid:0,
      time:0,
      content:""
    }
  }
  action(e:Message):void{
    if(e.content == "抽奖"){
      //参与抽奖
    }
  }
}

class Bot{
  list:Observer[] = [];
  addObserver(ob:Observer){
    this.list.push(ob);
  }
  getMessage(e:Message){
    if(e.content.includes("抽奖")){ //如果接受到的消息里包含抽奖 将用户放入监听列表
      this.addObserver(new Member(e));
    }
  }
  ruffle(){
    for(let x of this.list){
      x.action(""); //抽奖开始 遍历列表
    }
  }
}
