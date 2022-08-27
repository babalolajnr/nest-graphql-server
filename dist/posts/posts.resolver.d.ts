import { PostsService } from './posts.service';
import { Comment, Post } from '@prisma/client';
import { CreateCommentInput } from 'src/comments/inputs/create-comment.input';
import { CommentsService } from 'src/comments/comments.service';
export declare class PostsResolver {
    private postsService;
    private commentsService;
    constructor(postsService: PostsService, commentsService: CommentsService);
    createPost(title: string, content: string, authorId: number): Promise<Post>;
    posts(take: number, skip: number): Promise<Post[]>;
    addComment(comment: CreateCommentInput): Promise<Comment>;
}
