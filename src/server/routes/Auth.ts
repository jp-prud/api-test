import { IEvent } from "../../app/types";
import { makeSignInController } from "../../factories/controller/Auth/makeSignInController";
import { lambdaAdapter } from "../adapters/lambdaAdapter";

export async function signIn(event: IEvent) {
  const signInController = makeSignInController();
  return lambdaAdapter({ event, controller: signInController });
}
