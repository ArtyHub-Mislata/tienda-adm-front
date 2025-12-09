import { ArtWorkModel } from "./ArtWorkModel";
import { UserRole } from "./UserRole";

export interface UserModel {
    id?: number;
    name: string;
    email: string;
    password?: string;
    nAccount: string;
    description:string;
    address: string;
    imageProfileUrl: string;
    artworks: ArtWorkModel[];
    role: UserRole;
}