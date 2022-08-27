/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './models/post.model';
import { PostsService } from './posts.service';
import { Comment, Post } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { CreateCommentInput } from 'src/comments/inputs/create-comment.input';
import { CommentsService } from 'src/comments/comments.service';
import { CommentModel } from 'src/comments/models/comment.model';

const pubSub = new PubSub();

@Resolver()
export class PostsResolver {
  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
  ) {}

  @Mutation(() => PostModel)
  async createPost(
    @Args({ name: 'title', type: () => String }) title: string,
    @Args({ name: 'content', type: () => String }) content: string,
    @Args({ name: 'authorId', type: () => Int }) authorId: number,
  ): Promise<Post> {
    return await this.postsService.create(title, content, authorId);
  }

  @Query(() => [PostModel])
  async posts(
    @Args({ name: 'take', type: () => Int }) take: number,
    @Args({ name: 'skip', type: () => Int }) skip: number,
  ): Promise<Post[]> {
    return await this.postsService.findAll(take, skip);
  }

  @Mutation(() => CommentModel)
  async addComment(
    @Args('createCommentInput') comment: CreateCommentInput,
  ): Promise<Comment> {
    const newComment = await this.commentsService.addComment(comment);
    pubSub.publish('commentAdded', { commentAdded: newComment });
    return newComment;
  }
}
