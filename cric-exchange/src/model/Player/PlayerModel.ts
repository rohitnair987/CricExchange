export class Player {

    private _id: number;
    private _name: string;

    public constructor(
        id: number,
        name: string) { 
            this._id = id;
            this._name = name; 
    }

    public id = () => this._id;
    public name = () => this._name;

}