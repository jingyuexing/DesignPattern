/**
 * 外观模式 又称门面模式
 * 提供了一个统一的接口 用来访问子系统的一群接口
 * 外观模式定义了一个高层接口,让子系统更容易使用
 *
 * 当子系统越来越复杂,增加外观模式提供简单的调用接口
 * 构建多层系统结构,利用外观对象作为每层的入口,简化层级间的调用
 *
 * 优点:
 *     简化了调用过程,无需深入子系统,防止带来风险
 *     减少系统依赖,松散耦合
 *     更好的划分访问层次
 *     符合迪米特法则,即最少知道原则
 *
 * 缺点：
 *     增加子系统扩展子系统行为容易引入风险
 *     不符合开闭原则
 */


/**
 * 外观类
 */
class Facade{

}


/**
 * 积分礼品
 */
class PointGift{
  private giftname:string;
  constructor(Giftname:string){
    this.giftname = Giftname;
  }
}


/**
 * 积分校验服务 (子系统)
 */
class QualifyService{
  isAvailable():boolean{
    return true;
  }
}

class ShippingService{
  shipGift(pointgift:PointGift){

  }
}

/**
 * 积分支付服务 (子系统)
 */
class PointPaymentService{
  pay(){
    // 扣减积分

  }
}

/**
 * 为不同服务提供统一的接口
 */
class GiftExchangeService{
  qualifyService:QualifyService|null = null;
  pointPaymentService:PointPaymentService|null = null;
  shipingService:ShippingService|null = null;
  giftExchange(gift:PointGift){
    /**
     * 查看是否有资格
     */
    if(this.qualifyService?.isAvailable()){
      // 积分支付
      if(this.pointPaymentService?.pay()){
        return this.shipingService?.shipGift(gift);
      }
    }
  }
}
