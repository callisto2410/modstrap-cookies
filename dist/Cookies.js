"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const JSCookies = __importStar(require("js-cookie"));
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
        return JSCookies.get();
    }
    /**
     * Returns the parsed representation of the string stored in the cookie according to JSON.parse.
     *
     * @param name
     */
    static getJSON(name) {
        return JSCookies.getJSON();
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
