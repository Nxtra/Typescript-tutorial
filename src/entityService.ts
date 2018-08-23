class EntityService<T>{

    items:Array<T> = [];

    add(entity:T):void {
        this.items.push(entity);
    }

    get(index:number):T{
       return this.items[index];
    }

    getAll():Array<T>{
        return this.items;
    }

    delete(index:number){
        this.items.splice(index,1)
    }
}