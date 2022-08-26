import { Post } from '../models/post.model';
export declare class CreatePostInput implements Pick<Post, 'title' | 'content' | 'authorId'> {
    title: string;
    content: string;
    authorId: number;
}
