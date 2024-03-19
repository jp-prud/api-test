import { Prisma } from "@prisma/client";
import { CustomerRepository } from "../../repositories";
import { IUseCase } from "../../types";

type IInput = {
  customer: Omit<Prisma.CustomerCreateInput, "Company">;
  accountId: string;
};

type IOutput = void;

export class CreateCustomerUseCase implements IUseCase<IInput, IOutput> {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(input: IInput): Promise<IOutput> {
    await this.customerRepository.create({
      ...input.customer,
      Company: {
        connect: {
          id: input.accountId,
        },
      },
    });

    return;
  }
}
