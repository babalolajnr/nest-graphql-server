import { Field, InputType, Int } from '@nestjs/graphql';
import { CommentModel } from '../models/comment.model';

@InputType()
export class CreateCommentInput
  implements Pick<CommentModel, 'body' | 'authorId'>
{
  @Field()
  body: string;

  @Field(() => Int)
  authorId: number;

  @Field(() => Int)
  postId: number;
}
