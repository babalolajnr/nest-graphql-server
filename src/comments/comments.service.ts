import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentInput } from './inputs/create-comment.input';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async addComment(comment: CreateCommentInput) {
    return await this.prisma.comment.create({
      data: {
        body: comment.body,
        author: { connect: { id: comment.authorId } },
        post: { connect: { id: comment.postId } },
      },
      include: {
        post: true,
        author: true,
      },
    });
  }
}
