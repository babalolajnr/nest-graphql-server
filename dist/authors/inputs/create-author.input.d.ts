import { Author } from '../models/author.model';
export declare class CreateAuthor implements Omit<Author, 'id' | 'createdAt' | 'posts'> {
    firstName: string;
    lastName: string;
}
