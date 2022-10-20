# Tryitout

```ts
const tryitoutController = new TryitoutController(client);
```

## Class Name

`TryitoutController`


# Card to Account Association

Use this endpoint to link an unnamed card to an account.

```ts
async cardToAccountAssociation(
  customerId: string,
  cardId: string,
  body: RQCardToAccountAssociation,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RSSuccess>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | - |
| `cardId` | `string` | Template, Required | - |
| `body` | [`RQCardToAccountAssociation`](../../doc/models/rq-card-to-account-association.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RSSuccess`](../../doc/models/rs-success.md)

## Example Usage

```ts
const customerId = 'L1KJ2B35KLJB34L2J4BKK6J4';
const cardId = 'L1KJ2B35KLJB34L2J4BKK6J4';
const contentType = null;
const body: RQCardToAccountAssociation = {
  accountId: '221BF87320F278DC9F41C835AD0D5111B2B0FF68',
};

try {
  const { result, ...httpResponse } = await tryItOutController.cardToAccountAssociation(customerId, cardId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request Payload malformed | [`RSBadRequestError`](../../doc/models/rs-bad-request-error.md) |
| 401 | Unauthorized | [`RSUnauthorizedError`](../../doc/models/rs-unauthorized-error.md) |
| 500 | Not Found | [`RSInternalServerError`](../../doc/models/rs-internal-server-error.md) |

