import { SignUpController } from "../../../app/controllers/Auth/SignUpController";
import { makeSignUpUseCase } from "../../useCases/Auth/makeSignUpUseCase";

export function makeSignUpController() {
  const signUpUseCase = makeSignUpUseCase();
  return new SignUpController(signUpUseCase);
}
