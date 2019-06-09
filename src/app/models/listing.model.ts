export class listing {
    public id : number;
    public address: string;
    public name: string; 
    public location: string;
    public price: number;
    public imageUrl: string;
    public description :string;

    //private stays: number;

    constructor() {
        this.id = 0;
        this.address = "";
        this.name = "";
        this.location  = "";
        this.price = 0;
        this.imageUrl = "";
        this.description = "";
    }
}