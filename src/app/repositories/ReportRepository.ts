import { Prisma, PrismaClient } from "@prisma/client";

export class ReportRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  create(data: Prisma.ReportCreateInput) {
    return this.prismaClient.report.create({ data });
  }
}
