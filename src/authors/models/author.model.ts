/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PostModel } from 'src/posts/models/post.model';
import { Author } from '@prisma/client';
import { CommentModel } from 'src/comments/models/comment.model';

@ObjectType()
export class AuthorModel
  implements Pick<Author, 'id' | 'firstName' | 'lastName' | 'createdAt'>
{
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field((type) => [PostModel])
  posts: PostModel[];

  @Field((type) => [CommentModel])
  comments: CommentModel[];
}
