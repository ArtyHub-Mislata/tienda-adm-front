import { ArtWorkModel } from "./ArtWorkModel";
import { UserRole } from "./UserRole";

export interface UserModel {
    id?: string;
    name: string;
    email: string;
    password: string
    nAccount: string
    description: string;
    address: string
    imageProfileUrl: string;
    role: UserRole
}