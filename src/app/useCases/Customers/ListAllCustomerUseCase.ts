import { CustomerRepository } from "../../repositories";
import { IUseCase } from "../../types";

interface IInput {
  accountId: string;
}

interface IOutput {}

export class ListAllCustomerUseCase implements IUseCase<IInput, IOutput> {
  constructor(private readonly customerReporsitory: CustomerRepository) {}

  async execute(input: IInput): Promise<IOutput> {
    const customers = await this.customerReporsitory.listAll({
      orderBy: {
        updatedAt: "desc",
      },
      select: {
        id: true,
        name: true,
        room: true,
      },
      where: {
        Company: {
          id: input.accountId,
        },
      },
    });

    return customers;
  }
}
