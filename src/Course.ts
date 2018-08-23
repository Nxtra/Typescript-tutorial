class Course{
    private _courseName: string;
    private _teacher: Teacher;
    private _studentList: Array<Student> = [];

    constructor(courseName: string, teacher: Teacher, studentList:Array<Student>){
        this._courseName = courseName;
        this._teacher = teacher;
        this._studentList = studentList;
    }


    get teacher(): Teacher {
        return this._teacher;
    }

    set teacher(value: Teacher) {
        this._teacher = value;
    }

    get studentList(): Array<Student> {
        return this._studentList;
    }

    set studentList(value: Array<Student>) {
        this._studentList = value;
    }

    get courseName(): string {
        return this._courseName;
    }

    set courseName(value: string) {
        this._courseName = value;
    }
}