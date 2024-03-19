import { CreateCustomerUseCase } from "../../../app/useCases";
import { makeCustomerRepository } from "../../repositories/makeCustomerRepository";

export function makeCreateCustomerUseCase() {
  const customerRepository = makeCustomerRepository();
  return new CreateCustomerUseCase(customerRepository);
}
