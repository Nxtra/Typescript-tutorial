class GradeService extends EntityService<Grade>{

    addWithConstraintCheck(teacher:Teacher,grade: Grade):void{
        if(grade.course.teacher.name === teacher.name){
            this.items.push(grade);
        }
    }

    getStudentWithHighestGrade(course:Course){
        let studentGrade = document.getElementById("studentGrade");
        let grades = this.getAll().filter(grade => grade.course.name === course.name);
        studentGrade.innerHTML = grades.sort((a,b) => b.points - a.points)[0].student.name;
    }
}