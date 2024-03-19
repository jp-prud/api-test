import { Prisma } from "@prisma/client";
import { ReportRepository } from "../../repositories";
import { IUseCase } from "../../types";

type IInput = {
  report: Omit<
    Prisma.ReportCreateInput,
    "Company" | "Customer" | "mealsState"
  > & {
    mealsState: Prisma.MealsStateCreateInput;
  };
  customerId: string;
  accountId: string;
};

type IOutput = void;

export class CreateReportUseCase implements IUseCase<IInput, IOutput> {
  constructor(private readonly reportRepository: ReportRepository) {}

  async execute(input: IInput): Promise<IOutput> {
    console.log(input);

    await this.reportRepository.create({
      ...input.report,
      mealsState: {
        create: input.report.mealsState,
      },
      Customer: {
        connect: {
          id: input.customerId,
        },
      },
      Company: {
        connect: {
          id: input.accountId,
        },
      },
    });

    return;
  }
}
