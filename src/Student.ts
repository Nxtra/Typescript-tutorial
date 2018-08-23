class Student extends  Person{

    private courseList: Array<Course>;
    private courseGradeMap: Map<Course, Grade>

    constructor(name: string){
        super(name);
    }

}