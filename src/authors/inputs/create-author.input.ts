import { Field, InputType } from '@nestjs/graphql';
import { Author } from '../models/author.model';

@InputType()
export class CreateAuthor
  implements Omit<Author, 'id' | 'createdAt' | 'posts'>
{
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
