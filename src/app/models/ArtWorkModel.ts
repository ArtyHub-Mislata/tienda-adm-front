import { CategoryModel } from "./CategoryModel";
import { UserModel } from "./UserModel";

export interface ArtWorkModel {
    id: string;
    nombre: string;
    description: string;
    imgUrl: string;
    price: number;
    category: CategoryModel;
    user: UserModel;
}