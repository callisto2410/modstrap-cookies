"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSCookies = require("js-cookie");
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
     * @param options
     */
    static set(name, value, options) {
        return JSCookies.set(name, value, options);
    }
    /**
     * Read cookie.
     *
     * @param name
     */
    static get(name) {
        return (name) ? JSCookies.get(name) : JSCookies.get();
    }
    /**
     * Returns the parsed representation of the string stored in the cookie according to JSON.parse.
     *
     * @param name
     */
    static getJSON(name) {
        return (name) ? JSCookies.getJSON(name) : JSCookies.getJSON();
    }
    /**
     * Delete cookie.
     *
     * @param name
     * @param options
     */
    static remove(name, options) {
        JSCookies.remove(name, options);
    }
}
exports.default = Cookies;
