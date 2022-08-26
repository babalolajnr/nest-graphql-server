import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';
import { Post as PrismaPost } from '@prisma/client';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Mutation((returns) => Post)
  async createPost(
    @Args({ name: 'title', type: () => String }) title: string,
    @Args({ name: 'content', type: () => String }) content: string,
    @Args({ name: 'authorId', type: () => Int }) authorId: number,
  ): Promise<PrismaPost> {
    return await this.postsService.create(title, content, authorId);
  }

  @Query(() => [Post])
  async posts(
    @Args({ name: 'take', type: () => Int }) take: number,
    @Args({ name: 'skip', type: () => Int }) skip: number,
  ): Promise<PrismaPost[]> {
    return await this.postsService.findAll(take, skip);
  }
}
