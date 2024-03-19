import { SignInUseCase } from "../../../app/useCases/Auth/SignInUseCase";
import { makeCompanyRepository } from "../../repositories/makeCompanyRepository";

export function makeSignInUseCase() {
  const consumerRepository = makeCompanyRepository();
  return new SignInUseCase(consumerRepository);
}
