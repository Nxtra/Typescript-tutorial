class Student extends  Person{

    private _courseGradeMap: Map<Course, Grade>

    constructor(name: string, id: number){
        super(name, id);
    }

    get courseGradeMap(): Map<Course, Grade> {
        return this._courseGradeMap;
    }

    set courseGradeMap(value: Map<Course, Grade>) {
        this._courseGradeMap = value;
    }
}