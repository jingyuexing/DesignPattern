/**
 *    将一个复杂对象的构建与它的表示分离,使得同样的构建过程可以创建不同的表示
 *    用户只需要指定需要建造的类型就可以得到他们
 *    如果一个对象有非常复杂的内部结构(属性)
 * 优点:
 *   封装型好,创建和使用分离
 *   扩展性好、建造类之间独立,在一定程度上解耦
 * 缺点:
 *   会产生多余的builder对象
 *   产品内部发生变化，建造者都要修改 成本较大
 */


class Course {
  courseName: string = "";
  coursePPT: string = "";
}


abstract class CourseBuilder {
  abstract builderName(name: string): void;
  abstract builderCoursePPT(ppt: string): void;
  abstract makecourse(): Course;
}

class CourseActualBuilder extends CourseBuilder {
  private course: Course = new Course();
  builderName(courseName: string): CourseBuilder {
    this.course.courseName = courseName;
    return this;
  }
  builderCoursePPT(ppt: string): CourseBuilder {
    this.course.coursePPT = ppt;
    return this;
  }
  makecourse(): Course {
    return this.course;
  }
}
