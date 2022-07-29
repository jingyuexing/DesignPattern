
/**
 * 懒汉式加载
 * 只在使用的时候进行初始化
 */
class LazySingleton{
  private static lazySingleton:LazySingleton|null = null;
  private constructor(){}
  static getInstance(){
    if(LazySingleton.lazySingleton==null){
       LazySingleton.lazySingleton = new LazySingleton();
    }
    return LazySingleton.lazySingleton;
  }
}


(function(){
  let singleton = LazySingleton.getInstance();
  let singleton1 = LazySingleton.getInstance();
  if(singleton === singleton1){
    console.log("单例模式")
  }
})()
