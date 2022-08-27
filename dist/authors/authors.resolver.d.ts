import { PostsService } from 'src/posts/posts.service';
import { AuthorsService } from './authors.service';
import { CreateAuthorInput } from './inputs/create-author.input';
import { Author } from '@prisma/client';
export declare class AuthorsResolver {
    private authorsService;
    private postsService;
    constructor(authorsService: AuthorsService, postsService: PostsService);
    author(id: number): Promise<void>;
    createAuthor(createAuthor: CreateAuthorInput): Promise<Author>;
    authors(): Promise<Author[]>;
    commentAdded(): AsyncIterator<unknown, any, undefined>;
}
