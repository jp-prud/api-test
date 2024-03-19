import { Prisma, PrismaClient } from "@prisma/client";

export class CustomerRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async listAll(data: Prisma.CustomerFindManyArgs = {}) {
    return this.prismaClient.customer.findMany(data);
  }

  async create(data: Prisma.CustomerCreateInput) {
    return this.prismaClient.customer.create({ data });
  }
}
