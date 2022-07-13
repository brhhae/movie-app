import { Timestamp } from "firebase/firestore";

export class Review {
    idField!: string;
    title!: string;
    review!: string;
    userId!: string;
    movieId!: string;
    rating!: number;
    dateUpdate!: Date;
    published?: boolean;
}