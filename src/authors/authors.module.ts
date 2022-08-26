import { Module } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsService } from './authors.service';

@Module({
  providers: [AuthorsResolver, AuthorsService, PostsService, PrismaService],
  imports: [],
})
export class AuthorsModule {}
