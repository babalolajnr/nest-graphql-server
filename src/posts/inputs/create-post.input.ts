import { Field, InputType } from '@nestjs/graphql';
import { PostModel } from '../models/post.model';

@InputType()
export class CreatePostInput
  implements Pick<PostModel, 'title' | 'content' | 'authorId'>
{
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  authorId: number;
}
