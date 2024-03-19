import { IEvent } from "./IEvent";
import { IResponseEvent } from "./IResponseEvent";

export interface IController {
  handle(event: IEvent): Promise<IResponseEvent>;
}
