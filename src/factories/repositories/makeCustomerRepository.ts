import { PrismaClient } from "@prisma/client";
import { CustomerRepository } from "../../app/repositories/CustomerRepository";

export function makeCustomerRepository() {
  const prismaClient = new PrismaClient();
  return new CustomerRepository(prismaClient);
}
