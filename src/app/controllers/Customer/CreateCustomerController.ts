import { ZodError, z } from "zod";
import { IController, IEvent, IResponseEvent } from "../../types";
import { CreateCustomerUseCase } from "../../useCases";

const schema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  age: z.number({
    required_error: "Age is required",
  }),
  phone: z.string({
    required_error: "Phone is required",
  }),
  room: z.string({
    required_error: "Phone is required",
  }),
});

export class CreateCustomerControler implements IController {
  constructor(private readonly createCustomerUseCase: CreateCustomerUseCase) {}

  async handle({ body, account }: IEvent): Promise<IResponseEvent> {
    try {
      const { name, age, phone, room } = schema.parse(body);

      await this.createCustomerUseCase.execute({
        customer: {
          name,
          age,
          phone,
          room,
        },
        accountId: account!.id,
      });

      return {
        statusCode: 201,
        body: {},
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: {
            error: error.issues.map((issue) => issue.message).join("\n"),
          },
        };
      }

      throw error;
    }
  }
}
