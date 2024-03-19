import { AuthenticationMiddleware } from "../../app/middlewares";

export function makeAuthenticationMiddleware() {
  return new AuthenticationMiddleware();
}
