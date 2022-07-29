/**
 * 使用静态内部类完成单例模式
 */
class StaticInnerSingleton{
  private static inner = class {
    static staticInnerSingleton = new StaticInnerSingleton();
  }
  static getInstance(){
    return StaticInnerSingleton.inner.staticInnerSingleton
  }
}

(function(){
  console.log(StaticInnerSingleton.getInstance() === StaticInnerSingleton.getInstance())
})()
