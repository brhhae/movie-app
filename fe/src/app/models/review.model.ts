import { Movie } from "./movie.model";

export class Review {


    id!: number;
    title!: string;
    review!: string;
    // user!: User;
    movie!: Movie;

    rating!: number;
    dateUpdate!: Date;
    published!: boolean;
    
    
}
