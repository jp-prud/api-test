import { IController, IEvent, IResponseEvent } from "../../types";
import { ListAllCustomerUseCase } from "../../useCases/Customers/ListAllCustomerUseCase";

export class ListAllCustomerController implements IController {
  constructor(
    private readonly listAllCustomerUseCase: ListAllCustomerUseCase
  ) {}
  async handle({ account }: IEvent): Promise<IResponseEvent> {
    try {
      const customers = await this.listAllCustomerUseCase.execute({
        accountId: account!.id,
      });

      console.log(customers);

      return {
        statusCode: 200,
        body: {
          customers,
        },
      };
    } catch (error) {
      throw error;
    }
  }
}
