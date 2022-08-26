import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(title: string, content: string, authorId: number): Promise<Post>;
    findAll(take: number, skip: number): Promise<Post[]>;
}
