/**
 *  工厂方法
 * 定义:
 *    定义一个创建对象的接口,但让实现这个接口的类来决定实例化哪个类
 *    工厂方法让类的实例化推迟到子类中进行
 * 适用场景:
 *    1.创建对象需要大量的重复代码
 *    2.客户端不依赖于产品类实例如何被创建,实现等细节
 *    3. 一个类通过其子类来指定创建哪个对象
 *
 * 具体的产品由具体的工厂生产
 *
 * 优点:
 *   只需要知道产品对应的工厂,无需关心创建细节
 *   加入新产品符合开闭原则,提高可扩展性
 * 缺点:
 *   类的个数容易过多,增加复杂度
 *   增加了系统的抽象性和理解难度
 */

/**
 *
 */
interface Video{
  produce():string;
}

/**
 * 视频工厂本身不生产具体的视频,只是作为一个具体的标准</br>
 * 具体的产品生产则交由继承其子类实现具体的产品生产
 */
interface VideoFactory{
  getVideo():Video;
}

class PythonVideo implements Video{
    produce(): string {
        return "录制Python课程视频"
    }

}

class PythonVideoFactory implements VideoFactory{
  getVideo(){
    return new PythonVideo();
  }
}


class JavaVideo implements Video{
    produce(): string {
      return "录制Java课程视频,生产视频"
    }
}

class JavaVideoFactory implements VideoFactory{
  getVideo(){
    return new JavaVideo();
  }
}
/**
 * 具体的视频
 */
class RustVideo implements Video{
  produce(): string{
    return "录制Rust课程视频,生产视频";
  }
}


class RustVideoFactory implements VideoFactory{
  getVideo(){
    return new RustVideo();
  }
}


/**
 * test
 */

(function(){
  let videoFactory:VideoFactory = new RustVideoFactory();
  let video:Video  =  videoFactory.getVideo();
  console.log(video.produce())
  video = new JavaVideoFactory().getVideo();
  console.log(video.produce())
  video = new PythonVideoFactory().getVideo();
  console.log(video.produce())
})();

