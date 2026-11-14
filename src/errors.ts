import { Elysia, HTTPError } from 'elysia'

/* No need to extend HTTPError, just implement the interface
export class CustomError extends Error implements HTTPError<'CUSTOM_ERROR'> {
    type = 'CUSTOM_ERROR' as const
    // status must be const (or statically analyzable) for type narrowing
    status = 409 as const
    headers = { 'x-error': 'custom' }

    // `detail` of the RFC 9457 problem document, in place of the message
    detail = 'Custom error'
}
 */
export class UserAlreadyExistsError extends Error implements HTTPError<'USER_ALREADY_EXISTS'> {
    type = 'USER_ALREADY_EXISTS' as const
    status = 409 as const
    detail = 'User already exists'
}