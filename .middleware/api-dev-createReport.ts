'use strict';

import { Context } from 'aws-lambda';
    
type MiddlewareContext<TResult = any> = Context & { end: () => void, prev: TResult };
type Handler<TEvent = any, TResult = any> = (
  event: TEvent,
  context: MiddlewareContext,
) => Promise<TResult>;
    
import * as src_app_middlewares_AuthenticationMiddleware from '../src/app/middlewares/AuthenticationMiddleware.js';
import * as src_server_routes_Report from '../src/server/routes/Report.js';

export const handler: Handler = (event, context) => {
  let end = false;
  context.end = () => end = true;

  const wrappedHandler = (handler: Handler) => (prev: any): Promise<any> => {
    if (end) return prev;
    context.prev = prev;
    return handler(event, context);
  };

  return Promise.resolve()
    .then(wrappedHandler(src_app_middlewares_AuthenticationMiddleware.handler.bind(src_app_middlewares_AuthenticationMiddleware)))
    .then(wrappedHandler(src_server_routes_Report.create.bind(src_server_routes_Report)));
};