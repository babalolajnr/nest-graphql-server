import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { CommentsService } from 'src/comments/comments.service';

@Module({
  providers: [PostsService, PostsResolver, CommentsService],
})
export class PostsModule {}
