import { Author } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthorsService {
    private prisma;
    findAll(): Promise<Author[]>;
    constructor(prisma: PrismaService);
    create(params: {
        firstName: string;
        lastName: string;
    }): Promise<Author>;
    findOneById(id: number): Promise<void>;
}
