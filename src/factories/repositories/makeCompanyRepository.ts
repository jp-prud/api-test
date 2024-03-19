import { PrismaClient } from "@prisma/client";
import { CompanyRepository } from "../../app/repositories";

export function makeCompanyRepository() {
  const prismaClient = new PrismaClient();
  return new CompanyRepository(prismaClient);
}
