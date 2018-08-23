class Grade{
    private _points: number;
    private _course: Course;
    private _student: Student;

    constructor(points: number, course: Course, student: Student) {
        this._points = points;
        this._course = course;
        this._student = student;
    }

    get points(): number {
        return this._points;
    }

    set points(value: number) {
        this._points = value;
    }

    get course(): Course {
        return this._course;
    }

    set course(value: Course) {
        this._course = value;
    }

    get student(): Student {
        return this._student;
    }

    set student(value: Student) {
        this._student = value;
    }
}