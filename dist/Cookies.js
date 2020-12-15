"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_cookie_1 = __importDefault(require("js-cookie"));
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
        return js_cookie_1.default.set(name, value, options);
    }
    /**
     * Read cookie.
     *
     * @param name
     */
    static get(name) {
        return (name) ? js_cookie_1.default.get(name) : js_cookie_1.default.get();
    }
    /**
     * Returns the parsed representation of the string stored in the cookie according to JSON.parse.
     *
     * @param name
     */
    static getJSON(name) {
        return (name) ? js_cookie_1.default.getJSON(name) : js_cookie_1.default.getJSON();
    }
    /**
     * Delete cookie.
     *
     * @param name
     * @param options
     */
    static remove(name, options) {
        js_cookie_1.default.remove(name, options);
    }
}
exports.default = Cookies;
