import { CommentModel } from '../models/comment.model';
export declare class CreateCommentInput implements Pick<CommentModel, 'body' | 'authorId'> {
    body: string;
    authorId: number;
    postId: number;
}
