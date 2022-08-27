import { PostModel } from '../models/post.model';
export declare class CreatePostInput implements Pick<PostModel, 'title' | 'content' | 'authorId'> {
    title: string;
    content: string;
    authorId: number;
}
