/**
 * Card To Account AssociationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of RSInternalServer
 */
interface RSInternalServer {
  code?: string;
  message?: string;
  datetime?: string;
}

export class RSInternalServerError extends ApiError<RSInternalServer> {}