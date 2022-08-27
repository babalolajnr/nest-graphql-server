import { Field, InputType } from '@nestjs/graphql';
import { AuthorModel } from '../models/author.model';

@InputType()
export class CreateAuthorInput
  implements Omit<AuthorModel, 'id' | 'createdAt' | 'posts' | 'comments'>
{
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
