import { AuthorModel } from '../models/author.model';
export declare class CreateAuthorInput implements Omit<AuthorModel, 'id' | 'createdAt' | 'posts' | 'comments'> {
    firstName: string;
    lastName: string;
}
