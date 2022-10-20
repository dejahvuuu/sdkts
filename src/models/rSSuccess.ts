/**
 * Card To Account AssociationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface RSSuccess {
  code?: string;
  message?: string;
  datetime?: string;
}

export const rSSuccessSchema: Schema<RSSuccess> = object({
  code: ['code', optional(string())],
  message: ['message', optional(string())],
  datetime: ['datetime', optional(string())],
});