import { SignInController } from "../../../app/controllers/Auth/SignInController";
import { makeSignInUseCase } from "../../useCases/Auth/makeSignInUseCase";

export function makeSignInController() {
  const signInUseCase = makeSignInUseCase();
  return new SignInController(signInUseCase);
}
