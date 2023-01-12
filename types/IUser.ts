import { Types } from "mongoose";

export interface IAddresses {
  state: string;
  city: string;
  street: string;
  postalCode: string;
}

export default interface IUser {
  email: string;
  password?: string;
  name?: string;
  image?: string;
  phone?: string;
  addresses?: IAddresses[];
  orders: [Types.ObjectId];
  role: "user" | "admin" | "superAdmin";
  favorates?: [Types.ObjectId];
  basket?: {
    totalAmount: number;
    totalQTY: number;
    cartItems: [productId: Types.ObjectId, cartQuantity: number];
  };
  refreshToken?: string;
}
