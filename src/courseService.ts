class CourseService extends EntityService<Course>{

    lookupStudentsInCourse(course:Course): Array<Student>{
        return course.students;
    }

    sortStudentsInCourse(course:Course): Array<Student>{
        return course.students.sort((a,b) =>  (b.name > a.name ? -1 : 1));
    }

    addStudent(course:Course, student:Student){
        course.students.push(student);
    }

    removeStudent(course:Course, index:number){
        course.students.slice(index)
    }
}