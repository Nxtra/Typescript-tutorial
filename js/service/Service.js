var Service = /** @class */ (function () {
    function Service() {
        this.kevinAB = new Teacher("Kevin", 1);
        this.ydt = new Teacher("YanDT", 2);
        this.teacherList = [this.kevinAB, this.ydt];
        this.nickStudent = new Student("Nick", 1);
        this.michaelStudent = new Student("Michael", 2);
        this.shadiStudent = new Student("Shadi", 3);
        this.studentList = [this.nickStudent, this.michaelStudent, this.shadiStudent];
        this.typeScriptCourse = new Course("TypeScript", this.kevinAB, [this.nickStudent, this.shadiStudent]);
        this.javaCourse = new Course("Java", this.ydt, [this.nickStudent, this.michaelStudent]);
        this.courseList = [this.typeScriptCourse, this.javaCourse];
        this.gradeNickJava = new Grade(10, this.javaCourse, this.nickStudent);
        this.gradeNickTypeScript = new Grade(10, this.typeScriptCourse, this.nickStudent);
        this.gradeMichaelJava = new Grade(10, this.javaCourse, this.michaelStudent);
        this.gradeShadiTypescript = new Grade(10, this.typeScriptCourse, this.shadiStudent);
        this.gradeList = [this.gradeNickJava, this.gradeNickTypeScript, this.gradeMichaelJava, this.gradeShadiTypescript];
    }
    Service.prototype.getAllGrades = function () {
        return this.gradeList;
    };
    Service.prototype.getAllStudent = function () {
        return this.studentList;
    };
    Service.prototype.getAllTeacher = function () {
        return this.teacherList;
    };
    Service.prototype.addGrade = function (grade) {
        this.gradeList.push(grade);
        console.log(this.gradeList);
    };
    Service.prototype.addStudent = function (student) {
        console.log("adding student: " + student);
        this.studentList.push(student);
        console.log(this.studentList);
    };
    Service.prototype.addTeacher = function (teacher) {
        this.teacherList.push(teacher);
        console.log(this.teacherList);
    };
    Service.prototype.getAllGradesForCourse = function (course) {
        var grades = this.gradeList.filter(function (grade) { return grade.course == course; });
        console.log(grades);
        return grades;
    };
    Service.prototype.getAllGradesForStudent = function (student) {
        var grades = this.gradeList.filter(function (grade) { return grade.student == student; });
        console.log(grades);
        return grades;
    };
    Service.prototype.updateGradeForStudentAndCourse = function (student, course, newGrade) {
        var grade = this.gradeList.filter(function (grade) { return grade.student == student
            && grade.course == course; })[0];
        console.log(grade);
        grade = newGrade;
    };
    return Service;
}());
//# sourceMappingURL=Service.js.map