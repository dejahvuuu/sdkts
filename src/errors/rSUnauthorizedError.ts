/**
 * Card To Account AssociationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of RSUnauthorized
 */
interface RSUnauthorized {
  code?: string;
  message?: string;
  datetime?: string;
}

export class RSUnauthorizedError extends ApiError<RSUnauthorized> {}