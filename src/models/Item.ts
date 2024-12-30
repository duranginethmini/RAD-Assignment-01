export class Item {
    code: string;
    name: string;
    price: number;
    quantity: number;

    constructor(code: string, name: string, price: number, quantity: number) {
        this.code = code;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}