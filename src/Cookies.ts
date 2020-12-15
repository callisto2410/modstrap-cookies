import {default as JSCookies} from 'js-cookie';

type Value = string | object;

type Cookie = string | undefined;

interface Attributes {
    /**
     * Define when the cookie will be removed. Value can be a Number
     * which will be interpreted as days from time of creation or a
     * Date instance. If omitted, the cookie becomes a session cookie.
     */
    expires?: number | Date;

    /**
     * Define the path where the cookie is available. Defaults to '/'.
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
    sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None';
}

interface AllCookies {
    [key: string]: string;
}

interface ParsedJSON {
    [key: string]: any;
}

/**
 * Manages the lifecycle of browser cookies.
 *
 * @see set
 * @see get
 * @see getJSON
 * @see remove
 */
class Cookies {
    /**
     * Create a cookie.
     *
     * @param name
     * @param value
     */
    static set(name: string, value: Value): Cookie;

    /**
     * Create a cookie.
     *
     * @param name
     * @param value
     * @param options
     */
    static set(name: string, value: Value, options: Attributes): Cookie;

    /**
     * Create a cookie.
     *
     * @param name
     * @param value
     * @param options
     */
    static set(name: string, value: Value, options?: Attributes): Cookie {
        return JSCookies.set(name, value, options);
    }

    /**
     * Read all available cookies.
     */
    static get(): AllCookies;

    /**
     * Read cookie.
     *
     * @param name
     */
    static get(name: string): Cookie;

    /**
     * Read cookie.
     *
     * @param name
     */
    static get(name?: string): Cookie | AllCookies {
        return (name) ? JSCookies.get(name) : JSCookies.get();
    }

    /**
     * Returns the parsed representation of all cookies according to JSON.parse.
     */
    static getJSON(): ParsedJSON;

    /**
     * Returns the parsed representation of the string stored in the cookie according to JSON.parse.
     *
     * @param name
     */
    static getJSON(name: string): Cookie | ParsedJSON;

    /**
     * Returns the parsed representation of the string stored in the cookie according to JSON.parse.
     *
     * @param name
     */
    static getJSON(name?: string): Cookie | ParsedJSON {
        return (name) ? JSCookies.getJSON(name) : JSCookies.getJSON();
    }

    /**
     * Delete cookie.
     *
     * @param name
     */
    static remove(name: string): void;

    /**
     * Delete cookie.
     *
     * @param name
     * @param options
     */
    static remove(name: string, options: Attributes): void;

    /**
     * Delete cookie.
     *
     * @param name
     * @param options
     */
    static remove(name: string, options?: Attributes): void {
        JSCookies.remove(name, options);
    }
}

export default Cookies;
