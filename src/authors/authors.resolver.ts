/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PostsService } from 'src/posts/posts.service';
import { AuthorsService } from './authors.service';
import { CreateAuthorInput } from './inputs/create-author.input';
import { AuthorModel } from './models/author.model';
import { Author } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { CommentModel } from 'src/comments/models/comment.model';

const pubSub = new PubSub();

@Resolver()
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query((returns) => AuthorModel)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  // @ResolveField()
  // async posts(@Parent() author: AuthorModel) {
  //   const { id } = author;
  //   return this.postsService.findAll();
  // }

  @Mutation((returns) => AuthorModel)
  async createAuthor(
    @Args('createAuthorInput') createAuthor: CreateAuthorInput,
  ): Promise<Author> {
    return await this.authorsService.create(createAuthor);
  }

  @Query((returns) => [AuthorModel])
  async authors(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @Subscription((returns) => CommentModel)
  commentAdded() {
    return pubSub.asyncIterator('commentAdded');
  }
}
