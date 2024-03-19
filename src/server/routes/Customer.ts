import { IEvent, IEventMetadata } from "../../app/types";

export async function create(event: IEvent, context: IEventMetadata) {
  console.log("oi");

  // const createCustomerController = makeCreateCustomerController();
  // return lambdaAdapter({
  //   event,
  //   context,
  //   controller: createCustomerController,
  // });
}

export async function listAll(event: IEvent, context: IEventMetadata) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Retorno API",
    }),
  };

  // const listAllCustomerController = makeListAllCustomerController();
  // return lambdaAdapter({
  //   event,
  //   context,
  //   controller: listAllCustomerController,
  // });
}
