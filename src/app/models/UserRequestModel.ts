import { UserRole } from "./UserRole";

export interface UserRequestModel {
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