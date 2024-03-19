import { MealsStateOptions } from "@prisma/client";
import { ZodError, z } from "zod";
import { IController, IEvent, IResponseEvent } from "../../types";
import { CreateReportUseCase } from "../../useCases";

const MEAL_STATE_OPTIONS = ["ate", "didntEat", "ateLittle", "refused"] as const;

const schema = z.object({
  emotionalState: z.enum(["happy", "neutral", "sad"]),
  evaluations: z.string({
    required_error: "Evaluations is required",
  }),
  bathings: z.string({
    required_error: "Bathings is required",
  }),
  ferver: z.string({
    required_error: "Ferver is required",
  }),
  hydration: z.string({
    required_error: "Hydration is required",
  }),
  mealsState: z.object({
    brakefast: z.enum(MEAL_STATE_OPTIONS, {
      required_error: "Breakfast is required",
    }),
    lunch: z.enum(MEAL_STATE_OPTIONS, {
      required_error: "Lunch is required",
    }),
    afternoonSnack: z.enum(MealsStateOptions, {
      required_error: "Afternoon snack is required",
    }),
    dinner: z.enum(MEAL_STATE_OPTIONS, {
      required_error: "Dinner is required",
    }),
  }),
  customerId: z.string({
    required_error: "Customer is required",
  }),
  anotations: z.string().optional(),
});

export class CreateReportController implements IController {
  constructor(private readonly createReportUseCase: CreateReportUseCase) {}

  async handle({ body, account }: IEvent): Promise<IResponseEvent> {
    try {
      const { customerId, ...payload } = schema.parse(body);

      const mealsState = {
        brakefast: payload.mealsState.brakefast as MealsStateOptions,
        lunch: payload.mealsState.lunch as MealsStateOptions,
        afternoonSnack: payload.mealsState.afternoonSnack as MealsStateOptions,
        dinner: payload.mealsState.dinner as MealsStateOptions,
      };

      await this.createReportUseCase.execute({
        report: {
          ...payload,
          mealsState,
        },
        accountId: account!.id,
        customerId,
      });

      return {
        statusCode: 201,
        body: {
          message: "Report created successfully",
        },
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
