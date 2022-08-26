import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostsService } from 'src/posts/posts.service';
import { AuthorsService } from './authors.service';
import { CreateAuthor } from './inputs/create-author.input';
import { Author } from './models/author.model';
import { Author as PrismaAuthor } from '@prisma/client';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll();
  // }

  @Mutation((returns) => Author)
  async createAuthor(
    @Args('createAuthor') createAuthor: CreateAuthor,
  ): Promise<PrismaAuthor> {
    return this.authorsService.create(createAuthor);
  }

  @Query((returns) => [Author])
  async authors(): Promise<PrismaAuthor[]> {
    return this.authorsService.findAll();
  }
}
