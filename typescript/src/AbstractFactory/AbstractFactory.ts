/**
 * 抽象工厂:
 *     适用于当一个工厂需要创建分属于不同产品等级结构的一个产品族的所有对象
 *     此时抽象工厂更加适合
 *  比如 美的 海尔分属于不同的工厂 但他们都会有电冰箱 洗衣机 空调等产品线
 *  抽象工厂里关键看固定层度比较高的适合使用抽象工厂
 *  优点:
 *    应用层不和具体的产品发生依赖,只和具体工厂产生依赖
 *    从具体的产品工厂取出的产品肯定是同一产品族
 *    扩展性好
 *  缺点:
 *    新增产品等级比较麻烦
 *
 */


abstract class Refrigerator{
  abstract produce():string;

}
abstract class Hvac{
  abstract produce():string;
}

abstract class Washer{
  abstract produce():string;
}


interface ProductFactory{
  produceRefrigerator():Refrigerator;
  produceWasher():Washer;
  produceHvac():Hvac;
}


class MideaHvac extends Hvac{
    produce(): string {
      return "生产 美的 品牌的空调"
    }
}

class MideaWasher extends Washer{
    produce(): string {
      return `生产 美的 品牌的洗衣机`
    }

}

class MideaRefrigerator extends Refrigerator{
    produce(): string {
      return "生产 美的 品牌的冰箱";
    }
}


class HaierHvac extends Hvac{
    produce(): string {
      return "生产 海尔 品牌的空调"
    }
}

class HaierWasher extends Washer{
    produce(): string {
      return `生产 海尔 品牌的洗衣机`
    }
}

class HaierRefrigerator extends Refrigerator{
    produce(): string {
      return "生产 海尔 品牌的冰箱";
    }
}


/**
 * 美的工厂 生产具体的产品族
 * 如果这个工厂新增一条产品线 那就需要更改逻辑 这就不符合开闭原则了
 */
class MideaFactory implements ProductFactory{
    produceRefrigerator(): Refrigerator {
      return new MideaRefrigerator();
    }
    produceWasher(): Washer {
      return new MideaWasher();
    }
    produceHvac(): Hvac {
      return new MideaHvac();
    }
}

/**
 * 海尔的工厂 生产具体的产品族
 */
class HaierFactory implements ProductFactory{
    produceRefrigerator(): Refrigerator {
      return new HaierRefrigerator();
    }
    produceWasher(): Washer {
      return new HaierWasher();
    }
    produceHvac(): Hvac {
      return new HaierHvac();
    }
}

(function(){
  let haier = new HaierFactory();
  let midea = new MideaFactory();
  console.log(haier.produceHvac().produce());
  console.log(haier.produceRefrigerator().produce());
  console.log(midea.produceHvac().produce())
})();
