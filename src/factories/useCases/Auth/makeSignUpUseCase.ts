import { SignUpUseCase } from "../../../app/useCases/Auth/SignUpUseCase";
import { makeCompanyRepository } from "../../repositories/makeCompanyRepository";

export function makeSignUpUseCase() {
  const consumerRepository = makeCompanyRepository();
  return new SignUpUseCase(consumerRepository);
}
