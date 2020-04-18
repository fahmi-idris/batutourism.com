import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { KEY } from '../config/config';

/**
 * Gets user using the email
 * @param {string} plainPassword - Request body password
 * @param {string} hash - Hashed password
 * @returns {string}
 */
export const authenticate = (plainPassword: string, hash: string): boolean => bcrypt.compareSync(plainPassword, hash);

/**
 * Encrypt user password
 * @param {string} plainPassword - The title of the book.
 * @returns {string}
 */
export const encryptPassword = (plainPassword: string): string => bcrypt.hashSync(plainPassword, 8);

/**
 * Generate JWT Sign
 * @param {string} id - User ID.
 * @returns {string}
 */
export const jwtSign = (id: string) => jwt.sign({ id }, KEY);

/**
 * Verify JWT
 * @param {string} authorization - Access Token.
 * @returns {any}
 */
export const jwtVerify = (authorization: string) => jwt.verify(authorization.substring(7), KEY);
