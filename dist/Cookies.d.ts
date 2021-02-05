export interface CookiesAttributes {
    /**
     * Define when the cookie will be removed. Value can be a Number
     * which will be interpreted as days from time of creation or a
     * Date instance. If omitted, the cookie becomes a session cookie.
     */
    expires?: number | Date;
    /**
     * Define the path where the cookie is available. Defaults to "/".
     */
    path?: string;
    /**
     * Define the domain where the cookie is available. Defaults to
     * the domain of the page where the cookie was created.
     */
    domain?: string;
    /**
     * A Boolean indicating if the cookie transmission requires a
     * secure protocol (https). Defaults to false.
     */
    secure?: boolean;
    /**
     * Asserts that a cookie must not be sent with cross-origin requests,
     * providing some protection against cross-site request forgery
     * attacks (CSRF).
     */
    sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None";
}
export interface CookiesAllCookies {
    [key: string]: string;
}
export interface CookiesParsedJSON {
    [key: string]: any;
}
export declare type CookiesValue = string | object;
export declare type CookiesCookie = string | undefined;
/**
 * Manages the lifecycle of browser cookies.
 *
 * @see set
 * @see get
 * @see getJSON
 * @see remove
 *
 * Cookies:
 * [Github]{@link https://github.com/callisto2410/modstrap-cookies}
 */
export declare class Cookies {
    /**
     * Create a cookie.
     *
     * @param name
     * @param value
     * @param options
     */
    static set(name: string, value: CookiesValue, options?: CookiesAttributes): CookiesCookie;
    /**
     * Read cookie.
     *
     * @param name
     */
    static get(name?: string): CookiesCookie | CookiesAllCookies;
    /**
     * Returns the parsed representation of the string stored in the cookie according to JSON.parse.
     *
     * @param name
     */
    static getJSON(name?: string): CookiesCookie | CookiesParsedJSON;
    /**
     * Delete cookie.
     *
     * @param name
     * @param options
     */
    static remove(name: string, options?: CookiesAttributes): void;
}
export default Cookies;
