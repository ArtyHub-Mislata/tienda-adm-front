import { CategoryModel } from "./CategoryModel";
import { UserModel } from "./UserModel";

export interface ArtWorkModel {
    id: string;
    nombre: string;
    description: string;
    imgUrl: string;
    price: number;
    stock: number;
    category: CategoryModel;
}