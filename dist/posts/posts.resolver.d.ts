import { PostsService } from './posts.service';
import { Post as PrismaPost } from '@prisma/client';
export declare class PostsResolver {
    private postsService;
    constructor(postsService: PostsService);
    createPost(title: string, content: string, authorId: number): Promise<PrismaPost>;
    posts(take: number, skip: number): Promise<PrismaPost[]>;
}
