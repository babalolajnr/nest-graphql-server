import { Post as PostModel } from '@prisma/client';
import { Author } from 'src/authors/models/author.model';
export declare class Post implements Omit<PostModel, 'updatedAt' | 'deletedAt'> {
    id: number;
    title: string;
    content: string;
    votes: number;
    authorId: number;
    createdAt: Date;
    author: Author;
}
