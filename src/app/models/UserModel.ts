export interface UserModel {
    id: string;
    username: string;
    email: string;
    password?: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    bio?: string;
}