class Teacher extends Person{

    private _course: Course;

    constructor(name: string, id: number, course: Course){
        super(name, id);
        this._course = course;
    }

    get course(): Course {
        return this._course;
    }

    set course(value: Course) {
        this._course = value;
    }

    getAllStudentsInMyCourse(): Array<Student>{
        return this._course.studentList;
    }

    addNewStudentToMyCourse(student :Student): void {
        this._course.studentList.push(student)
    }

    removeStudentFromMyCourse(student: Student): void {
        let studentArray: Array<Student> = this._course.studentList;
            let index: number = studentArray.indexOf(student, 0);
        if (index > -1) {
            studentArray.splice(index, 1);
        }
    }

    giveGradeToStudentForMycourse(student: Student, gradeValue: Grade): void{

    }




}