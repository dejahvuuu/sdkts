/**
 * Card To Account AssociationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { RSBadRequestError } from '../errors/rSBadRequestError';
import { RSInternalServerError } from '../errors/rSInternalServerError';
import { RSUnauthorizedError } from '../errors/rSUnauthorizedError';
import {
  RQCardToAccountAssociation,
  rQCardToAccountAssociationSchema,
} from '../models/rQCardToAccountAssociation';
import { RSSuccess, rSSuccessSchema } from '../models/rSSuccess';
import { string } from '../schema';
import { BaseController } from './baseController';

export class TryItOutController extends BaseController {
  /**
   * Use this endpoint to link an unnamed card to an account.
   *
   * @param customerId
   * @param cardId
   * @param body
   * @return Response from the API call
   */
  async cardToAccountAssociation(
    customerId: string,
    cardId: string,
    body: RQCardToAccountAssociation,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RSSuccess>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      customerId: [customerId, string()],
      cardId: [cardId, string()],
      body: [body, rQCardToAccountAssociationSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/customers/${mapped.customerId}/cards/${mapped.cardId}/associate`;
    req.throwOn(400, RSBadRequestError, 'Request Payload malformed');
    req.throwOn(401, RSUnauthorizedError, 'Unauthorized');
    req.throwOn(500, RSInternalServerError, 'Not Found');
    return req.callAsJson(rSSuccessSchema, requestOptions);
  }
}