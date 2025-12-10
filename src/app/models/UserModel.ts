import { ArtWorkModel } from "./ArtWorkModel";

export interface UserModel {
    id: string;
    name: string;
    email: string;
    nAccount: string
    description: string;
    address: string
    profilePictureUrl: string;
    artworkList: ArtWorkModel[];

}