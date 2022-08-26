import { Injectable } from '@nestjs/common';
import { Author } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorsService {
  async findAll(): Promise<Author[]> {
    const authors = await this.prisma.author.findMany({
      where: { deletedAt: null },
      include: { posts: true },
    });

    return authors;
  }
  constructor(private prisma: PrismaService) {}

  async create(params: {
    firstName: string;
    lastName: string;
  }): Promise<Author> {
    const author = await this.prisma.author.create({
      data: {
        firstName: params.firstName,
        lastName: params.lastName,
      },
      include: {
        posts: true,
      },
    });

    return author;
  }
  async findOneById(id: number): Promise<void> {
    // const author: Author = new Author();
    // author.id = id;
    // author.firstName = 'Abdulqudduus';
    // author.lastName = 'Babalola';
    // // author.firstName = 'Abdulqudduus';
    // return author;
  }
}
