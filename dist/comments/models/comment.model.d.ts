import { Comment } from '@prisma/client';
import { AuthorModel } from 'src/authors/models/author.model';
import { PostModel } from 'src/posts/models/post.model';
export declare class CommentModel implements Omit<Comment, 'updatedAt' | 'deletedAt'> {
    id: number;
    body: string;
    createdAt: Date;
    postId: number;
    post: PostModel;
    authorId: number;
    author: AuthorModel;
}
