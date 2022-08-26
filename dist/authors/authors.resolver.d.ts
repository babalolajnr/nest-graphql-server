import { PostsService } from 'src/posts/posts.service';
import { AuthorsService } from './authors.service';
import { CreateAuthor } from './inputs/create-author.input';
import { Author as PrismaAuthor } from '@prisma/client';
export declare class AuthorsResolver {
    private authorsService;
    private postsService;
    constructor(authorsService: AuthorsService, postsService: PostsService);
    author(id: number): Promise<void>;
    createAuthor(createAuthor: CreateAuthor): Promise<PrismaAuthor>;
    authors(): Promise<PrismaAuthor[]>;
}
