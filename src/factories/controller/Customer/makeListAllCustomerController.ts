import { ListAllCustomerController } from "../../../app/controllers/Customer/ListAllCustomerController";
import { makelistAllCustomerUseCase } from "../../useCases/Customer/makeListAllCustomerUseCase";

export function makeListAllCustomerController() {
  const listAllCustomerUseCase = makelistAllCustomerUseCase();
  return new ListAllCustomerController(listAllCustomerUseCase);
}
