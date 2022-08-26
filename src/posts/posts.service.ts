import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
// import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(
    title: string,
    content: string,
    authorId: number,
  ): Promise<Post> {
    const post = await this.prisma.post.create({
      data: {
        title,
        content,
        author: { connect: { id: authorId } },
      },
      include: {
        author: true,
      },
    });

    return post;
  }

  async findAll(take: number, skip: number): Promise<Post[]> {
    const posts = await this.prisma.post.findMany({
      where: { deletedAt: null },
      take,
      skip,
      orderBy: {
        createdAt: 'desc',
      },
      include: { author: true },
    });

    return posts;
  }
}
