import { CreateReportController } from "../../../app/controllers/Report/CreateReportController";
import { makeCreateReportUseCase } from "../../useCases/Report/makeCreateReportUseCase";

export function makeCreateReportController() {
  const createReportUseCase = makeCreateReportUseCase();
  return new CreateReportController(createReportUseCase);
}
