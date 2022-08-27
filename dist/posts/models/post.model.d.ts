import { Post } from '@prisma/client';
import { AuthorModel } from 'src/authors/models/author.model';
import { CommentModel } from 'src/comments/models/comment.model';
export declare class PostModel implements Omit<Post, 'updatedAt' | 'deletedAt'> {
    id: number;
    title: string;
    content: string;
    votes: number;
    authorId: number;
    createdAt: Date;
    author: AuthorModel;
    comment: CommentModel;
}
