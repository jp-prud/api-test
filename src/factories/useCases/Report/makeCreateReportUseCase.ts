import { CreateReportUseCase } from "../../../app/useCases";
import { makeReportRepository } from "../../repositories/makeReportRepository";

export function makeCreateReportUseCase() {
  const reportRepository = makeReportRepository();
  return new CreateReportUseCase(reportRepository);
}
