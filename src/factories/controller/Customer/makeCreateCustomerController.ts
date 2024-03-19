import { CreateCustomerControler } from "../../../app/controllers/Customer/CreateCustomerController";
import { makeCreateCustomerUseCase } from "../../useCases/Customer/makeCreateCustomerUseCase";

export function makeCreateCustomerController() {
  const createCustomerUseCase = makeCreateCustomerUseCase();
  return new CreateCustomerControler(createCustomerUseCase);
}
