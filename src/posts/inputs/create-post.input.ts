import { Field, InputType } from '@nestjs/graphql';
import { Post } from '../models/post.model';

@InputType()
export class CreatePostInput
  implements Pick<Post, 'title' | 'content' | 'authorId'>
{
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  authorId: number;
}
