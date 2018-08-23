class Person{
    private _name: string;
    private _id: number;

    constructor(name:string, id:number){
        this._name = name;
        this._id = id;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}