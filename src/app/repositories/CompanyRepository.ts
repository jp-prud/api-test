import { Prisma, PrismaClient } from "@prisma/client";

export class CompanyRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: Prisma.CompanyCreateInput) {
    return this.prisma.company.create({ data });
  }

  async findByEmail(where: Prisma.CompanyWhereUniqueInput) {
    return this.prisma.company.findUnique({ where });
  }

  async findByName(where: Prisma.CompanyWhereUniqueInput) {
    return this.prisma.company.findUnique({ where });
  }
}
