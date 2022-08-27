/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '@prisma/client';
import { AuthorModel } from 'src/authors/models/author.model';
import { CommentModel } from 'src/comments/models/comment.model';

@ObjectType()
export class PostModel implements Omit<Post, 'updatedAt' | 'deletedAt'> {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => Int, { nullable: true })
  votes: number;

  @Field(() => Int, { nullable: true })
  authorId: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field(() => AuthorModel)
  author: AuthorModel;

  @Field(() => CommentModel, { nullable: true })
  comment: CommentModel;
}
