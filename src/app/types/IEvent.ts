import { APIGatewayProxyEventV2 } from "aws-lambda";

export type IEvent = APIGatewayProxyEventV2 & {
  account?: Account;
};

export type IEventMetadata = {
  prev: {
    data?: {
      account?: Account;
    };
  };
};

type Account = {
  id: string;
};
