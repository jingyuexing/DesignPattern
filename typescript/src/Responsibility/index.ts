/**
 * 责任链模式
 *
 * 为请求创建一个接受此次请求对象的链
 *
 * 行为型
 *
 * 适用:
 * 一个请求的处理需要多个对象当中的一个或几个协作处理
 *
 * 请求的发送者和接收者(请求的处理者)解耦
 *
 * 责任链可以动态
 *
 * 缺点：
 * 责任链太长或者处理时间过长，影响性能
 * 责任链有可能过多
 */

class WCourse {
  article: string | null = null;
  name: string | null = null;
  price: number | null = null;
  constructor() {

  }
}

abstract class Approver {
  protected approver: Approver | null = null;

  nextApprover(approver: Approver) {
    this.approver = approver;
  }
  abstract deploy(wcourse: WCourse): void;
}

class ArticleApprover extends Approver {
  deploy(wcourse: WCourse): void {
    if (wcourse.article) {
      console.log("包含笔记,允许通过")
      if (this.approver) {
        this.approver.deploy(wcourse);
      }
    } else {
      console.log("the article is empty!")
      // throw Error("the article is empty!")
    }
  }
}

class NameApprover extends Approver {
  deploy(wcourse: WCourse): void {
    if (Boolean(wcourse.name)) {
      console.log("包含名称,允许通过")
      if (this.approver) {
        this.approver.deploy(wcourse);
      }
    } else {
      console.log("the name is empty!")
      // throw Error("the name is empty!")
    }
  }

}
class PriceApprover extends Approver {
  deploy(wcourse: WCourse): void {
    if (Boolean(wcourse.price)) {
      console.log("包含价格,允许通过")
      if (this.approver) {
        this.approver.deploy(wcourse);
      }
    } else {
      console.log("the price is empty!")
      // throw Error("the price is empty!")
    }
  }

}

let course =  new WCourse()
course.article = "课程笔记"
course.name = "Java入门"

let article = new ArticleApprover()
let price = new PriceApprover()
let name_ = new NameApprover()
article.nextApprover(price)
name_.nextApprover(article)
article.deploy(course)
