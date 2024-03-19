import { ListAllCustomerUseCase } from "../../../app/useCases/Customers/ListAllCustomerUseCase";
import { makeCustomerRepository } from "../../repositories/makeCustomerRepository";

export function makelistAllCustomerUseCase() {
  const customerRepository = makeCustomerRepository();
  return new ListAllCustomerUseCase(customerRepository);
}
