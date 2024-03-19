export interface IResponseEvent {
  statusCode: number;
  body: Record<string, any> | null;
}
export interface IData {
  data: Record<string, any>;
}
