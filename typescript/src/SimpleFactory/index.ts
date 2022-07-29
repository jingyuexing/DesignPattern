/**
 * 简单工厂并非 GOF 23种设计模式当中的模式
 *
 * 适用于简单工厂的场景:
 *   简单工厂负责创建的对象比较少
 *   客户端(应用层)只知道传入工厂类的参数,对于如何创建对象(具体逻辑)不关心
 * 优点:
 *   只需要传入一个正确的参数,,就可以获取你所需要的对象,而无需知道创建细节
 *   客户端可以免除创建产品的责任
 * 缺点:
 *    工厂类的职责相对过重,增加新的产品 需要修改工厂类的判断逻辑,违背开闭原则
 *    无法形成基于继承的等级结构
 *    当增加新的产品,会增加系统的类,当产品相对较多,工厂逻辑就变得复杂,不利于扩展
 */



interface Video{
  produce():string;
}


class PythonVideo implements Video{
    produce(): string {
        return "录制Python课程视频"
    }

}

class JavaVideo implements Video{
    produce(): string {
      return "录制Java课程视频,生产视频"
    }

}

/**
 * 视频工厂根据传入的参数直接生产具体的视频
 * 随着视频增加,需要修改这个工厂类
 * 使用静态修饰符可以比较方便的调用,如果不需要继承并且重写方法的话
 */
class VideoFactory{
  static getVideo(VideoType: string):Video|null{
    let instance:Video|null = null;
    if(VideoType == "java"){
      instance = new JavaVideo();
    }else if(VideoType == "python"){
      instance = new PythonVideo();
    }
    return instance;
  }
}

/**
 * test
 */
(function(){
  let video = VideoFactory.getVideo("python");
  console.log(video)
})();
