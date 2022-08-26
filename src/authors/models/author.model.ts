import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/models/post.model';
import { Author as AuthorModel } from '@prisma/client';

@ObjectType()
export class Author
  implements Pick<AuthorModel, 'id' | 'firstName' | 'lastName' | 'createdAt'>
{
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field((type) => [Post])
  posts: Post[];
}
