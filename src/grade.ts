class Grade {

    points: number;
    course: Course;
    student:Student;

    constructor(points:number, course:Course, student:Student){
        this.points = points;
        this.course = course;
        this.student = student;
    }
}