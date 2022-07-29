/**
 * 保证一个类仅有一个实例,并提供一个全局的访问点
 *
 * 场景:
 *     想确保任何情况下都绝对只有一个实例
 * 优点:
 *     在内存里只有一个实例,减少了内存开销
 *     可以避免对资源的多重占用
 *     设置全局访问点,严格控制访问
 *  缺点:
 *      没有接口,扩展困难 ,如果要扩展 必定要修改代码
 *  重点:
 *      私有构造器
 *      线程安全
 *      延迟加载
 *      序列化和反序列化安全
 *      防止反射攻击
 */


/*enum Singler{

}*/

class Singler{
  private constructor(){}
}
