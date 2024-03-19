import { IEvent, IEventMetadata } from "../../app/types";
import { makeCreateReportController } from "../../factories/controller/Report/makeCreateReportController";
import { lambdaAdapter } from "../adapters/lambdaAdapter";

export async function create(event: IEvent, context: IEventMetadata) {
  const createReportController = makeCreateReportController();
  return lambdaAdapter({
    event,
    context,
    controller: createReportController,
  });
}
