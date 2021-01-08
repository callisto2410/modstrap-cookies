import * as JSCookies from "js-cookie";

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

export type CookiesValue = string | object;

export type CookiesCookie = string | undefined;

/**
 * Manages the lifecycle of browser cookies.
 *
 * @see set
 * @see get
 * @see getJSON
 * @see remove
 */
export class Cookies {
    /**
     * Create a cookie.
     *
     * @param name
     * @param value
     */
    public static set(name: string, value: CookiesValue): CookiesCookie;

    /**
     * Create a cookie.
     *
     * @param name
     * @param value
     * @param options
     */
    public static set(name: string, value: CookiesValue, options: CookiesAttributes): CookiesCookie;

    /**
     * Create a cookie.
     *
     * @param name
     * @param value
     * @param options
     */
    public static set(name: string, value: CookiesValue, options?: CookiesAttributes): CookiesCookie {
        return JSCookies.set(name, value, options);
    }

    /**
     * Read all available cookies.
     */
    public static get(): CookiesAllCookies;

    /**
     * Read cookie.
     *
     * @param name
     */
    public static get(name: string): CookiesCookie;

    /**
     * Read cookie.
     *
     * @param name
     */
    public static get(name?: string): CookiesCookie | CookiesAllCookies {
        return JSCookies.get();
    }

    /**
     * Returns the parsed representation of all cookies according to JSON.parse.
     */
    public static getJSON(): CookiesParsedJSON;

    /**
     * Returns the parsed representation of the string stored in the cookie according to JSON.parse.
     *
     * @param name
     */
    public static getJSON(name: string): CookiesCookie | CookiesParsedJSON;

    /**
     * Returns the parsed representation of the string stored in the cookie according to JSON.parse.
     *
     * @param name
     */
    public static getJSON(name?: string): CookiesCookie | CookiesParsedJSON {
        return JSCookies.getJSON();
    }

    /**
     * Delete cookie.
     *
     * @param name
     */
    public static remove(name: string): void;

    /**
     * Delete cookie.
     *
     * @param name
     * @param options
     */
    public static remove(name: string, options: CookiesAttributes): void;

    /**
     * Delete cookie.
     *
     * @param name
     * @param options
     */
    public static remove(name: string, options?: CookiesAttributes): void {
        JSCookies.remove(name, options);
    }
}

export default Cookies;
