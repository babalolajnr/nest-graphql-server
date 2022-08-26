/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post as PostModel } from '@prisma/client';
import { Author } from 'src/authors/models/author.model';

@ObjectType()
export class Post implements Omit<PostModel, 'updatedAt' | 'deletedAt'> {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field((type) => Int, { nullable: true })
  votes: number;

  @Field((type) => Int, { nullable: true })
  authorId: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field((type) => Author)
  author: Author;
}
