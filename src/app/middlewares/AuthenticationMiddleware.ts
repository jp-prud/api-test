import { JwtPayload, verify } from "jsonwebtoken";
import { env } from "../config";
import { MissingAccessToken } from "../errors";
import { IData, IEvent, IResponseEvent } from "../types";

export async function handler({
  headers,
}: IEvent): Promise<IResponseEvent | IData> {
  const { authorization } = headers;

  if (!authorization) {
    throw new MissingAccessToken();
  }

  try {
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
      throw new Error();
    }

    const payload = verify(token, env.jwtSecret!) as JwtPayload;

    return {
      data: {
        account: {
          id: payload.sub,
        },
      },
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: {
        error: "Invalid access token.",
      },
    };
  }
}
