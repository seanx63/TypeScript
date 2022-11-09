export class warehouse {
    private _stock: item[] = [];
    private _location: string = "default location";
    constructor(...items: item[]) {
        for (let item of items) {
            this.addItem(item);
        }
    }
    set location(loc: string) {
        this._location = loc;
    }
    get location(): string {
        return this._location;
    }
    get stock(): string[] {
        let stock: string[] = [];
        for (let item of this._stock) {
            stock.push(item.toString);
        }
        return stock;
    }
    addItem(item: item) {
        this._stock.push(item);
    }
    addItems(...items: item[]) {
        for (let item of items) {
            this.addItem(item);
        }
    }
}
export class item {
    private _name: string;
    private _id: string;
    constructor(name: string, id: string) {
        this._name = name;
        this._id = id;
    }
    get toString() {
        return `${this._id}: ${this._name}`
    }
}