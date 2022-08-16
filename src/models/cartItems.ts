import { Book } from "../models/books";

export interface cartItems {
    id: number,
    book: Book, 
    quantity: number,
}