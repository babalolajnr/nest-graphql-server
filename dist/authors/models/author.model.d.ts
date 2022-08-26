import { Post } from 'src/posts/models/post.model';
import { Author as AuthorModel } from '@prisma/client';
export declare class Author implements Pick<AuthorModel, 'id' | 'firstName' | 'lastName' | 'createdAt'> {
    id: number;
    firstName: string;
    lastName: string;
    createdAt: Date;
    posts: Post[];
}
