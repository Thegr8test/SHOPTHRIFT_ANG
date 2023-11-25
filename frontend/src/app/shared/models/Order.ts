import { CartItem } from "./Cartitem";

export class Order{
    id!:number;
    items!: CartItem[];
    totalPrice!:number;
    name!:string;
    address!:string;
    paymentId!:string;
    CreatedAt!:Date;
    status!:string;

}