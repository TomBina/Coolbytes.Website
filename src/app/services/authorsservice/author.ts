import { Image } from "../imagesservice/image";
export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    about: string;
    image: Image;
    experiences: any;
}