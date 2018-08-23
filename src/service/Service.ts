class Service {

    constructor(){

    }

    kevinAB: Teacher = new Teacher("Kevin", 1);
    ydt: Teacher = new Teacher("YanDT", 2);
    teacherList: Array<Teacher> = [this.kevinAB, this.ydt];

    typeScriptCourse: Course = new Course("Math", this.kevinAB);
    javaCourse: Course = new Course("Java", this.ydt);
    courseList: Array<Course> = [this.typeScriptCourse, this.javaCourse];

    nickStudent: Student = new Student("Nick", 1);
    michaelStudent: Student = new Student("Michael", 2);
    shadiStudent: Student = new Student("Shadi", 3);
    studentList: Array<Student> = [this.nickStudent, this.michaelStudent, this.shadiStudent];

    gradeNickJava: Grade = new Grade(10, this.javaCourse,this.nickStudent);
    gradeNickTypeScript: Grade = new Grade(10, this.typeScriptCourse, this.nickStudent);
    gradeMichaelJava: Grade = new Grade(10, this.javaCourse, this.michaelStudent);
    gradeShadiTypescript: Grade = new Grade(10, this.typeScriptCourse, this.shadiStudent);
    gradeList: Array<Grade> = [this.gradeNickJava, this.gradeNickTypeScript, this.gradeMichaelJava, this.gradeShadiTypescript];

    getAllGrades(): Array<Grade>{
        return this.gradeList;
    }

    getAllStudent(): Array<Student>{
        return this.studentList;
    }

    getAllTeacher(): Array<Teacher>{
        return this.teacherList;
    }

    addGrade(grade: Grade): void{
        this.gradeList.push(grade);
        console.log(this.gradeList);
    }

    addStudent(student: Student): void{
        this.studentList.push(student);
        console.log(this.studentList);
    }

    addTeacher(teacher: Teacher): void{
        this.teacherList.push(teacher);
        console.log(this.teacherList);
    }

    getAllGradesForCourse(course: Course): Array<Grade> {
        let grades: Array<Grade> = this.gradeList.filter(grade => grade.course == course);
        console.log(grades);
        return grades;
    }

    getAllGradesForStudent(student: Student): Array<Grade> {
        let grades: Array<Grade> =  this.gradeList.filter(grade => grade.student == student);
        console.log(grades)
        return grades;
    }

    updateGradeForStudentAndCourse(student: Student, course: Course, newStudent: Student): void{
        let studentToUpdate: Student = this.gradeList.filter(grade => grade.student == student
            && grade.course == course)[0].student;
        studentToUpdate = newStudent;
    }


}