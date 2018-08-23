class Teacher extends Person{

    private course: Course;

    constructor(name:string, course: Course){
        super(name);
        this.course = course;
    }

    getAllStudentsInMyCourse(): Array<Student>
    getCourse(): Course{
        return this.course;
    }

    setCourse(course: Course): void{
        this.course = course;
    }


}