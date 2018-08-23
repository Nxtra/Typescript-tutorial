 class Course {

    name: string;
    teacher: Teacher;
    students: Array<Student> = [];

    constructor(name: string, teacher:Teacher, students:Array<Student>) {
        this.name = name;
        this.teacher = teacher;
        this.students = students;
    }
}
