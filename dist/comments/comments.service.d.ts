import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentInput } from './inputs/create-comment.input';
export declare class CommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    addComment(comment: CreateCommentInput): Promise<import(".prisma/client").Comment & {
        author: import(".prisma/client").Author;
        post: import(".prisma/client").Post;
    }>;
}
