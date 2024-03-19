import { APIGatewayProxyStructuredResultV2 } from "aws-lambda";
import { IController, IEvent, IEventMetadata } from "../../app/types";

interface LambdaAdapterProps {
  event: IEvent;
  context?: IEventMetadata;
  controller: IController;
}

export async function lambdaAdapter({
  event,
  context,
  controller,
}: LambdaAdapterProps): Promise<APIGatewayProxyStructuredResultV2> {
  try {
    const { statusCode, body } = await controller.handle({
      ...event,
      account: context?.prev.data?.account,
      body: JSON.parse(event.body || "{}"),
    });

    return {
      statusCode,
      body: JSON.stringify(body),
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
}
