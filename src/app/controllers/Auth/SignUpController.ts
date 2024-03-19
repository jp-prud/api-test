import { ZodError, z } from "zod";
import { AccountAlreadyExists } from "../../errors/AccountAlreadyExists";
import { IController, IEvent, IResponseEvent } from "../../types";
import { SignUpUseCase } from "../../useCases";

const schema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
});

export class SignUpController implements IController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  async handle(event: IEvent): Promise<IResponseEvent> {
    try {
      const payload = schema.parse(event.body);

      await this.signUpUseCase.execute(payload);

      return {
        statusCode: 204,
        body: null,
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

      if (error instanceof AccountAlreadyExists) {
        return {
          statusCode: 409,
          body: { error: "Account already exists" },
        };
      }

      throw error;
    }
  }
}
