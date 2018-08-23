let erwin:Teacher = new Teacher("Erwin");

let maria:Teacher = new Teacher("Maria");

let studentEric:Student = new Student("Eric");
let studentAdam:Student = new Student("Adam");
let studentJeff:Student = new Student("Jeff");


let wiskunde:Course = new Course("Wiskunde",erwin, new Array(studentAdam));

let nederlands:Course = new Course("Nederlands",maria, [studentEric,studentAdam]);


let gradeService = new GradeService();
gradeService.add(new Grade(5, nederlands,studentAdam));
gradeService.add(new Grade(10,nederlands,studentEric));

let courseService = new CourseService();
courseService.add(wiskunde);
courseService.add(nederlands);
courseService.addStudent(nederlands,studentJeff);

let studentService = new StudentService();
studentService.add(studentEric);
studentService.add(studentAdam);
studentService.add(studentJeff);

gradeService.addWithConstraintCheck(erwin,new Grade(8,wiskunde,studentAdam));

console.log(courseService.lookupStudentsInCourse(nederlands));

console.log(gradeService.getStudentWithHighestGrade(nederlands));

console.log(courseService.sortStudentsInCourse(nederlands));