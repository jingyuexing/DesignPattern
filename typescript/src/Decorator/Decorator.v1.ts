/**
 * 在装饰者当中有四个角色
 * 抽象实体类
 * 确定的实体类
 * 抽象的装饰者
 * 确定的装饰者
 */


abstract class ABattercake {
  abstract getDescription(): string;
  abstract getCost(): number;
}

/**
 * 这是抽象的装饰者类
 */
class AbstractDecorator extends ABattercake {
  private abstractBattercake: ABattercake;
  constructor(abstractBattercake: ABattercake) {
    super();
    this.abstractBattercake = abstractBattercake;
  }

  getDescription(): string {
    return this.abstractBattercake.getDescription() + ""
  }

  getCost(): number {
    return this.abstractBattercake.getCost()
  }
}

/**
 * 一个具体的装饰者类
 */
class SausageDecorator extends AbstractDecorator {
  constructor(abstractBattercake: ABattercake) {
    super(abstractBattercake);
  }
  getDescription(): string {
    return super.getDescription() + " 加一根香肠"
  }
  getCost(): number {
    return super.getCost() + 2;
  }
}
/**
 * 一个具体的装饰者类
 */
class EggDecorator extends AbstractDecorator {
  constructor(abstractBattercake: ABattercake) {
    super(abstractBattercake);
  }
  getDescription(): string {
    return super.getDescription() + " 加一个鸡蛋"
  }
  getCost(): number {
    return super.getCost() + 1;
  }
}

/**
 * 需要被装饰的对象类
 */
class Battercake extends ABattercake {
  constructor() {
    super();
  }
  getDescription(): string {
    return `煎饼`;
  }
  getCost(): number {
    return 8;
  }
}

(function () {
  let abattercake: ABattercake = new Battercake()
  abattercake = new EggDecorator(abattercake);
  abattercake = new EggDecorator(abattercake);
  abattercake = new SausageDecorator(abattercake);
  console.log(abattercake.getDescription()+" 价格:",abattercake.getCost());
})();

