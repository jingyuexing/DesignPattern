interface ICommander{
  execute():void;
}

class CourseVideo{
  name:string;
  constructor(name:string){
    this.name = name;
  }
  open():void{

  }
  close():void{

  }
}

class OpenCourseVideoCommand implements ICommander{
    private courseVideo:CourseVideo;
    constructor(courseVideo:CourseVideo){
      this.courseVideo = courseVideo;
    }
    execute(): void {
      this.courseVideo.open();
    }

}

class CloseCourseVideoCommand implements ICommander{
    private courseVideo:CourseVideo;
    constructor(courseVideo:CourseVideo){
      this.courseVideo = courseVideo;
    }
    execute(): void {
      this.courseVideo.close()
    }

}
