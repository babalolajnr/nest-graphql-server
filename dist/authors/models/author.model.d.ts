import { PostModel } from 'src/posts/models/post.model';
import { Author } from '@prisma/client';
import { CommentModel } from 'src/comments/models/comment.model';
export declare class AuthorModel implements Pick<Author, 'id' | 'firstName' | 'lastName' | 'createdAt'> {
    id: number;
    firstName: string;
    lastName: string;
    createdAt: Date;
    posts: PostModel[];
    comments: CommentModel[];
}
