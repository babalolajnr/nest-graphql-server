/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Comment } from '@prisma/client';
import { AuthorModel } from 'src/authors/models/author.model';
import { PostModel } from 'src/posts/models/post.model';

@ObjectType()
export class CommentModel implements Omit<Comment, 'updatedAt' | 'deletedAt'> {
  @Field(() => Int)
  id: number;

  @Field()
  body: string;

  @Field()
  createdAt: Date;

  @Field(() => Int)
  postId: number;

  @Field(() => PostModel)
  post: PostModel;

  @Field(() => Int)
  authorId: number;

  @Field(() => AuthorModel)
  author: AuthorModel;
}
