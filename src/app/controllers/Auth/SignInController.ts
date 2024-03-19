import { z, ZodError } from "zod";
import { InvalidCredentials } from "../../errors/InvalidCredentials";

import { IController, IEvent, IResponseEvent } from "../../types";
import { SignInUseCase } from "../../useCases";

const schema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
});

export class SignInController implements IController {
  constructor(private readonly signInUseCase: SignInUseCase) {}

  async handle({ body }: IEvent): Promise<IResponseEvent> {
    try {
      const { name } = schema.parse(body);

      const { accessToken } = await this.signInUseCase.execute({
        name,
      });

      return {
        statusCode: 200,
        body: { accessToken },
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

      if (error instanceof InvalidCredentials) {
        return {
          statusCode: 401,
          body: { message: "Invalid credentials" },
        };
      }

      throw error;
    }
  }
}
