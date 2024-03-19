import { PrismaClient } from "@prisma/client";
import { ReportRepository } from "../../app/repositories/ReportRepository";

export function makeReportRepository() {
  const prismaClient = new PrismaClient();
  return new ReportRepository(prismaClient);
}
