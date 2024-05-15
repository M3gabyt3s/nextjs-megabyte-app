(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/e667e_next_0c8c37._.js", {

"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null,
    assign: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    },
    assign: function() {
        return assign;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    urlObjectKeys: null,
    formatWithValidation: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || "";
    let pathname = urlObj.pathname || "";
    let hash = urlObj.hash || "";
    let query = urlObj.query || "";
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ":" + urlObj.port;
        }
    }
    if (query && typeof query === "object") {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || "";
    if (protocol && !protocol.endsWith(":")) protocol += ":";
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
    } else if (!host) {
        host = "";
    }
    if (hash && hash[0] !== "#") hash = "#" + hash;
    if (search && search[0] !== "?") search = "?" + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace("#", "%23");
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    "auth",
    "hash",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "slashes"
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === "object") {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/omit.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "omit", {
    enumerable: true,
    get: function() {
        return omit;
    }
});
function omit(object, keys) {
    const omitted = {};
    Object.keys(object).forEach((key)=>{
        if (!keys.includes(key)) {
            omitted[key] = object[key];
        }
    });
    return omitted;
} //# sourceMappingURL=omit.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    WEB_VITALS: null,
    execOnce: null,
    isAbsoluteUrl: null,
    getLocationOrigin: null,
    getURL: null,
    getDisplayName: null,
    isResSent: null,
    normalizeRepeatedSlashes: null,
    loadGetInitialProps: null,
    SP: null,
    ST: null,
    DecodeError: null,
    NormalizeError: null,
    PageNotFoundError: null,
    MissingStaticPage: null,
    MiddlewareNotFoundError: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    isResSent: function() {
        return isResSent;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    DecodeError: function() {
        return DecodeError;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw new Error(message);
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSortedRoutes", {
    enumerable: true,
    get: function() {
        return getSortedRoutes;
    }
});
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith("...")) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = "[[...]]";
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = "[...]";
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = "[]";
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
} //# sourceMappingURL=sorted-routes.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isDynamicRoute", {
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
});
const _interceptionroutes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/helpers/interception-routes.js [app-client] (ecmascript)");
// Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
    }
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getSortedRoutes: null,
    isDynamicRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js [app-client] (ecmascript)");
const _isdynamic = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/route-matcher.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getRouteMatcher", {
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
});
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new _utils.DecodeError("failed to decode param");
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/escape-regexp.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

// regexp is based on https://github.com/sindresorhus/escape-string-regexp
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "escapeStringRegexp", {
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
});
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/route-regex.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRouteRegex: null,
    getNamedRouteRegex: null,
    getNamedMiddlewareRegex: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRouteRegex: function() {
        return getRouteRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    }
});
const _interceptionroutes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/helpers/interception-routes.js [app-client] (ecmascript)");
const _escaperegexp = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/escape-regexp.js [app-client] (ecmascript)");
const _removetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-client] (ecmascript)");
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 */ function parseParameter(param) {
    const optional = param.startsWith("[") && param.endsWith("]");
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith("...");
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (markerMatch && paramMatches) {
                const { key, optional, repeat } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
            } else if (paramMatches) {
                const { key, repeat, optional } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        groups
    };
}
function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = "";
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
    const { key, optional, repeat } = parseParameter(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, "");
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : "";
    return repeat ? optional ? "(?:/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?))?" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?)" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">[^/]+?)";
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (hasInterceptionMarker && paramMatches) {
                const [usedMarker] = segment.split(paramMatches[0]);
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    interceptionMarker: usedMarker,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_INTERCEPTION_MARKER_PREFIX : undefined
                });
            } else if (paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_QUERY_PARAM_PREFIX : undefined
                });
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
    const { catchAll = true } = options;
    if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "interpolateAs", {
    enumerable: true,
    get: function() {
        return interpolateAs;
    }
});
const _routematcher = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/route-matcher.js [app-client] (ecmascript)");
const _routeregex = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/route-regex.js [app-client] (ecmascript)");
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = "";
    const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
    // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = "[" + (repeat ? "..." : "") + param + "]";
        if (optional) {
            replaced = (!value ? "/" : "") + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
    })) {
        interpolatedRoute = "" // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
} //# sourceMappingURL=interpolate-as.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/resolve-href.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "resolveHref", {
    enumerable: true,
    get: function() {
        return resolveHref;
    }
});
const _querystring = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)");
const _formaturl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _omit = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/omit.js [app-client] (ecmascript)");
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _normalizetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _utils1 = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/index.js [app-client] (ecmascript)");
const _interpolateas = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js [app-client] (ecmascript)");
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split("?", 1);
    if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL("/", "http://n");
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formaturl.formatWithValidation)({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: (0, _omit.omit)(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=resolve-href.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/add-locale.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addLocale", {
    enumerable: true,
    get: function() {
        return addLocale;
    }
});
const _normalizetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)");
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return path;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RouterContext", {
    enumerable: true,
    get: function() {
        return RouterContext;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const RouterContext = _react.default.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    RouterContext.displayName = "RouterContext";
} //# sourceMappingURL=router-context.shared-runtime.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    requestIdleCallback: null,
    cancelIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/use-intersection.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useIntersection", {
    enumerable: true,
    get: function() {
        return useIntersection;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _requestidlecallback = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)");
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/get-domain-locale.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getDomainLocale", {
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
});
const _normalizetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || "";
function getDomainLocale(path, locale, locales, domainLocales) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        return false;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/link.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _resolvehref = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/resolve-href.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _formaturl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addlocale = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/add-locale.js [app-client] (ecmascript)");
const _routercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _useintersection = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/use-intersection.js [app-client] (ecmascript)");
const _getdomainlocale = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/get-domain-locale.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (typeof window === "undefined") {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options);
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(prefetchPromise).catch((err)=>{
        if (("TURBOPACK compile-time value", "development") !== "production") {
            // rethrow to show invalid URL errors
            throw err;
        }
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll: routerScroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                scroll: routerScroll
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const pagesRouter = _react.default.useContext(_routercontextsharedruntime.RouterContext);
    const appRouter = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== "undefined" ? "\nOpen your browser's console to view the Component stack trace." : ""));
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === "href") {
                if (props[key] == null || typeof props[key] !== "string" && typeof props[key] !== "object") {
                    throw createPropError({
                        key,
                        expected: "`string` or `object`",
                        actual: props[key] === null ? "null" : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            locale: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === "as") {
                if (props[key] && valType !== "string" && valType !== "object") {
                    throw createPropError({
                        key,
                        expected: "`string` or `object`",
                        actual: valType
                    });
                }
            } else if (key === "locale") {
                if (props[key] && valType !== "string") {
                    throw createPropError({
                        key,
                        expected: "`string`",
                        actual: valType
                    });
                }
            } else if (key === "onClick" || key === "onMouseEnter" || key === "onTouchStart") {
                if (props[key] && valType !== "function") {
                    throw createPropError({
                        key,
                        expected: "`function`",
                        actual: valType
                    });
                }
            } else if (key === "replace" || key === "scroll" || key === "shallow" || key === "passHref" || key === "prefetch" || key === "legacyBehavior") {
                if (props[key] != null && valType !== "boolean") {
                    throw createPropError({
                        key,
                        expected: "`boolean`",
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const hasWarned = _react.default.useRef(false);
        if (props.prefetch && !hasWarned.current && !isAppRouter) {
            hasWarned.current = true;
            console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated");
        }
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (isAppRouter && !asProp) {
            let href;
            if (typeof hrefProp === "string") {
                href = hrefProp;
            } else if (typeof hrefProp === "object" && typeof hrefProp.pathname === "string") {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split("/").some((segment)=>segment.startsWith("[") && segment.endsWith("]"));
                if (hasDynamicSegment) {
                    throw new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href");
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children");
                }
                throw new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== "undefined" ? " \nOpen your browser's console to view the Component stack trace." : ""));
            }
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === "a") {
                throw new Error("Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor");
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (("TURBOPACK compile-time value", "development") !== "production") {
            return;
        }
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw new Error('Component rendered inside next/link has to pass click event to "onClick" prop.');
                }
            }
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ((!prefetchEnabled || ("TURBOPACK compile-time value", "development") === "development") && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
        ...restProps,
        ...childProps,
        children: children
    });
});
const _default = Link;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/link.js [app-client] (ecmascript)");

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === "undefined") {
        throw new _bailouttocsr.BailoutToCSRError(reason);
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    var _mod_default;
    return {
        default: (_mod_default = mod == null ? void 0 : mod.default) != null ? _mod_default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
            ...props
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            fallback: fallbackElement,
            children: children
        });
    }
    LoadableComponent.displayName = "LoadableComponent";
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {
        // A loading component is not required, so we default it
        loading: (param)=>{
            let { error, isLoading, pastDelay } = param;
            if (!pastDelay) return null;
            if ("TURBOPACK compile-time truthy", 1) {
                if (isLoading) {
                    return null;
                }
                if (error) {
                    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                        children: [
                            error.message,
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("br", {}),
                            error.stack
                        ]
                    });
                }
            }
            return null;
        }
    };
    if (typeof dynamicOptions === "function") {
        loadableOptions.loader = dynamicOptions;
    }
    return (0, _loadable.default)({
        ...loadableOptions,
        ...options
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg(param) {
    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
    const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        "image/webp"
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "inline",
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImgProps", {
    enumerable: true,
    get: function() {
        return getImgProps;
    }
});
const _warnonce = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _imageblursvg = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const VALID_LOADING_VALUES = [
    "lazy",
    "eager",
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps(param, _state) {
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ("allSizes" in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes
        };
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const qualityInt = getInt(quality);
    if ("TURBOPACK compile-time truthy", 1) {
        if (config.output === "export" && isDefaultLoader && !unoptimized) {
            throw new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api");
        }
        if (!src) {
            // React doesn't show the stack trace and there's
            // no `src` to help identify which image, so we
            // instead console.error(ref) during mount.
            unoptimized = true;
        } else {
            if (fill) {
                if (width) {
                    throw new Error('Image with src "' + src + '" has both "width" and "fill" properties. Only one should be used.');
                }
                if (height) {
                    throw new Error('Image with src "' + src + '" has both "height" and "fill" properties. Only one should be used.');
                }
                if ((style == null ? void 0 : style.position) && style.position !== "absolute") {
                    throw new Error('Image with src "' + src + '" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.');
                }
                if ((style == null ? void 0 : style.width) && style.width !== "100%") {
                    throw new Error('Image with src "' + src + '" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.');
                }
                if ((style == null ? void 0 : style.height) && style.height !== "100%") {
                    throw new Error('Image with src "' + src + '" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.');
                }
            } else {
                if (typeof widthInt === "undefined") {
                    throw new Error('Image with src "' + src + '" is missing required "width" property.');
                } else if (isNaN(widthInt)) {
                    throw new Error('Image with src "' + src + '" has invalid "width" property. Expected a numeric value in pixels but received "' + width + '".');
                }
                if (typeof heightInt === "undefined") {
                    throw new Error('Image with src "' + src + '" is missing required "height" property.');
                } else if (isNaN(heightInt)) {
                    throw new Error('Image with src "' + src + '" has invalid "height" property. Expected a numeric value in pixels but received "' + height + '".');
                }
            }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
            throw new Error('Image with src "' + src + '" has invalid "loading" property. Provided "' + loading + '" should be one of ' + VALID_LOADING_VALUES.map(String).join(",") + ".");
        }
        if (priority && loading === "lazy") {
            throw new Error('Image with src "' + src + '" has both "priority" and "loading=\'lazy\'" properties. Only one should be used.');
        }
        if (placeholder !== "empty" && placeholder !== "blur" && !placeholder.startsWith("data:image/")) {
            throw new Error('Image with src "' + src + '" has invalid "placeholder" property "' + placeholder + '".');
        }
        if (placeholder !== "empty") {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
                (0, _warnonce.warnOnce)('Image with src "' + src + '" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.');
            }
        }
        if (placeholder === "blur" && !blurDataURL) {
            const VALID_BLUR_EXT = [
                "jpeg",
                "png",
                "webp",
                "avif"
            ] // should match next-image-loader
            ;
            throw new Error('Image with src "' + src + '" has "placeholder=\'blur\'" property but is missing the "blurDataURL" property.\n        Possible solutions:\n          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image\n          - Change the "src" property to a static import with one of the supported file types: ' + VALID_BLUR_EXT.join(",") + ' (animated images not supported)\n          - Remove the "placeholder" property, effectively no blur effect\n        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url');
        }
        if ("ref" in rest) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" is using unsupported "ref" property. Consider using the "onLoad" property instead.');
        }
        if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
                config,
                src,
                width: widthInt || 400,
                quality: qualityInt || 75
            });
            let url;
            try {
                url = new URL(urlStr);
            } catch (err) {}
            if (urlStr === src || url && url.pathname === src && !url.search) {
                (0, _warnonce.warnOnce)('Image with src "' + src + '" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width");
            }
        }
        if (onLoadingComplete) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.');
        }
        for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
        })){
            if (legacyValue) {
                (0, _warnonce.warnOnce)('Image with src "' + src + '" has legacy prop "' + legacyKey + '". Did you forget to run the codemod?' + "\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13");
            }
        }
        if (typeof window !== "undefined" && !perfObserver && window.PerformanceObserver) {
            perfObserver = new PerformanceObserver((entryList)=>{
                for (const entry of entryList.getEntries()){
                    var _entry_element;
                    // @ts-ignore - missing "LargestContentfulPaint" class with "element" prop
                    const imgSrc = (entry == null ? void 0 : (_entry_element = entry.element) == null ? void 0 : _entry_element.src) || "";
                    const lcpImage = allImgs.get(imgSrc);
                    if (lcpImage && !lcpImage.priority && lcpImage.placeholder === "empty" && !lcpImage.src.startsWith("data:") && !lcpImage.src.startsWith("blob:")) {
                        // https://web.dev/lcp/#measure-lcp-in-javascript
                        (0, _warnonce.warnOnce)('Image with src "' + lcpImage.src + '" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.' + "\nRead more: https://nextjs.org/docs/api-reference/next/image#priority");
                    }
                }
            });
            try {
                perfObserver.observe({
                    type: "largest-contentful-paint",
                    buffered: true
                });
            } catch (err) {
                // Log error but don't crash the app
                console.error(err);
            }
        }
    }
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || "",
        objectFit: imgStyle.objectFit
    }) + '")' : 'url("' + placeholder + '")' // assume `data:image/`
     : null;
    let placeholderStyle = backgroundImage ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage
    } : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (placeholderStyle.backgroundImage && placeholder === "blur" && (blurDataURL == null ? void 0 : blurDataURL.startsWith("/"))) {
            // During `next dev`, we don't want to generate blur placeholders with webpack
            // because it can delay starting the dev server. Instead, `next-image-loader.js`
            // will inline a special url to lazily generate the blur placeholder at request time.
            placeholderStyle.backgroundImage = 'url("' + blurDataURL + '")';
        }
    }
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof window !== "undefined") {
            let fullUrl;
            try {
                fullUrl = new URL(imgAttributes.src);
            } catch (e) {
                fullUrl = new URL(imgAttributes.src, window.location.href);
            }
            allImgs.set(fullUrl.href, {
                src,
                priority,
                placeholder
            });
        }
    }
    const props = {
        ...rest,
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: imgAttributes.src
    };
    const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const isServer = typeof window === "undefined";
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements, props));
        }
    }
    if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect(()=>{
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        return ()=>{
            var _headManager_mountedInstances;
            headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.delete(props.children);
        };
    });
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect(()=>{
        if (headManager) {
            headManager._pendingUpdate = emitChange;
        }
        return ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
        };
    });
    useClientOnlyEffect(()=>{
        if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
        }
        return ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
        };
    });
    return null;
} //# sourceMappingURL=side-effect.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-context.shared-runtime.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AmpStateContext", {
    enumerable: true,
    get: function() {
        return AmpStateContext;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const AmpStateContext = _react.default.createContext({});
if ("TURBOPACK compile-time truthy", 1) {
    AmpStateContext.displayName = "AmpStateContext";
} //# sourceMappingURL=amp-context.shared-runtime.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HeadManagerContext", {
    enumerable: true,
    get: function() {
        return HeadManagerContext;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const HeadManagerContext = _react.default.createContext({});
if ("TURBOPACK compile-time truthy", 1) {
    HeadManagerContext.displayName = "HeadManagerContext";
} //# sourceMappingURL=head-manager-context.shared-runtime.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-mode.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isInAmpMode", {
    enumerable: true,
    get: function() {
        return isInAmpMode;
    }
});
function isInAmpMode(param) {
    let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
    return ampFirst || hybrid && hasQuery;
} //# sourceMappingURL=amp-mode.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    defaultHead: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    defaultHead: function() {
        return defaultHead;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)"));
const _ampcontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-context.shared-runtime.js [app-client] (ecmascript)");
const _headmanagercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _ampmode = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-mode.js [app-client] (ecmascript)");
const _warnonce = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function defaultHead(inAmpMode) {
    if (inAmpMode === void 0) inAmpMode = false;
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        if ("TURBOPACK compile-time truthy", 1) {
            // omit JSON-LD structured data snippets from the warning
            if (c.type === "script" && c.props["type"] !== "application/ld+json") {
                const srcMessage = c.props["src"] ? '<script> tag with src="' + c.props["src"] + '"' : "inline <script>";
                (0, _warnonce.warnOnce)("Do not add <script> tags using next/head (see " + srcMessage + "). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component");
            } else if (c.type === "link" && c.props["rel"] === "stylesheet") {
                (0, _warnonce.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + c.props["href"] + '"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component');
            }
        }
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head(param) {
    let { children } = param;
    const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState),
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageConfigContext", {
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _imageconfig = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if ("TURBOPACK compile-time truthy", 1) {
    ImageConfigContext.displayName = "ImageConfigContext";
} //# sourceMappingURL=image-config-context.shared-runtime.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    "use strict";
    var e = {
        114: function(e) {
            function assertPath(e) {
                if (typeof e !== "string") {
                    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
                }
            }
            function normalizeStringPosix(e, r) {
                var t = "";
                var i = 0;
                var n = -1;
                var a = 0;
                var f;
                for(var l = 0; l <= e.length; ++l){
                    if (l < e.length) f = e.charCodeAt(l);
                    else if (f === 47) break;
                    else f = 47;
                    if (f === 47) {
                        if (n === l - 1 || a === 1) {} else if (n !== l - 1 && a === 2) {
                            if (t.length < 2 || i !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
                                if (t.length > 2) {
                                    var s = t.lastIndexOf("/");
                                    if (s !== t.length - 1) {
                                        if (s === -1) {
                                            t = "";
                                            i = 0;
                                        } else {
                                            t = t.slice(0, s);
                                            i = t.length - 1 - t.lastIndexOf("/");
                                        }
                                        n = l;
                                        a = 0;
                                        continue;
                                    }
                                } else if (t.length === 2 || t.length === 1) {
                                    t = "";
                                    i = 0;
                                    n = l;
                                    a = 0;
                                    continue;
                                }
                            }
                            if (r) {
                                if (t.length > 0) t += "/..";
                                else t = "..";
                                i = 2;
                            }
                        } else {
                            if (t.length > 0) t += "/" + e.slice(n + 1, l);
                            else t = e.slice(n + 1, l);
                            i = l - n - 1;
                        }
                        n = l;
                        a = 0;
                    } else if (f === 46 && a !== -1) {
                        ++a;
                    } else {
                        a = -1;
                    }
                }
                return t;
            }
            function _format(e, r) {
                var t = r.dir || r.root;
                var i = r.base || (r.name || "") + (r.ext || "");
                if (!t) {
                    return i;
                }
                if (t === r.root) {
                    return t + i;
                }
                return t + e + i;
            }
            var r = {
                resolve: function resolve() {
                    var e = "";
                    var r = false;
                    var t;
                    for(var i = arguments.length - 1; i >= -1 && !r; i--){
                        var n;
                        if (i >= 0) n = arguments[i];
                        else {
                            if (t === undefined) t = "";
                            n = t;
                        }
                        assertPath(n);
                        if (n.length === 0) {
                            continue;
                        }
                        e = n + "/" + e;
                        r = n.charCodeAt(0) === 47;
                    }
                    e = normalizeStringPosix(e, !r);
                    if (r) {
                        if (e.length > 0) return "/" + e;
                        else return "/";
                    } else if (e.length > 0) {
                        return e;
                    } else {
                        return ".";
                    }
                },
                normalize: function normalize(e) {
                    assertPath(e);
                    if (e.length === 0) return ".";
                    var r = e.charCodeAt(0) === 47;
                    var t = e.charCodeAt(e.length - 1) === 47;
                    e = normalizeStringPosix(e, !r);
                    if (e.length === 0 && !r) e = ".";
                    if (e.length > 0 && t) e += "/";
                    if (r) return "/" + e;
                    return e;
                },
                isAbsolute: function isAbsolute(e) {
                    assertPath(e);
                    return e.length > 0 && e.charCodeAt(0) === 47;
                },
                join: function join() {
                    if (arguments.length === 0) return ".";
                    var e;
                    for(var t = 0; t < arguments.length; ++t){
                        var i = arguments[t];
                        assertPath(i);
                        if (i.length > 0) {
                            if (e === undefined) e = i;
                            else e += "/" + i;
                        }
                    }
                    if (e === undefined) return ".";
                    return r.normalize(e);
                },
                relative: function relative(e, t) {
                    assertPath(e);
                    assertPath(t);
                    if (e === t) return "";
                    e = r.resolve(e);
                    t = r.resolve(t);
                    if (e === t) return "";
                    var i = 1;
                    for(; i < e.length; ++i){
                        if (e.charCodeAt(i) !== 47) break;
                    }
                    var n = e.length;
                    var a = n - i;
                    var f = 1;
                    for(; f < t.length; ++f){
                        if (t.charCodeAt(f) !== 47) break;
                    }
                    var l = t.length;
                    var s = l - f;
                    var o = a < s ? a : s;
                    var u = -1;
                    var h = 0;
                    for(; h <= o; ++h){
                        if (h === o) {
                            if (s > o) {
                                if (t.charCodeAt(f + h) === 47) {
                                    return t.slice(f + h + 1);
                                } else if (h === 0) {
                                    return t.slice(f + h);
                                }
                            } else if (a > o) {
                                if (e.charCodeAt(i + h) === 47) {
                                    u = h;
                                } else if (h === 0) {
                                    u = 0;
                                }
                            }
                            break;
                        }
                        var c = e.charCodeAt(i + h);
                        var v = t.charCodeAt(f + h);
                        if (c !== v) break;
                        else if (c === 47) u = h;
                    }
                    var g = "";
                    for(h = i + u + 1; h <= n; ++h){
                        if (h === n || e.charCodeAt(h) === 47) {
                            if (g.length === 0) g += "..";
                            else g += "/..";
                        }
                    }
                    if (g.length > 0) return g + t.slice(f + u);
                    else {
                        f += u;
                        if (t.charCodeAt(f) === 47) ++f;
                        return t.slice(f);
                    }
                },
                _makeLong: function _makeLong(e) {
                    return e;
                },
                dirname: function dirname(e) {
                    assertPath(e);
                    if (e.length === 0) return ".";
                    var r = e.charCodeAt(0);
                    var t = r === 47;
                    var i = -1;
                    var n = true;
                    for(var a = e.length - 1; a >= 1; --a){
                        r = e.charCodeAt(a);
                        if (r === 47) {
                            if (!n) {
                                i = a;
                                break;
                            }
                        } else {
                            n = false;
                        }
                    }
                    if (i === -1) return t ? "/" : ".";
                    if (t && i === 1) return "//";
                    return e.slice(0, i);
                },
                basename: function basename(e, r) {
                    if (r !== undefined && typeof r !== "string") throw new TypeError('"ext" argument must be a string');
                    assertPath(e);
                    var t = 0;
                    var i = -1;
                    var n = true;
                    var a;
                    if (r !== undefined && r.length > 0 && r.length <= e.length) {
                        if (r.length === e.length && r === e) return "";
                        var f = r.length - 1;
                        var l = -1;
                        for(a = e.length - 1; a >= 0; --a){
                            var s = e.charCodeAt(a);
                            if (s === 47) {
                                if (!n) {
                                    t = a + 1;
                                    break;
                                }
                            } else {
                                if (l === -1) {
                                    n = false;
                                    l = a + 1;
                                }
                                if (f >= 0) {
                                    if (s === r.charCodeAt(f)) {
                                        if (--f === -1) {
                                            i = a;
                                        }
                                    } else {
                                        f = -1;
                                        i = l;
                                    }
                                }
                            }
                        }
                        if (t === i) i = l;
                        else if (i === -1) i = e.length;
                        return e.slice(t, i);
                    } else {
                        for(a = e.length - 1; a >= 0; --a){
                            if (e.charCodeAt(a) === 47) {
                                if (!n) {
                                    t = a + 1;
                                    break;
                                }
                            } else if (i === -1) {
                                n = false;
                                i = a + 1;
                            }
                        }
                        if (i === -1) return "";
                        return e.slice(t, i);
                    }
                },
                extname: function extname(e) {
                    assertPath(e);
                    var r = -1;
                    var t = 0;
                    var i = -1;
                    var n = true;
                    var a = 0;
                    for(var f = e.length - 1; f >= 0; --f){
                        var l = e.charCodeAt(f);
                        if (l === 47) {
                            if (!n) {
                                t = f + 1;
                                break;
                            }
                            continue;
                        }
                        if (i === -1) {
                            n = false;
                            i = f + 1;
                        }
                        if (l === 46) {
                            if (r === -1) r = f;
                            else if (a !== 1) a = 1;
                        } else if (r !== -1) {
                            a = -1;
                        }
                    }
                    if (r === -1 || i === -1 || a === 0 || a === 1 && r === i - 1 && r === t + 1) {
                        return "";
                    }
                    return e.slice(r, i);
                },
                format: function format(e) {
                    if (e === null || typeof e !== "object") {
                        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                    }
                    return _format("/", e);
                },
                parse: function parse(e) {
                    assertPath(e);
                    var r = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (e.length === 0) return r;
                    var t = e.charCodeAt(0);
                    var i = t === 47;
                    var n;
                    if (i) {
                        r.root = "/";
                        n = 1;
                    } else {
                        n = 0;
                    }
                    var a = -1;
                    var f = 0;
                    var l = -1;
                    var s = true;
                    var o = e.length - 1;
                    var u = 0;
                    for(; o >= n; --o){
                        t = e.charCodeAt(o);
                        if (t === 47) {
                            if (!s) {
                                f = o + 1;
                                break;
                            }
                            continue;
                        }
                        if (l === -1) {
                            s = false;
                            l = o + 1;
                        }
                        if (t === 46) {
                            if (a === -1) a = o;
                            else if (u !== 1) u = 1;
                        } else if (a !== -1) {
                            u = -1;
                        }
                    }
                    if (a === -1 || l === -1 || u === 0 || u === 1 && a === l - 1 && a === f + 1) {
                        if (l !== -1) {
                            if (f === 0 && i) r.base = r.name = e.slice(1, l);
                            else r.base = r.name = e.slice(f, l);
                        }
                    } else {
                        if (f === 0 && i) {
                            r.name = e.slice(1, a);
                            r.base = e.slice(1, l);
                        } else {
                            r.name = e.slice(f, a);
                            r.base = e.slice(f, l);
                        }
                        r.ext = e.slice(a, l);
                    }
                    if (f > 0) r.dir = e.slice(0, f - 1);
                    else if (i) r.dir = "/";
                    return r;
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            r.posix = r;
            e.exports = r;
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var i = r[t];
        if (i !== undefined) {
            return i.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var a = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            a = false;
        } finally{
            if (a) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(114);
    module.exports = t;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
(function() {
    var r = {
        992: function(r) {
            r.exports = function(r, t, o) {
                if (r.filter) return r.filter(t, o);
                if (void 0 === r || null === r) throw new TypeError;
                if ("function" != typeof t) throw new TypeError;
                var n = [];
                for(var i = 0; i < r.length; i++){
                    if (!e.call(r, i)) continue;
                    var a = r[i];
                    if (t.call(o, a, i, r)) n.push(a);
                }
                return n;
            };
            var e = Object.prototype.hasOwnProperty;
        },
        256: function(r, e, t) {
            "use strict";
            var o = t(925);
            var n = t(139);
            var i = n(o("String.prototype.indexOf"));
            r.exports = function callBoundIntrinsic(r, e) {
                var t = o(r, !!e);
                if (typeof t === "function" && i(r, ".prototype.") > -1) {
                    return n(t);
                }
                return t;
            };
        },
        139: function(r, e, t) {
            "use strict";
            var o = t(174);
            var n = t(925);
            var i = n("%Function.prototype.apply%");
            var a = n("%Function.prototype.call%");
            var y = n("%Reflect.apply%", true) || o.call(a, i);
            var f = n("%Object.getOwnPropertyDescriptor%", true);
            var p = n("%Object.defineProperty%", true);
            var u = n("%Math.max%");
            if (p) {
                try {
                    p({}, "a", {
                        value: 1
                    });
                } catch (r) {
                    p = null;
                }
            }
            r.exports = function callBind(r) {
                var e = y(o, a, arguments);
                if (f && p) {
                    var t = f(e, "length");
                    if (t.configurable) {
                        p(e, "length", {
                            value: 1 + u(0, r.length - (arguments.length - 1))
                        });
                    }
                }
                return e;
            };
            var s = function applyBind() {
                return y(o, i, arguments);
            };
            if (p) {
                p(r.exports, "apply", {
                    value: s
                });
            } else {
                r.exports.apply = s;
            }
        },
        144: function(r) {
            var e = Object.prototype.hasOwnProperty;
            var t = Object.prototype.toString;
            r.exports = function forEach(r, o, n) {
                if (t.call(o) !== "[object Function]") {
                    throw new TypeError("iterator must be a function");
                }
                var i = r.length;
                if (i === +i) {
                    for(var a = 0; a < i; a++){
                        o.call(n, r[a], a, r);
                    }
                } else {
                    for(var y in r){
                        if (e.call(r, y)) {
                            o.call(n, r[y], y, r);
                        }
                    }
                }
            };
        },
        426: function(r) {
            "use strict";
            var e = "Function.prototype.bind called on incompatible ";
            var t = Array.prototype.slice;
            var o = Object.prototype.toString;
            var n = "[object Function]";
            r.exports = function bind(r) {
                var i = this;
                if (typeof i !== "function" || o.call(i) !== n) {
                    throw new TypeError(e + i);
                }
                var a = t.call(arguments, 1);
                var y;
                var binder = function() {
                    if (this instanceof y) {
                        var e = i.apply(this, a.concat(t.call(arguments)));
                        if (Object(e) === e) {
                            return e;
                        }
                        return this;
                    } else {
                        return i.apply(r, a.concat(t.call(arguments)));
                    }
                };
                var f = Math.max(0, i.length - a.length);
                var p = [];
                for(var u = 0; u < f; u++){
                    p.push("$" + u);
                }
                y = Function("binder", "return function (" + p.join(",") + "){ return binder.apply(this,arguments); }")(binder);
                if (i.prototype) {
                    var s = function Empty() {};
                    s.prototype = i.prototype;
                    y.prototype = new s;
                    s.prototype = null;
                }
                return y;
            };
        },
        174: function(r, e, t) {
            "use strict";
            var o = t(426);
            r.exports = Function.prototype.bind || o;
        },
        500: function(r, e, t) {
            "use strict";
            var o;
            var n = SyntaxError;
            var i = Function;
            var a = TypeError;
            var getEvalledConstructor = function(r) {
                try {
                    return i('"use strict"; return (' + r + ").constructor;")();
                } catch (r) {}
            };
            var y = Object.getOwnPropertyDescriptor;
            if (y) {
                try {
                    y({}, "");
                } catch (r) {
                    y = null;
                }
            }
            var throwTypeError = function() {
                throw new a;
            };
            var f = y ? function() {
                try {
                    arguments.callee;
                    return throwTypeError;
                } catch (r) {
                    try {
                        return y(arguments, "callee").get;
                    } catch (r) {
                        return throwTypeError;
                    }
                }
            }() : throwTypeError;
            var p = t(115)();
            var u = Object.getPrototypeOf || function(r) {
                return r.__proto__;
            };
            var s = {};
            var c = typeof Uint8Array === "undefined" ? o : u(Uint8Array);
            var l = {
                "%AggregateError%": typeof AggregateError === "undefined" ? o : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? o : ArrayBuffer,
                "%ArrayIteratorPrototype%": p ? u([][Symbol.iterator]()) : o,
                "%AsyncFromSyncIteratorPrototype%": o,
                "%AsyncFunction%": s,
                "%AsyncGenerator%": s,
                "%AsyncGeneratorFunction%": s,
                "%AsyncIteratorPrototype%": s,
                "%Atomics%": typeof Atomics === "undefined" ? o : Atomics,
                "%BigInt%": typeof BigInt === "undefined" ? o : BigInt,
                "%Boolean%": Boolean,
                "%DataView%": typeof DataView === "undefined" ? o : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%Float32Array%": typeof Float32Array === "undefined" ? o : Float32Array,
                "%Float64Array%": typeof Float64Array === "undefined" ? o : Float64Array,
                "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? o : FinalizationRegistry,
                "%Function%": i,
                "%GeneratorFunction%": s,
                "%Int8Array%": typeof Int8Array === "undefined" ? o : Int8Array,
                "%Int16Array%": typeof Int16Array === "undefined" ? o : Int16Array,
                "%Int32Array%": typeof Int32Array === "undefined" ? o : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": p ? u(u([][Symbol.iterator]())) : o,
                "%JSON%": typeof JSON === "object" ? JSON : o,
                "%Map%": typeof Map === "undefined" ? o : Map,
                "%MapIteratorPrototype%": typeof Map === "undefined" || !p ? o : u((new Map)[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": typeof Promise === "undefined" ? o : Promise,
                "%Proxy%": typeof Proxy === "undefined" ? o : Proxy,
                "%RangeError%": RangeError,
                "%ReferenceError%": ReferenceError,
                "%Reflect%": typeof Reflect === "undefined" ? o : Reflect,
                "%RegExp%": RegExp,
                "%Set%": typeof Set === "undefined" ? o : Set,
                "%SetIteratorPrototype%": typeof Set === "undefined" || !p ? o : u((new Set)[Symbol.iterator]()),
                "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? o : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": p ? u(""[Symbol.iterator]()) : o,
                "%Symbol%": p ? Symbol : o,
                "%SyntaxError%": n,
                "%ThrowTypeError%": f,
                "%TypedArray%": c,
                "%TypeError%": a,
                "%Uint8Array%": typeof Uint8Array === "undefined" ? o : Uint8Array,
                "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? o : Uint8ClampedArray,
                "%Uint16Array%": typeof Uint16Array === "undefined" ? o : Uint16Array,
                "%Uint32Array%": typeof Uint32Array === "undefined" ? o : Uint32Array,
                "%URIError%": URIError,
                "%WeakMap%": typeof WeakMap === "undefined" ? o : WeakMap,
                "%WeakRef%": typeof WeakRef === "undefined" ? o : WeakRef,
                "%WeakSet%": typeof WeakSet === "undefined" ? o : WeakSet
            };
            var d = function doEval(r) {
                var e;
                if (r === "%AsyncFunction%") {
                    e = getEvalledConstructor("async function () {}");
                } else if (r === "%GeneratorFunction%") {
                    e = getEvalledConstructor("function* () {}");
                } else if (r === "%AsyncGeneratorFunction%") {
                    e = getEvalledConstructor("async function* () {}");
                } else if (r === "%AsyncGenerator%") {
                    var t = doEval("%AsyncGeneratorFunction%");
                    if (t) {
                        e = t.prototype;
                    }
                } else if (r === "%AsyncIteratorPrototype%") {
                    var o = doEval("%AsyncGenerator%");
                    if (o) {
                        e = u(o.prototype);
                    }
                }
                l[r] = e;
                return e;
            };
            var g = {
                "%ArrayBufferPrototype%": [
                    "ArrayBuffer",
                    "prototype"
                ],
                "%ArrayPrototype%": [
                    "Array",
                    "prototype"
                ],
                "%ArrayProto_entries%": [
                    "Array",
                    "prototype",
                    "entries"
                ],
                "%ArrayProto_forEach%": [
                    "Array",
                    "prototype",
                    "forEach"
                ],
                "%ArrayProto_keys%": [
                    "Array",
                    "prototype",
                    "keys"
                ],
                "%ArrayProto_values%": [
                    "Array",
                    "prototype",
                    "values"
                ],
                "%AsyncFunctionPrototype%": [
                    "AsyncFunction",
                    "prototype"
                ],
                "%AsyncGenerator%": [
                    "AsyncGeneratorFunction",
                    "prototype"
                ],
                "%AsyncGeneratorPrototype%": [
                    "AsyncGeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%BooleanPrototype%": [
                    "Boolean",
                    "prototype"
                ],
                "%DataViewPrototype%": [
                    "DataView",
                    "prototype"
                ],
                "%DatePrototype%": [
                    "Date",
                    "prototype"
                ],
                "%ErrorPrototype%": [
                    "Error",
                    "prototype"
                ],
                "%EvalErrorPrototype%": [
                    "EvalError",
                    "prototype"
                ],
                "%Float32ArrayPrototype%": [
                    "Float32Array",
                    "prototype"
                ],
                "%Float64ArrayPrototype%": [
                    "Float64Array",
                    "prototype"
                ],
                "%FunctionPrototype%": [
                    "Function",
                    "prototype"
                ],
                "%Generator%": [
                    "GeneratorFunction",
                    "prototype"
                ],
                "%GeneratorPrototype%": [
                    "GeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%Int8ArrayPrototype%": [
                    "Int8Array",
                    "prototype"
                ],
                "%Int16ArrayPrototype%": [
                    "Int16Array",
                    "prototype"
                ],
                "%Int32ArrayPrototype%": [
                    "Int32Array",
                    "prototype"
                ],
                "%JSONParse%": [
                    "JSON",
                    "parse"
                ],
                "%JSONStringify%": [
                    "JSON",
                    "stringify"
                ],
                "%MapPrototype%": [
                    "Map",
                    "prototype"
                ],
                "%NumberPrototype%": [
                    "Number",
                    "prototype"
                ],
                "%ObjectPrototype%": [
                    "Object",
                    "prototype"
                ],
                "%ObjProto_toString%": [
                    "Object",
                    "prototype",
                    "toString"
                ],
                "%ObjProto_valueOf%": [
                    "Object",
                    "prototype",
                    "valueOf"
                ],
                "%PromisePrototype%": [
                    "Promise",
                    "prototype"
                ],
                "%PromiseProto_then%": [
                    "Promise",
                    "prototype",
                    "then"
                ],
                "%Promise_all%": [
                    "Promise",
                    "all"
                ],
                "%Promise_reject%": [
                    "Promise",
                    "reject"
                ],
                "%Promise_resolve%": [
                    "Promise",
                    "resolve"
                ],
                "%RangeErrorPrototype%": [
                    "RangeError",
                    "prototype"
                ],
                "%ReferenceErrorPrototype%": [
                    "ReferenceError",
                    "prototype"
                ],
                "%RegExpPrototype%": [
                    "RegExp",
                    "prototype"
                ],
                "%SetPrototype%": [
                    "Set",
                    "prototype"
                ],
                "%SharedArrayBufferPrototype%": [
                    "SharedArrayBuffer",
                    "prototype"
                ],
                "%StringPrototype%": [
                    "String",
                    "prototype"
                ],
                "%SymbolPrototype%": [
                    "Symbol",
                    "prototype"
                ],
                "%SyntaxErrorPrototype%": [
                    "SyntaxError",
                    "prototype"
                ],
                "%TypedArrayPrototype%": [
                    "TypedArray",
                    "prototype"
                ],
                "%TypeErrorPrototype%": [
                    "TypeError",
                    "prototype"
                ],
                "%Uint8ArrayPrototype%": [
                    "Uint8Array",
                    "prototype"
                ],
                "%Uint8ClampedArrayPrototype%": [
                    "Uint8ClampedArray",
                    "prototype"
                ],
                "%Uint16ArrayPrototype%": [
                    "Uint16Array",
                    "prototype"
                ],
                "%Uint32ArrayPrototype%": [
                    "Uint32Array",
                    "prototype"
                ],
                "%URIErrorPrototype%": [
                    "URIError",
                    "prototype"
                ],
                "%WeakMapPrototype%": [
                    "WeakMap",
                    "prototype"
                ],
                "%WeakSetPrototype%": [
                    "WeakSet",
                    "prototype"
                ]
            };
            var v = t(174);
            var b = t(101);
            var A = v.call(Function.call, Array.prototype.concat);
            var m = v.call(Function.apply, Array.prototype.splice);
            var S = v.call(Function.call, String.prototype.replace);
            var h = v.call(Function.call, String.prototype.slice);
            var P = v.call(Function.call, RegExp.prototype.exec);
            var O = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var w = /\\(\\)?/g;
            var j = function stringToPath(r) {
                var e = h(r, 0, 1);
                var t = h(r, -1);
                if (e === "%" && t !== "%") {
                    throw new n("invalid intrinsic syntax, expected closing `%`");
                } else if (t === "%" && e !== "%") {
                    throw new n("invalid intrinsic syntax, expected opening `%`");
                }
                var o = [];
                S(r, O, function(r, e, t, n) {
                    o[o.length] = t ? S(n, w, "$1") : e || r;
                });
                return o;
            };
            var E = function getBaseIntrinsic(r, e) {
                var t = r;
                var o;
                if (b(g, t)) {
                    o = g[t];
                    t = "%" + o[0] + "%";
                }
                if (b(l, t)) {
                    var i = l[t];
                    if (i === s) {
                        i = d(t);
                    }
                    if (typeof i === "undefined" && !e) {
                        throw new a("intrinsic " + r + " exists, but is not available. Please file an issue!");
                    }
                    return {
                        alias: o,
                        name: t,
                        value: i
                    };
                }
                throw new n("intrinsic " + r + " does not exist!");
            };
            r.exports = function GetIntrinsic(r, e) {
                if (typeof r !== "string" || r.length === 0) {
                    throw new a("intrinsic name must be a non-empty string");
                }
                if (arguments.length > 1 && typeof e !== "boolean") {
                    throw new a('"allowMissing" argument must be a boolean');
                }
                if (P(/^%?[^%]*%?$/g, r) === null) {
                    throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                }
                var t = j(r);
                var i = t.length > 0 ? t[0] : "";
                var f = E("%" + i + "%", e);
                var p = f.name;
                var u = f.value;
                var s = false;
                var c = f.alias;
                if (c) {
                    i = c[0];
                    m(t, A([
                        0,
                        1
                    ], c));
                }
                for(var d = 1, g = true; d < t.length; d += 1){
                    var v = t[d];
                    var S = h(v, 0, 1);
                    var O = h(v, -1);
                    if ((S === '"' || S === "'" || S === "`" || O === '"' || O === "'" || O === "`") && S !== O) {
                        throw new n("property names with quotes must have matching quotes");
                    }
                    if (v === "constructor" || !g) {
                        s = true;
                    }
                    i += "." + v;
                    p = "%" + i + "%";
                    if (b(l, p)) {
                        u = l[p];
                    } else if (u != null) {
                        if (!(v in u)) {
                            if (!e) {
                                throw new a("base intrinsic for " + r + " exists, but the property is not available.");
                            }
                            return void o;
                        }
                        if (y && d + 1 >= t.length) {
                            var w = y(u, v);
                            g = !!w;
                            if (g && "get" in w && !("originalValue" in w.get)) {
                                u = w.get;
                            } else {
                                u = u[v];
                            }
                        } else {
                            g = b(u, v);
                            u = u[v];
                        }
                        if (g && !s) {
                            l[p] = u;
                        }
                    }
                }
                return u;
            };
        },
        925: function(r, e, t) {
            "use strict";
            var o;
            var n = SyntaxError;
            var i = Function;
            var a = TypeError;
            var getEvalledConstructor = function(r) {
                try {
                    return i('"use strict"; return (' + r + ").constructor;")();
                } catch (r) {}
            };
            var y = Object.getOwnPropertyDescriptor;
            if (y) {
                try {
                    y({}, "");
                } catch (r) {
                    y = null;
                }
            }
            var throwTypeError = function() {
                throw new a;
            };
            var f = y ? function() {
                try {
                    arguments.callee;
                    return throwTypeError;
                } catch (r) {
                    try {
                        return y(arguments, "callee").get;
                    } catch (r) {
                        return throwTypeError;
                    }
                }
            }() : throwTypeError;
            var p = t(115)();
            var u = t(504)();
            var s = Object.getPrototypeOf || (u ? function(r) {
                return r.__proto__;
            } : null);
            var c = {};
            var l = typeof Uint8Array === "undefined" || !s ? o : s(Uint8Array);
            var d = {
                "%AggregateError%": typeof AggregateError === "undefined" ? o : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? o : ArrayBuffer,
                "%ArrayIteratorPrototype%": p && s ? s([][Symbol.iterator]()) : o,
                "%AsyncFromSyncIteratorPrototype%": o,
                "%AsyncFunction%": c,
                "%AsyncGenerator%": c,
                "%AsyncGeneratorFunction%": c,
                "%AsyncIteratorPrototype%": c,
                "%Atomics%": typeof Atomics === "undefined" ? o : Atomics,
                "%BigInt%": typeof BigInt === "undefined" ? o : BigInt,
                "%BigInt64Array%": typeof BigInt64Array === "undefined" ? o : BigInt64Array,
                "%BigUint64Array%": typeof BigUint64Array === "undefined" ? o : BigUint64Array,
                "%Boolean%": Boolean,
                "%DataView%": typeof DataView === "undefined" ? o : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%Float32Array%": typeof Float32Array === "undefined" ? o : Float32Array,
                "%Float64Array%": typeof Float64Array === "undefined" ? o : Float64Array,
                "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? o : FinalizationRegistry,
                "%Function%": i,
                "%GeneratorFunction%": c,
                "%Int8Array%": typeof Int8Array === "undefined" ? o : Int8Array,
                "%Int16Array%": typeof Int16Array === "undefined" ? o : Int16Array,
                "%Int32Array%": typeof Int32Array === "undefined" ? o : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": p && s ? s(s([][Symbol.iterator]())) : o,
                "%JSON%": typeof JSON === "object" ? JSON : o,
                "%Map%": typeof Map === "undefined" ? o : Map,
                "%MapIteratorPrototype%": typeof Map === "undefined" || !p || !s ? o : s((new Map)[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": typeof Promise === "undefined" ? o : Promise,
                "%Proxy%": typeof Proxy === "undefined" ? o : Proxy,
                "%RangeError%": RangeError,
                "%ReferenceError%": ReferenceError,
                "%Reflect%": typeof Reflect === "undefined" ? o : Reflect,
                "%RegExp%": RegExp,
                "%Set%": typeof Set === "undefined" ? o : Set,
                "%SetIteratorPrototype%": typeof Set === "undefined" || !p || !s ? o : s((new Set)[Symbol.iterator]()),
                "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? o : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": p && s ? s(""[Symbol.iterator]()) : o,
                "%Symbol%": p ? Symbol : o,
                "%SyntaxError%": n,
                "%ThrowTypeError%": f,
                "%TypedArray%": l,
                "%TypeError%": a,
                "%Uint8Array%": typeof Uint8Array === "undefined" ? o : Uint8Array,
                "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? o : Uint8ClampedArray,
                "%Uint16Array%": typeof Uint16Array === "undefined" ? o : Uint16Array,
                "%Uint32Array%": typeof Uint32Array === "undefined" ? o : Uint32Array,
                "%URIError%": URIError,
                "%WeakMap%": typeof WeakMap === "undefined" ? o : WeakMap,
                "%WeakRef%": typeof WeakRef === "undefined" ? o : WeakRef,
                "%WeakSet%": typeof WeakSet === "undefined" ? o : WeakSet
            };
            if (s) {
                try {
                    null.error;
                } catch (r) {
                    var g = s(s(r));
                    d["%Error.prototype%"] = g;
                }
            }
            var v = function doEval(r) {
                var e;
                if (r === "%AsyncFunction%") {
                    e = getEvalledConstructor("async function () {}");
                } else if (r === "%GeneratorFunction%") {
                    e = getEvalledConstructor("function* () {}");
                } else if (r === "%AsyncGeneratorFunction%") {
                    e = getEvalledConstructor("async function* () {}");
                } else if (r === "%AsyncGenerator%") {
                    var t = doEval("%AsyncGeneratorFunction%");
                    if (t) {
                        e = t.prototype;
                    }
                } else if (r === "%AsyncIteratorPrototype%") {
                    var o = doEval("%AsyncGenerator%");
                    if (o && s) {
                        e = s(o.prototype);
                    }
                }
                d[r] = e;
                return e;
            };
            var b = {
                "%ArrayBufferPrototype%": [
                    "ArrayBuffer",
                    "prototype"
                ],
                "%ArrayPrototype%": [
                    "Array",
                    "prototype"
                ],
                "%ArrayProto_entries%": [
                    "Array",
                    "prototype",
                    "entries"
                ],
                "%ArrayProto_forEach%": [
                    "Array",
                    "prototype",
                    "forEach"
                ],
                "%ArrayProto_keys%": [
                    "Array",
                    "prototype",
                    "keys"
                ],
                "%ArrayProto_values%": [
                    "Array",
                    "prototype",
                    "values"
                ],
                "%AsyncFunctionPrototype%": [
                    "AsyncFunction",
                    "prototype"
                ],
                "%AsyncGenerator%": [
                    "AsyncGeneratorFunction",
                    "prototype"
                ],
                "%AsyncGeneratorPrototype%": [
                    "AsyncGeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%BooleanPrototype%": [
                    "Boolean",
                    "prototype"
                ],
                "%DataViewPrototype%": [
                    "DataView",
                    "prototype"
                ],
                "%DatePrototype%": [
                    "Date",
                    "prototype"
                ],
                "%ErrorPrototype%": [
                    "Error",
                    "prototype"
                ],
                "%EvalErrorPrototype%": [
                    "EvalError",
                    "prototype"
                ],
                "%Float32ArrayPrototype%": [
                    "Float32Array",
                    "prototype"
                ],
                "%Float64ArrayPrototype%": [
                    "Float64Array",
                    "prototype"
                ],
                "%FunctionPrototype%": [
                    "Function",
                    "prototype"
                ],
                "%Generator%": [
                    "GeneratorFunction",
                    "prototype"
                ],
                "%GeneratorPrototype%": [
                    "GeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%Int8ArrayPrototype%": [
                    "Int8Array",
                    "prototype"
                ],
                "%Int16ArrayPrototype%": [
                    "Int16Array",
                    "prototype"
                ],
                "%Int32ArrayPrototype%": [
                    "Int32Array",
                    "prototype"
                ],
                "%JSONParse%": [
                    "JSON",
                    "parse"
                ],
                "%JSONStringify%": [
                    "JSON",
                    "stringify"
                ],
                "%MapPrototype%": [
                    "Map",
                    "prototype"
                ],
                "%NumberPrototype%": [
                    "Number",
                    "prototype"
                ],
                "%ObjectPrototype%": [
                    "Object",
                    "prototype"
                ],
                "%ObjProto_toString%": [
                    "Object",
                    "prototype",
                    "toString"
                ],
                "%ObjProto_valueOf%": [
                    "Object",
                    "prototype",
                    "valueOf"
                ],
                "%PromisePrototype%": [
                    "Promise",
                    "prototype"
                ],
                "%PromiseProto_then%": [
                    "Promise",
                    "prototype",
                    "then"
                ],
                "%Promise_all%": [
                    "Promise",
                    "all"
                ],
                "%Promise_reject%": [
                    "Promise",
                    "reject"
                ],
                "%Promise_resolve%": [
                    "Promise",
                    "resolve"
                ],
                "%RangeErrorPrototype%": [
                    "RangeError",
                    "prototype"
                ],
                "%ReferenceErrorPrototype%": [
                    "ReferenceError",
                    "prototype"
                ],
                "%RegExpPrototype%": [
                    "RegExp",
                    "prototype"
                ],
                "%SetPrototype%": [
                    "Set",
                    "prototype"
                ],
                "%SharedArrayBufferPrototype%": [
                    "SharedArrayBuffer",
                    "prototype"
                ],
                "%StringPrototype%": [
                    "String",
                    "prototype"
                ],
                "%SymbolPrototype%": [
                    "Symbol",
                    "prototype"
                ],
                "%SyntaxErrorPrototype%": [
                    "SyntaxError",
                    "prototype"
                ],
                "%TypedArrayPrototype%": [
                    "TypedArray",
                    "prototype"
                ],
                "%TypeErrorPrototype%": [
                    "TypeError",
                    "prototype"
                ],
                "%Uint8ArrayPrototype%": [
                    "Uint8Array",
                    "prototype"
                ],
                "%Uint8ClampedArrayPrototype%": [
                    "Uint8ClampedArray",
                    "prototype"
                ],
                "%Uint16ArrayPrototype%": [
                    "Uint16Array",
                    "prototype"
                ],
                "%Uint32ArrayPrototype%": [
                    "Uint32Array",
                    "prototype"
                ],
                "%URIErrorPrototype%": [
                    "URIError",
                    "prototype"
                ],
                "%WeakMapPrototype%": [
                    "WeakMap",
                    "prototype"
                ],
                "%WeakSetPrototype%": [
                    "WeakSet",
                    "prototype"
                ]
            };
            var A = t(174);
            var m = t(101);
            var S = A.call(Function.call, Array.prototype.concat);
            var h = A.call(Function.apply, Array.prototype.splice);
            var P = A.call(Function.call, String.prototype.replace);
            var O = A.call(Function.call, String.prototype.slice);
            var w = A.call(Function.call, RegExp.prototype.exec);
            var j = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var E = /\\(\\)?/g;
            var I = function stringToPath(r) {
                var e = O(r, 0, 1);
                var t = O(r, -1);
                if (e === "%" && t !== "%") {
                    throw new n("invalid intrinsic syntax, expected closing `%`");
                } else if (t === "%" && e !== "%") {
                    throw new n("invalid intrinsic syntax, expected opening `%`");
                }
                var o = [];
                P(r, j, function(r, e, t, n) {
                    o[o.length] = t ? P(n, E, "$1") : e || r;
                });
                return o;
            };
            var B = function getBaseIntrinsic(r, e) {
                var t = r;
                var o;
                if (m(b, t)) {
                    o = b[t];
                    t = "%" + o[0] + "%";
                }
                if (m(d, t)) {
                    var i = d[t];
                    if (i === c) {
                        i = v(t);
                    }
                    if (typeof i === "undefined" && !e) {
                        throw new a("intrinsic " + r + " exists, but is not available. Please file an issue!");
                    }
                    return {
                        alias: o,
                        name: t,
                        value: i
                    };
                }
                throw new n("intrinsic " + r + " does not exist!");
            };
            r.exports = function GetIntrinsic(r, e) {
                if (typeof r !== "string" || r.length === 0) {
                    throw new a("intrinsic name must be a non-empty string");
                }
                if (arguments.length > 1 && typeof e !== "boolean") {
                    throw new a('"allowMissing" argument must be a boolean');
                }
                if (w(/^%?[^%]*%?$/, r) === null) {
                    throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                }
                var t = I(r);
                var i = t.length > 0 ? t[0] : "";
                var f = B("%" + i + "%", e);
                var p = f.name;
                var u = f.value;
                var s = false;
                var c = f.alias;
                if (c) {
                    i = c[0];
                    h(t, S([
                        0,
                        1
                    ], c));
                }
                for(var l = 1, g = true; l < t.length; l += 1){
                    var v = t[l];
                    var b = O(v, 0, 1);
                    var A = O(v, -1);
                    if ((b === '"' || b === "'" || b === "`" || A === '"' || A === "'" || A === "`") && b !== A) {
                        throw new n("property names with quotes must have matching quotes");
                    }
                    if (v === "constructor" || !g) {
                        s = true;
                    }
                    i += "." + v;
                    p = "%" + i + "%";
                    if (m(d, p)) {
                        u = d[p];
                    } else if (u != null) {
                        if (!(v in u)) {
                            if (!e) {
                                throw new a("base intrinsic for " + r + " exists, but the property is not available.");
                            }
                            return void o;
                        }
                        if (y && l + 1 >= t.length) {
                            var P = y(u, v);
                            g = !!P;
                            if (g && "get" in P && !("originalValue" in P.get)) {
                                u = P.get;
                            } else {
                                u = u[v];
                            }
                        } else {
                            g = m(u, v);
                            u = u[v];
                        }
                        if (g && !s) {
                            d[p] = u;
                        }
                    }
                }
                return u;
            };
        },
        504: function(r) {
            "use strict";
            var e = {
                foo: {}
            };
            var t = Object;
            r.exports = function hasProto() {
                return ({
                    __proto__: e
                }).foo === e.foo && !(({
                    __proto__: null
                }) instanceof t);
            };
        },
        942: function(r, e, t) {
            "use strict";
            var o = typeof Symbol !== "undefined" && Symbol;
            var n = t(773);
            r.exports = function hasNativeSymbols() {
                if (typeof o !== "function") {
                    return false;
                }
                if (typeof Symbol !== "function") {
                    return false;
                }
                if (typeof o("foo") !== "symbol") {
                    return false;
                }
                if (typeof Symbol("bar") !== "symbol") {
                    return false;
                }
                return n();
            };
        },
        773: function(r) {
            "use strict";
            r.exports = function hasSymbols() {
                if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
                    return false;
                }
                if (typeof Symbol.iterator === "symbol") {
                    return true;
                }
                var r = {};
                var e = Symbol("test");
                var t = Object(e);
                if (typeof e === "string") {
                    return false;
                }
                if (Object.prototype.toString.call(e) !== "[object Symbol]") {
                    return false;
                }
                if (Object.prototype.toString.call(t) !== "[object Symbol]") {
                    return false;
                }
                var o = 42;
                r[e] = o;
                for(e in r){
                    return false;
                }
                if (typeof Object.keys === "function" && Object.keys(r).length !== 0) {
                    return false;
                }
                if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(r).length !== 0) {
                    return false;
                }
                var n = Object.getOwnPropertySymbols(r);
                if (n.length !== 1 || n[0] !== e) {
                    return false;
                }
                if (!Object.prototype.propertyIsEnumerable.call(r, e)) {
                    return false;
                }
                if (typeof Object.getOwnPropertyDescriptor === "function") {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    if (i.value !== o || i.enumerable !== true) {
                        return false;
                    }
                }
                return true;
            };
        },
        115: function(r, e, t) {
            "use strict";
            var o = typeof Symbol !== "undefined" && Symbol;
            var n = t(832);
            r.exports = function hasNativeSymbols() {
                if (typeof o !== "function") {
                    return false;
                }
                if (typeof Symbol !== "function") {
                    return false;
                }
                if (typeof o("foo") !== "symbol") {
                    return false;
                }
                if (typeof Symbol("bar") !== "symbol") {
                    return false;
                }
                return n();
            };
        },
        832: function(r) {
            "use strict";
            r.exports = function hasSymbols() {
                if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
                    return false;
                }
                if (typeof Symbol.iterator === "symbol") {
                    return true;
                }
                var r = {};
                var e = Symbol("test");
                var t = Object(e);
                if (typeof e === "string") {
                    return false;
                }
                if (Object.prototype.toString.call(e) !== "[object Symbol]") {
                    return false;
                }
                if (Object.prototype.toString.call(t) !== "[object Symbol]") {
                    return false;
                }
                var o = 42;
                r[e] = o;
                for(e in r){
                    return false;
                }
                if (typeof Object.keys === "function" && Object.keys(r).length !== 0) {
                    return false;
                }
                if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(r).length !== 0) {
                    return false;
                }
                var n = Object.getOwnPropertySymbols(r);
                if (n.length !== 1 || n[0] !== e) {
                    return false;
                }
                if (!Object.prototype.propertyIsEnumerable.call(r, e)) {
                    return false;
                }
                if (typeof Object.getOwnPropertyDescriptor === "function") {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    if (i.value !== o || i.enumerable !== true) {
                        return false;
                    }
                }
                return true;
            };
        },
        101: function(r, e, t) {
            "use strict";
            var o = t(174);
            r.exports = o.call(Function.call, Object.prototype.hasOwnProperty);
        },
        782: function(r) {
            if (typeof Object.create === "function") {
                r.exports = function inherits(r, e) {
                    if (e) {
                        r.super_ = e;
                        r.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: r,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        });
                    }
                };
            } else {
                r.exports = function inherits(r, e) {
                    if (e) {
                        r.super_ = e;
                        var TempCtor = function() {};
                        TempCtor.prototype = e.prototype;
                        r.prototype = new TempCtor;
                        r.prototype.constructor = r;
                    }
                };
            }
        },
        157: function(r) {
            "use strict";
            var e = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
            var t = Object.prototype.toString;
            var o = function isArguments(r) {
                if (e && r && typeof r === "object" && Symbol.toStringTag in r) {
                    return false;
                }
                return t.call(r) === "[object Arguments]";
            };
            var n = function isArguments(r) {
                if (o(r)) {
                    return true;
                }
                return r !== null && typeof r === "object" && typeof r.length === "number" && r.length >= 0 && t.call(r) !== "[object Array]" && t.call(r.callee) === "[object Function]";
            };
            var i = function() {
                return o(arguments);
            }();
            o.isLegacyArguments = n;
            r.exports = i ? o : n;
        },
        391: function(r) {
            "use strict";
            var e = Object.prototype.toString;
            var t = Function.prototype.toString;
            var o = /^\s*(?:function)?\*/;
            var n = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
            var i = Object.getPrototypeOf;
            var getGeneratorFunc = function() {
                if (!n) {
                    return false;
                }
                try {
                    return Function("return function*() {}")();
                } catch (r) {}
            };
            var a = getGeneratorFunc();
            var y = a ? i(a) : {};
            r.exports = function isGeneratorFunction(r) {
                if (typeof r !== "function") {
                    return false;
                }
                if (o.test(t.call(r))) {
                    return true;
                }
                if (!n) {
                    var a = e.call(r);
                    return a === "[object GeneratorFunction]";
                }
                return i(r) === y;
            };
        },
        994: function(r, e, t) {
            "use strict";
            var o = t(144);
            var n = t(349);
            var i = t(256);
            var a = i("Object.prototype.toString");
            var y = t(942)();
            var f = y && typeof Symbol.toStringTag === "symbol";
            var p = n();
            var u = i("Array.prototype.indexOf", true) || function indexOf(r, e) {
                for(var t = 0; t < r.length; t += 1){
                    if (r[t] === e) {
                        return t;
                    }
                }
                return -1;
            };
            var s = i("String.prototype.slice");
            var c = {};
            var l = t(24);
            var d = Object.getPrototypeOf;
            if (f && l && d) {
                o(p, function(r) {
                    var e = new global[r];
                    if (!(Symbol.toStringTag in e)) {
                        throw new EvalError("this engine has support for Symbol.toStringTag, but " + r + " does not have the property! Please report this.");
                    }
                    var t = d(e);
                    var o = l(t, Symbol.toStringTag);
                    if (!o) {
                        var n = d(t);
                        o = l(n, Symbol.toStringTag);
                    }
                    c[r] = o.get;
                });
            }
            var g = function tryAllTypedArrays(r) {
                var e = false;
                o(c, function(t, o) {
                    if (!e) {
                        try {
                            e = t.call(r) === o;
                        } catch (r) {}
                    }
                });
                return e;
            };
            r.exports = function isTypedArray(r) {
                if (!r || typeof r !== "object") {
                    return false;
                }
                if (!f) {
                    var e = s(a(r), 8, -1);
                    return u(p, e) > -1;
                }
                if (!l) {
                    return false;
                }
                return g(r);
            };
        },
        369: function(r) {
            r.exports = function isBuffer(r) {
                return r instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"];
            };
        },
        584: function(r, e, t) {
            "use strict";
            var o = t(157);
            var n = t(391);
            var i = t(490);
            var a = t(994);
            function uncurryThis(r) {
                return r.call.bind(r);
            }
            var y = typeof BigInt !== "undefined";
            var f = typeof Symbol !== "undefined";
            var p = uncurryThis(Object.prototype.toString);
            var u = uncurryThis(Number.prototype.valueOf);
            var s = uncurryThis(String.prototype.valueOf);
            var c = uncurryThis(Boolean.prototype.valueOf);
            if (y) {
                var l = uncurryThis(BigInt.prototype.valueOf);
            }
            if (f) {
                var d = uncurryThis(Symbol.prototype.valueOf);
            }
            function checkBoxedPrimitive(r, e) {
                if (typeof r !== "object") {
                    return false;
                }
                try {
                    e(r);
                    return true;
                } catch (r) {
                    return false;
                }
            }
            e.isArgumentsObject = o;
            e.isGeneratorFunction = n;
            e.isTypedArray = a;
            function isPromise(r) {
                return typeof Promise !== "undefined" && r instanceof Promise || r !== null && typeof r === "object" && typeof r.then === "function" && typeof r.catch === "function";
            }
            e.isPromise = isPromise;
            function isArrayBufferView(r) {
                if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
                    return ArrayBuffer.isView(r);
                }
                return a(r) || isDataView(r);
            }
            e.isArrayBufferView = isArrayBufferView;
            function isUint8Array(r) {
                return i(r) === "Uint8Array";
            }
            e.isUint8Array = isUint8Array;
            function isUint8ClampedArray(r) {
                return i(r) === "Uint8ClampedArray";
            }
            e.isUint8ClampedArray = isUint8ClampedArray;
            function isUint16Array(r) {
                return i(r) === "Uint16Array";
            }
            e.isUint16Array = isUint16Array;
            function isUint32Array(r) {
                return i(r) === "Uint32Array";
            }
            e.isUint32Array = isUint32Array;
            function isInt8Array(r) {
                return i(r) === "Int8Array";
            }
            e.isInt8Array = isInt8Array;
            function isInt16Array(r) {
                return i(r) === "Int16Array";
            }
            e.isInt16Array = isInt16Array;
            function isInt32Array(r) {
                return i(r) === "Int32Array";
            }
            e.isInt32Array = isInt32Array;
            function isFloat32Array(r) {
                return i(r) === "Float32Array";
            }
            e.isFloat32Array = isFloat32Array;
            function isFloat64Array(r) {
                return i(r) === "Float64Array";
            }
            e.isFloat64Array = isFloat64Array;
            function isBigInt64Array(r) {
                return i(r) === "BigInt64Array";
            }
            e.isBigInt64Array = isBigInt64Array;
            function isBigUint64Array(r) {
                return i(r) === "BigUint64Array";
            }
            e.isBigUint64Array = isBigUint64Array;
            function isMapToString(r) {
                return p(r) === "[object Map]";
            }
            isMapToString.working = typeof Map !== "undefined" && isMapToString(new Map);
            function isMap(r) {
                if (typeof Map === "undefined") {
                    return false;
                }
                return isMapToString.working ? isMapToString(r) : r instanceof Map;
            }
            e.isMap = isMap;
            function isSetToString(r) {
                return p(r) === "[object Set]";
            }
            isSetToString.working = typeof Set !== "undefined" && isSetToString(new Set);
            function isSet(r) {
                if (typeof Set === "undefined") {
                    return false;
                }
                return isSetToString.working ? isSetToString(r) : r instanceof Set;
            }
            e.isSet = isSet;
            function isWeakMapToString(r) {
                return p(r) === "[object WeakMap]";
            }
            isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(new WeakMap);
            function isWeakMap(r) {
                if (typeof WeakMap === "undefined") {
                    return false;
                }
                return isWeakMapToString.working ? isWeakMapToString(r) : r instanceof WeakMap;
            }
            e.isWeakMap = isWeakMap;
            function isWeakSetToString(r) {
                return p(r) === "[object WeakSet]";
            }
            isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(new WeakSet);
            function isWeakSet(r) {
                return isWeakSetToString(r);
            }
            e.isWeakSet = isWeakSet;
            function isArrayBufferToString(r) {
                return p(r) === "[object ArrayBuffer]";
            }
            isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer);
            function isArrayBuffer(r) {
                if (typeof ArrayBuffer === "undefined") {
                    return false;
                }
                return isArrayBufferToString.working ? isArrayBufferToString(r) : r instanceof ArrayBuffer;
            }
            e.isArrayBuffer = isArrayBuffer;
            function isDataViewToString(r) {
                return p(r) === "[object DataView]";
            }
            isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
            function isDataView(r) {
                if (typeof DataView === "undefined") {
                    return false;
                }
                return isDataViewToString.working ? isDataViewToString(r) : r instanceof DataView;
            }
            e.isDataView = isDataView;
            var g = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
            function isSharedArrayBufferToString(r) {
                return p(r) === "[object SharedArrayBuffer]";
            }
            function isSharedArrayBuffer(r) {
                if (typeof g === "undefined") {
                    return false;
                }
                if (typeof isSharedArrayBufferToString.working === "undefined") {
                    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new g);
                }
                return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(r) : r instanceof g;
            }
            e.isSharedArrayBuffer = isSharedArrayBuffer;
            function isAsyncFunction(r) {
                return p(r) === "[object AsyncFunction]";
            }
            e.isAsyncFunction = isAsyncFunction;
            function isMapIterator(r) {
                return p(r) === "[object Map Iterator]";
            }
            e.isMapIterator = isMapIterator;
            function isSetIterator(r) {
                return p(r) === "[object Set Iterator]";
            }
            e.isSetIterator = isSetIterator;
            function isGeneratorObject(r) {
                return p(r) === "[object Generator]";
            }
            e.isGeneratorObject = isGeneratorObject;
            function isWebAssemblyCompiledModule(r) {
                return p(r) === "[object WebAssembly.Module]";
            }
            e.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
            function isNumberObject(r) {
                return checkBoxedPrimitive(r, u);
            }
            e.isNumberObject = isNumberObject;
            function isStringObject(r) {
                return checkBoxedPrimitive(r, s);
            }
            e.isStringObject = isStringObject;
            function isBooleanObject(r) {
                return checkBoxedPrimitive(r, c);
            }
            e.isBooleanObject = isBooleanObject;
            function isBigIntObject(r) {
                return y && checkBoxedPrimitive(r, l);
            }
            e.isBigIntObject = isBigIntObject;
            function isSymbolObject(r) {
                return f && checkBoxedPrimitive(r, d);
            }
            e.isSymbolObject = isSymbolObject;
            function isBoxedPrimitive(r) {
                return isNumberObject(r) || isStringObject(r) || isBooleanObject(r) || isBigIntObject(r) || isSymbolObject(r);
            }
            e.isBoxedPrimitive = isBoxedPrimitive;
            function isAnyArrayBuffer(r) {
                return typeof Uint8Array !== "undefined" && (isArrayBuffer(r) || isSharedArrayBuffer(r));
            }
            e.isAnyArrayBuffer = isAnyArrayBuffer;
            [
                "isProxy",
                "isExternal",
                "isModuleNamespaceObject"
            ].forEach(function(r) {
                Object.defineProperty(e, r, {
                    enumerable: false,
                    value: function() {
                        throw new Error(r + " is not supported in userland");
                    }
                });
            });
        },
        177: function(r, e, t) {
            var o = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(r) {
                var e = Object.keys(r);
                var t = {};
                for(var o = 0; o < e.length; o++){
                    t[e[o]] = Object.getOwnPropertyDescriptor(r, e[o]);
                }
                return t;
            };
            var n = /%[sdj%]/g;
            e.format = function(r) {
                if (!isString(r)) {
                    var e = [];
                    for(var t = 0; t < arguments.length; t++){
                        e.push(inspect(arguments[t]));
                    }
                    return e.join(" ");
                }
                var t = 1;
                var o = arguments;
                var i = o.length;
                var a = String(r).replace(n, function(r) {
                    if (r === "%%") return "%";
                    if (t >= i) return r;
                    switch(r){
                        case "%s":
                            return String(o[t++]);
                        case "%d":
                            return Number(o[t++]);
                        case "%j":
                            try {
                                return JSON.stringify(o[t++]);
                            } catch (r) {
                                return "[Circular]";
                            }
                        default:
                            return r;
                    }
                });
                for(var y = o[t]; t < i; y = o[++t]){
                    if (isNull(y) || !isObject(y)) {
                        a += " " + y;
                    } else {
                        a += " " + inspect(y);
                    }
                }
                return a;
            };
            e.deprecate = function(r, t) {
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].noDeprecation === true) {
                    return r;
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined") {
                    return function() {
                        return e.deprecate(r, t).apply(this, arguments);
                    };
                }
                var o = false;
                function deprecated() {
                    if (!o) {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].throwDeprecation) {
                            throw new Error(t);
                        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].traceDeprecation) {
                            console.trace(t);
                        } else {
                            console.error(t);
                        }
                        o = true;
                    }
                    return r.apply(this, arguments);
                }
                return deprecated;
            };
            var i = {};
            var a = /^$/;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG) {
                var y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG;
                y = y.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
                a = new RegExp("^" + y + "$", "i");
            }
            e.debuglog = function(r) {
                r = r.toUpperCase();
                if (!i[r]) {
                    if (a.test(r)) {
                        var t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pid;
                        i[r] = function() {
                            var o = e.format.apply(e, arguments);
                            console.error("%s %d: %s", r, t, o);
                        };
                    } else {
                        i[r] = function() {};
                    }
                }
                return i[r];
            };
            function inspect(r, t) {
                var o = {
                    seen: [],
                    stylize: stylizeNoColor
                };
                if (arguments.length >= 3) o.depth = arguments[2];
                if (arguments.length >= 4) o.colors = arguments[3];
                if (isBoolean(t)) {
                    o.showHidden = t;
                } else if (t) {
                    e._extend(o, t);
                }
                if (isUndefined(o.showHidden)) o.showHidden = false;
                if (isUndefined(o.depth)) o.depth = 2;
                if (isUndefined(o.colors)) o.colors = false;
                if (isUndefined(o.customInspect)) o.customInspect = true;
                if (o.colors) o.stylize = stylizeWithColor;
                return formatValue(o, r, o.depth);
            }
            e.inspect = inspect;
            inspect.colors = {
                bold: [
                    1,
                    22
                ],
                italic: [
                    3,
                    23
                ],
                underline: [
                    4,
                    24
                ],
                inverse: [
                    7,
                    27
                ],
                white: [
                    37,
                    39
                ],
                grey: [
                    90,
                    39
                ],
                black: [
                    30,
                    39
                ],
                blue: [
                    34,
                    39
                ],
                cyan: [
                    36,
                    39
                ],
                green: [
                    32,
                    39
                ],
                magenta: [
                    35,
                    39
                ],
                red: [
                    31,
                    39
                ],
                yellow: [
                    33,
                    39
                ]
            };
            inspect.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            };
            function stylizeWithColor(r, e) {
                var t = inspect.styles[e];
                if (t) {
                    return "[" + inspect.colors[t][0] + "m" + r + "[" + inspect.colors[t][1] + "m";
                } else {
                    return r;
                }
            }
            function stylizeNoColor(r, e) {
                return r;
            }
            function arrayToHash(r) {
                var e = {};
                r.forEach(function(r, t) {
                    e[r] = true;
                });
                return e;
            }
            function formatValue(r, t, o) {
                if (r.customInspect && t && isFunction(t.inspect) && t.inspect !== e.inspect && !(t.constructor && t.constructor.prototype === t)) {
                    var n = t.inspect(o, r);
                    if (!isString(n)) {
                        n = formatValue(r, n, o);
                    }
                    return n;
                }
                var i = formatPrimitive(r, t);
                if (i) {
                    return i;
                }
                var a = Object.keys(t);
                var y = arrayToHash(a);
                if (r.showHidden) {
                    a = Object.getOwnPropertyNames(t);
                }
                if (isError(t) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) {
                    return formatError(t);
                }
                if (a.length === 0) {
                    if (isFunction(t)) {
                        var f = t.name ? ": " + t.name : "";
                        return r.stylize("[Function" + f + "]", "special");
                    }
                    if (isRegExp(t)) {
                        return r.stylize(RegExp.prototype.toString.call(t), "regexp");
                    }
                    if (isDate(t)) {
                        return r.stylize(Date.prototype.toString.call(t), "date");
                    }
                    if (isError(t)) {
                        return formatError(t);
                    }
                }
                var p = "", u = false, s = [
                    "{",
                    "}"
                ];
                if (isArray(t)) {
                    u = true;
                    s = [
                        "[",
                        "]"
                    ];
                }
                if (isFunction(t)) {
                    var c = t.name ? ": " + t.name : "";
                    p = " [Function" + c + "]";
                }
                if (isRegExp(t)) {
                    p = " " + RegExp.prototype.toString.call(t);
                }
                if (isDate(t)) {
                    p = " " + Date.prototype.toUTCString.call(t);
                }
                if (isError(t)) {
                    p = " " + formatError(t);
                }
                if (a.length === 0 && (!u || t.length == 0)) {
                    return s[0] + p + s[1];
                }
                if (o < 0) {
                    if (isRegExp(t)) {
                        return r.stylize(RegExp.prototype.toString.call(t), "regexp");
                    } else {
                        return r.stylize("[Object]", "special");
                    }
                }
                r.seen.push(t);
                var l;
                if (u) {
                    l = formatArray(r, t, o, y, a);
                } else {
                    l = a.map(function(e) {
                        return formatProperty(r, t, o, y, e, u);
                    });
                }
                r.seen.pop();
                return reduceToSingleString(l, p, s);
            }
            function formatPrimitive(r, e) {
                if (isUndefined(e)) return r.stylize("undefined", "undefined");
                if (isString(e)) {
                    var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return r.stylize(t, "string");
                }
                if (isNumber(e)) return r.stylize("" + e, "number");
                if (isBoolean(e)) return r.stylize("" + e, "boolean");
                if (isNull(e)) return r.stylize("null", "null");
            }
            function formatError(r) {
                return "[" + Error.prototype.toString.call(r) + "]";
            }
            function formatArray(r, e, t, o, n) {
                var i = [];
                for(var a = 0, y = e.length; a < y; ++a){
                    if (hasOwnProperty(e, String(a))) {
                        i.push(formatProperty(r, e, t, o, String(a), true));
                    } else {
                        i.push("");
                    }
                }
                n.forEach(function(n) {
                    if (!n.match(/^\d+$/)) {
                        i.push(formatProperty(r, e, t, o, n, true));
                    }
                });
                return i;
            }
            function formatProperty(r, e, t, o, n, i) {
                var a, y, f;
                f = Object.getOwnPropertyDescriptor(e, n) || {
                    value: e[n]
                };
                if (f.get) {
                    if (f.set) {
                        y = r.stylize("[Getter/Setter]", "special");
                    } else {
                        y = r.stylize("[Getter]", "special");
                    }
                } else {
                    if (f.set) {
                        y = r.stylize("[Setter]", "special");
                    }
                }
                if (!hasOwnProperty(o, n)) {
                    a = "[" + n + "]";
                }
                if (!y) {
                    if (r.seen.indexOf(f.value) < 0) {
                        if (isNull(t)) {
                            y = formatValue(r, f.value, null);
                        } else {
                            y = formatValue(r, f.value, t - 1);
                        }
                        if (y.indexOf("\n") > -1) {
                            if (i) {
                                y = y.split("\n").map(function(r) {
                                    return "  " + r;
                                }).join("\n").substr(2);
                            } else {
                                y = "\n" + y.split("\n").map(function(r) {
                                    return "   " + r;
                                }).join("\n");
                            }
                        }
                    } else {
                        y = r.stylize("[Circular]", "special");
                    }
                }
                if (isUndefined(a)) {
                    if (i && n.match(/^\d+$/)) {
                        return y;
                    }
                    a = JSON.stringify("" + n);
                    if (a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                        a = a.substr(1, a.length - 2);
                        a = r.stylize(a, "name");
                    } else {
                        a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                        a = r.stylize(a, "string");
                    }
                }
                return a + ": " + y;
            }
            function reduceToSingleString(r, e, t) {
                var o = 0;
                var n = r.reduce(function(r, e) {
                    o++;
                    if (e.indexOf("\n") >= 0) o++;
                    return r + e.replace(/\u001b\[\d\d?m/g, "").length + 1;
                }, 0);
                if (n > 60) {
                    return t[0] + (e === "" ? "" : e + "\n ") + " " + r.join(",\n  ") + " " + t[1];
                }
                return t[0] + e + " " + r.join(", ") + " " + t[1];
            }
            e.types = t(584);
            function isArray(r) {
                return Array.isArray(r);
            }
            e.isArray = isArray;
            function isBoolean(r) {
                return typeof r === "boolean";
            }
            e.isBoolean = isBoolean;
            function isNull(r) {
                return r === null;
            }
            e.isNull = isNull;
            function isNullOrUndefined(r) {
                return r == null;
            }
            e.isNullOrUndefined = isNullOrUndefined;
            function isNumber(r) {
                return typeof r === "number";
            }
            e.isNumber = isNumber;
            function isString(r) {
                return typeof r === "string";
            }
            e.isString = isString;
            function isSymbol(r) {
                return typeof r === "symbol";
            }
            e.isSymbol = isSymbol;
            function isUndefined(r) {
                return r === void 0;
            }
            e.isUndefined = isUndefined;
            function isRegExp(r) {
                return isObject(r) && objectToString(r) === "[object RegExp]";
            }
            e.isRegExp = isRegExp;
            e.types.isRegExp = isRegExp;
            function isObject(r) {
                return typeof r === "object" && r !== null;
            }
            e.isObject = isObject;
            function isDate(r) {
                return isObject(r) && objectToString(r) === "[object Date]";
            }
            e.isDate = isDate;
            e.types.isDate = isDate;
            function isError(r) {
                return isObject(r) && (objectToString(r) === "[object Error]" || r instanceof Error);
            }
            e.isError = isError;
            e.types.isNativeError = isError;
            function isFunction(r) {
                return typeof r === "function";
            }
            e.isFunction = isFunction;
            function isPrimitive(r) {
                return r === null || typeof r === "boolean" || typeof r === "number" || typeof r === "string" || typeof r === "symbol" || typeof r === "undefined";
            }
            e.isPrimitive = isPrimitive;
            e.isBuffer = t(369);
            function objectToString(r) {
                return Object.prototype.toString.call(r);
            }
            function pad(r) {
                return r < 10 ? "0" + r.toString(10) : r.toString(10);
            }
            var f = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
            function timestamp() {
                var r = new Date;
                var e = [
                    pad(r.getHours()),
                    pad(r.getMinutes()),
                    pad(r.getSeconds())
                ].join(":");
                return [
                    r.getDate(),
                    f[r.getMonth()],
                    e
                ].join(" ");
            }
            e.log = function() {
                console.log("%s - %s", timestamp(), e.format.apply(e, arguments));
            };
            e.inherits = t(782);
            e._extend = function(r, e) {
                if (!e || !isObject(e)) return r;
                var t = Object.keys(e);
                var o = t.length;
                while(o--){
                    r[t[o]] = e[t[o]];
                }
                return r;
            };
            function hasOwnProperty(r, e) {
                return Object.prototype.hasOwnProperty.call(r, e);
            }
            var p = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
            e.promisify = function promisify(r) {
                if (typeof r !== "function") throw new TypeError('The "original" argument must be of type Function');
                if (p && r[p]) {
                    var e = r[p];
                    if (typeof e !== "function") {
                        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                    }
                    Object.defineProperty(e, p, {
                        value: e,
                        enumerable: false,
                        writable: false,
                        configurable: true
                    });
                    return e;
                }
                function e() {
                    var e, t;
                    var o = new Promise(function(r, o) {
                        e = r;
                        t = o;
                    });
                    var n = [];
                    for(var i = 0; i < arguments.length; i++){
                        n.push(arguments[i]);
                    }
                    n.push(function(r, o) {
                        if (r) {
                            t(r);
                        } else {
                            e(o);
                        }
                    });
                    try {
                        r.apply(this, n);
                    } catch (r) {
                        t(r);
                    }
                    return o;
                }
                Object.setPrototypeOf(e, Object.getPrototypeOf(r));
                if (p) Object.defineProperty(e, p, {
                    value: e,
                    enumerable: false,
                    writable: false,
                    configurable: true
                });
                return Object.defineProperties(e, o(r));
            };
            e.promisify.custom = p;
            function callbackifyOnRejected(r, e) {
                if (!r) {
                    var t = new Error("Promise was rejected with a falsy value");
                    t.reason = r;
                    r = t;
                }
                return e(r);
            }
            function callbackify(r) {
                if (typeof r !== "function") {
                    throw new TypeError('The "original" argument must be of type Function');
                }
                function callbackified() {
                    var e = [];
                    for(var t = 0; t < arguments.length; t++){
                        e.push(arguments[t]);
                    }
                    var o = e.pop();
                    if (typeof o !== "function") {
                        throw new TypeError("The last argument must be of type Function");
                    }
                    var n = this;
                    var cb = function() {
                        return o.apply(n, arguments);
                    };
                    r.apply(this, e).then(function(r) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(cb.bind(null, null, r));
                    }, function(r) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(callbackifyOnRejected.bind(null, r, cb));
                    });
                }
                Object.setPrototypeOf(callbackified, Object.getPrototypeOf(r));
                Object.defineProperties(callbackified, o(r));
                return callbackified;
            }
            e.callbackify = callbackify;
        },
        490: function(r, e, t) {
            "use strict";
            var o = t(144);
            var n = t(349);
            var i = t(256);
            var a = i("Object.prototype.toString");
            var y = t(942)();
            var f = y && typeof Symbol.toStringTag === "symbol";
            var p = n();
            var u = i("String.prototype.slice");
            var s = {};
            var c = t(24);
            var l = Object.getPrototypeOf;
            if (f && c && l) {
                o(p, function(r) {
                    if (typeof global[r] === "function") {
                        var e = new global[r];
                        if (!(Symbol.toStringTag in e)) {
                            throw new EvalError("this engine has support for Symbol.toStringTag, but " + r + " does not have the property! Please report this.");
                        }
                        var t = l(e);
                        var o = c(t, Symbol.toStringTag);
                        if (!o) {
                            var n = l(t);
                            o = c(n, Symbol.toStringTag);
                        }
                        s[r] = o.get;
                    }
                });
            }
            var d = function tryAllTypedArrays(r) {
                var e = false;
                o(s, function(t, o) {
                    if (!e) {
                        try {
                            var n = t.call(r);
                            if (n === o) {
                                e = n;
                            }
                        } catch (r) {}
                    }
                });
                return e;
            };
            var g = t(994);
            r.exports = function whichTypedArray(r) {
                if (!g(r)) {
                    return false;
                }
                if (!f) {
                    return u(a(r), 8, -1);
                }
                return d(r);
            };
        },
        349: function(r, e, t) {
            "use strict";
            var o = t(992);
            r.exports = function availableTypedArrays() {
                return o([
                    "BigInt64Array",
                    "BigUint64Array",
                    "Float32Array",
                    "Float64Array",
                    "Int16Array",
                    "Int32Array",
                    "Int8Array",
                    "Uint16Array",
                    "Uint32Array",
                    "Uint8Array",
                    "Uint8ClampedArray"
                ], function(r) {
                    return typeof global[r] === "function";
                });
            };
        },
        24: function(r, e, t) {
            "use strict";
            var o = t(500);
            var n = o("%Object.getOwnPropertyDescriptor%", true);
            if (n) {
                try {
                    n([], "length");
                } catch (r) {
                    n = null;
                }
            }
            r.exports = n;
        }
    };
    var e = {};
    function __nccwpck_require__(t) {
        var o = e[t];
        if (o !== undefined) {
            return o.exports;
        }
        var n = e[t] = {
            exports: {}
        };
        var i = true;
        try {
            r[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete e[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(177);
    module.exports = t;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/micromatch/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
(()=>{
    "use strict";
    var e = {
        333: (e, t, r)=>{
            const n = r(137);
            const u = r(179);
            const s = r(13);
            const o = r(719);
            const braces = (e, t = {})=>{
                let r = [];
                if (Array.isArray(e)) {
                    for (let n of e){
                        let e = braces.create(n, t);
                        if (Array.isArray(e)) {
                            r.push(...e);
                        } else {
                            r.push(e);
                        }
                    }
                } else {
                    r = [].concat(braces.create(e, t));
                }
                if (t && t.expand === true && t.nodupes === true) {
                    r = [
                        ...new Set(r)
                    ];
                }
                return r;
            };
            braces.parse = (e, t = {})=>o(e, t);
            braces.stringify = (e, t = {})=>{
                if (typeof e === "string") {
                    return n(braces.parse(e, t), t);
                }
                return n(e, t);
            };
            braces.compile = (e, t = {})=>{
                if (typeof e === "string") {
                    e = braces.parse(e, t);
                }
                return u(e, t);
            };
            braces.expand = (e, t = {})=>{
                if (typeof e === "string") {
                    e = braces.parse(e, t);
                }
                let r = s(e, t);
                if (t.noempty === true) {
                    r = r.filter(Boolean);
                }
                if (t.nodupes === true) {
                    r = [
                        ...new Set(r)
                    ];
                }
                return r;
            };
            braces.create = (e, t = {})=>{
                if (e === "" || e.length < 3) {
                    return [
                        e
                    ];
                }
                return t.expand !== true ? braces.compile(e, t) : braces.expand(e, t);
            };
            e.exports = braces;
        },
        179: (e, t, r)=>{
            const n = r(783);
            const u = r(617);
            const compile = (e, t = {})=>{
                let walk = (e, r = {})=>{
                    let s = u.isInvalidBrace(r);
                    let o = e.invalid === true && t.escapeInvalid === true;
                    let i = s === true || o === true;
                    let a = t.escapeInvalid === true ? "\\" : "";
                    let l = "";
                    if (e.isOpen === true) {
                        return a + e.value;
                    }
                    if (e.isClose === true) {
                        return a + e.value;
                    }
                    if (e.type === "open") {
                        return i ? a + e.value : "(";
                    }
                    if (e.type === "close") {
                        return i ? a + e.value : ")";
                    }
                    if (e.type === "comma") {
                        return e.prev.type === "comma" ? "" : i ? e.value : "|";
                    }
                    if (e.value) {
                        return e.value;
                    }
                    if (e.nodes && e.ranges > 0) {
                        let r = u.reduce(e.nodes);
                        let s = n(...r, {
                            ...t,
                            wrap: false,
                            toRegex: true
                        });
                        if (s.length !== 0) {
                            return r.length > 1 && s.length > 1 ? `(${s})` : s;
                        }
                    }
                    if (e.nodes) {
                        for (let t of e.nodes){
                            l += walk(t, e);
                        }
                    }
                    return l;
                };
                return walk(e);
            };
            e.exports = compile;
        },
        457: (e)=>{
            e.exports = {
                MAX_LENGTH: 1024 * 64,
                CHAR_0: "0",
                CHAR_9: "9",
                CHAR_UPPERCASE_A: "A",
                CHAR_LOWERCASE_A: "a",
                CHAR_UPPERCASE_Z: "Z",
                CHAR_LOWERCASE_Z: "z",
                CHAR_LEFT_PARENTHESES: "(",
                CHAR_RIGHT_PARENTHESES: ")",
                CHAR_ASTERISK: "*",
                CHAR_AMPERSAND: "&",
                CHAR_AT: "@",
                CHAR_BACKSLASH: "\\",
                CHAR_BACKTICK: "`",
                CHAR_CARRIAGE_RETURN: "\r",
                CHAR_CIRCUMFLEX_ACCENT: "^",
                CHAR_COLON: ":",
                CHAR_COMMA: ",",
                CHAR_DOLLAR: "$",
                CHAR_DOT: ".",
                CHAR_DOUBLE_QUOTE: '"',
                CHAR_EQUAL: "=",
                CHAR_EXCLAMATION_MARK: "!",
                CHAR_FORM_FEED: "\f",
                CHAR_FORWARD_SLASH: "/",
                CHAR_HASH: "#",
                CHAR_HYPHEN_MINUS: "-",
                CHAR_LEFT_ANGLE_BRACKET: "<",
                CHAR_LEFT_CURLY_BRACE: "{",
                CHAR_LEFT_SQUARE_BRACKET: "[",
                CHAR_LINE_FEED: "\n",
                CHAR_NO_BREAK_SPACE: " ",
                CHAR_PERCENT: "%",
                CHAR_PLUS: "+",
                CHAR_QUESTION_MARK: "?",
                CHAR_RIGHT_ANGLE_BRACKET: ">",
                CHAR_RIGHT_CURLY_BRACE: "}",
                CHAR_RIGHT_SQUARE_BRACKET: "]",
                CHAR_SEMICOLON: ";",
                CHAR_SINGLE_QUOTE: "'",
                CHAR_SPACE: " ",
                CHAR_TAB: "\t",
                CHAR_UNDERSCORE: "_",
                CHAR_VERTICAL_LINE: "|",
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\ufeff"
            };
        },
        13: (e, t, r)=>{
            const n = r(783);
            const u = r(137);
            const s = r(617);
            const append = (e = "", t = "", r = false)=>{
                let n = [];
                e = [].concat(e);
                t = [].concat(t);
                if (!t.length) return e;
                if (!e.length) {
                    return r ? s.flatten(t).map((e)=>`{${e}}`) : t;
                }
                for (let u of e){
                    if (Array.isArray(u)) {
                        for (let e of u){
                            n.push(append(e, t, r));
                        }
                    } else {
                        for (let e of t){
                            if (r === true && typeof e === "string") e = `{${e}}`;
                            n.push(Array.isArray(e) ? append(u, e, r) : u + e);
                        }
                    }
                }
                return s.flatten(n);
            };
            const expand = (e, t = {})=>{
                let r = t.rangeLimit === void 0 ? 1e3 : t.rangeLimit;
                let walk = (e, o = {})=>{
                    e.queue = [];
                    let i = o;
                    let a = o.queue;
                    while(i.type !== "brace" && i.type !== "root" && i.parent){
                        i = i.parent;
                        a = i.queue;
                    }
                    if (e.invalid || e.dollar) {
                        a.push(append(a.pop(), u(e, t)));
                        return;
                    }
                    if (e.type === "brace" && e.invalid !== true && e.nodes.length === 2) {
                        a.push(append(a.pop(), [
                            "{}"
                        ]));
                        return;
                    }
                    if (e.nodes && e.ranges > 0) {
                        let o = s.reduce(e.nodes);
                        if (s.exceedsLimit(...o, t.step, r)) {
                            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
                        }
                        let i = n(...o, t);
                        if (i.length === 0) {
                            i = u(e, t);
                        }
                        a.push(append(a.pop(), i));
                        e.nodes = [];
                        return;
                    }
                    let l = s.encloseBrace(e);
                    let c = e.queue;
                    let p = e;
                    while(p.type !== "brace" && p.type !== "root" && p.parent){
                        p = p.parent;
                        c = p.queue;
                    }
                    for(let t = 0; t < e.nodes.length; t++){
                        let r = e.nodes[t];
                        if (r.type === "comma" && e.type === "brace") {
                            if (t === 1) c.push("");
                            c.push("");
                            continue;
                        }
                        if (r.type === "close") {
                            a.push(append(a.pop(), c, l));
                            continue;
                        }
                        if (r.value && r.type !== "open") {
                            c.push(append(c.pop(), r.value));
                            continue;
                        }
                        if (r.nodes) {
                            walk(r, e);
                        }
                    }
                    return c;
                };
                return s.flatten(walk(e));
            };
            e.exports = expand;
        },
        719: (e, t, r)=>{
            const n = r(137);
            const { MAX_LENGTH: u, CHAR_BACKSLASH: s, CHAR_BACKTICK: o, CHAR_COMMA: i, CHAR_DOT: a, CHAR_LEFT_PARENTHESES: l, CHAR_RIGHT_PARENTHESES: c, CHAR_LEFT_CURLY_BRACE: p, CHAR_RIGHT_CURLY_BRACE: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_RIGHT_SQUARE_BRACKET: R, CHAR_DOUBLE_QUOTE: _, CHAR_SINGLE_QUOTE: h, CHAR_NO_BREAK_SPACE: g, CHAR_ZERO_WIDTH_NOBREAK_SPACE: E } = r(457);
            const parse = (e, t = {})=>{
                if (typeof e !== "string") {
                    throw new TypeError("Expected a string");
                }
                let r = t || {};
                let C = typeof r.maxLength === "number" ? Math.min(u, r.maxLength) : u;
                if (e.length > C) {
                    throw new SyntaxError(`Input length (${e.length}), exceeds max characters (${C})`);
                }
                let y = {
                    type: "root",
                    input: e,
                    nodes: []
                };
                let d = [
                    y
                ];
                let x = y;
                let b = y;
                let S = 0;
                let H = e.length;
                let v = 0;
                let $ = 0;
                let m;
                let T = {};
                const advance = ()=>e[v++];
                const push = (e)=>{
                    if (e.type === "text" && b.type === "dot") {
                        b.type = "text";
                    }
                    if (b && b.type === "text" && e.type === "text") {
                        b.value += e.value;
                        return;
                    }
                    x.nodes.push(e);
                    e.parent = x;
                    e.prev = b;
                    b = e;
                    return e;
                };
                push({
                    type: "bos"
                });
                while(v < H){
                    x = d[d.length - 1];
                    m = advance();
                    if (m === E || m === g) {
                        continue;
                    }
                    if (m === s) {
                        push({
                            type: "text",
                            value: (t.keepEscaping ? m : "") + advance()
                        });
                        continue;
                    }
                    if (m === R) {
                        push({
                            type: "text",
                            value: "\\" + m
                        });
                        continue;
                    }
                    if (m === A) {
                        S++;
                        let e = true;
                        let t;
                        while(v < H && (t = advance())){
                            m += t;
                            if (t === A) {
                                S++;
                                continue;
                            }
                            if (t === s) {
                                m += advance();
                                continue;
                            }
                            if (t === R) {
                                S--;
                                if (S === 0) {
                                    break;
                                }
                            }
                        }
                        push({
                            type: "text",
                            value: m
                        });
                        continue;
                    }
                    if (m === l) {
                        x = push({
                            type: "paren",
                            nodes: []
                        });
                        d.push(x);
                        push({
                            type: "text",
                            value: m
                        });
                        continue;
                    }
                    if (m === c) {
                        if (x.type !== "paren") {
                            push({
                                type: "text",
                                value: m
                            });
                            continue;
                        }
                        x = d.pop();
                        push({
                            type: "text",
                            value: m
                        });
                        x = d[d.length - 1];
                        continue;
                    }
                    if (m === _ || m === h || m === o) {
                        let e = m;
                        let r;
                        if (t.keepQuotes !== true) {
                            m = "";
                        }
                        while(v < H && (r = advance())){
                            if (r === s) {
                                m += r + advance();
                                continue;
                            }
                            if (r === e) {
                                if (t.keepQuotes === true) m += r;
                                break;
                            }
                            m += r;
                        }
                        push({
                            type: "text",
                            value: m
                        });
                        continue;
                    }
                    if (m === p) {
                        $++;
                        let e = b.value && b.value.slice(-1) === "$" || x.dollar === true;
                        let t = {
                            type: "brace",
                            open: true,
                            close: false,
                            dollar: e,
                            depth: $,
                            commas: 0,
                            ranges: 0,
                            nodes: []
                        };
                        x = push(t);
                        d.push(x);
                        push({
                            type: "open",
                            value: m
                        });
                        continue;
                    }
                    if (m === f) {
                        if (x.type !== "brace") {
                            push({
                                type: "text",
                                value: m
                            });
                            continue;
                        }
                        let e = "close";
                        x = d.pop();
                        x.close = true;
                        push({
                            type: e,
                            value: m
                        });
                        $--;
                        x = d[d.length - 1];
                        continue;
                    }
                    if (m === i && $ > 0) {
                        if (x.ranges > 0) {
                            x.ranges = 0;
                            let e = x.nodes.shift();
                            x.nodes = [
                                e,
                                {
                                    type: "text",
                                    value: n(x)
                                }
                            ];
                        }
                        push({
                            type: "comma",
                            value: m
                        });
                        x.commas++;
                        continue;
                    }
                    if (m === a && $ > 0 && x.commas === 0) {
                        let e = x.nodes;
                        if ($ === 0 || e.length === 0) {
                            push({
                                type: "text",
                                value: m
                            });
                            continue;
                        }
                        if (b.type === "dot") {
                            x.range = [];
                            b.value += m;
                            b.type = "range";
                            if (x.nodes.length !== 3 && x.nodes.length !== 5) {
                                x.invalid = true;
                                x.ranges = 0;
                                b.type = "text";
                                continue;
                            }
                            x.ranges++;
                            x.args = [];
                            continue;
                        }
                        if (b.type === "range") {
                            e.pop();
                            let t = e[e.length - 1];
                            t.value += b.value + m;
                            b = t;
                            x.ranges--;
                            continue;
                        }
                        push({
                            type: "dot",
                            value: m
                        });
                        continue;
                    }
                    push({
                        type: "text",
                        value: m
                    });
                }
                do {
                    x = d.pop();
                    if (x.type !== "root") {
                        x.nodes.forEach((e)=>{
                            if (!e.nodes) {
                                if (e.type === "open") e.isOpen = true;
                                if (e.type === "close") e.isClose = true;
                                if (!e.nodes) e.type = "text";
                                e.invalid = true;
                            }
                        });
                        let e = d[d.length - 1];
                        let t = e.nodes.indexOf(x);
                        e.nodes.splice(t, 1, ...x.nodes);
                    }
                }while (d.length > 0)
                push({
                    type: "eos"
                });
                return y;
            };
            e.exports = parse;
        },
        137: (e, t, r)=>{
            const n = r(617);
            e.exports = (e, t = {})=>{
                let stringify = (e, r = {})=>{
                    let u = t.escapeInvalid && n.isInvalidBrace(r);
                    let s = e.invalid === true && t.escapeInvalid === true;
                    let o = "";
                    if (e.value) {
                        if ((u || s) && n.isOpenOrClose(e)) {
                            return "\\" + e.value;
                        }
                        return e.value;
                    }
                    if (e.value) {
                        return e.value;
                    }
                    if (e.nodes) {
                        for (let t of e.nodes){
                            o += stringify(t);
                        }
                    }
                    return o;
                };
                return stringify(e);
            };
        },
        617: (e, t)=>{
            t.isInteger = (e)=>{
                if (typeof e === "number") {
                    return Number.isInteger(e);
                }
                if (typeof e === "string" && e.trim() !== "") {
                    return Number.isInteger(Number(e));
                }
                return false;
            };
            t.find = (e, t)=>e.nodes.find((e)=>e.type === t);
            t.exceedsLimit = (e, r, n = 1, u)=>{
                if (u === false) return false;
                if (!t.isInteger(e) || !t.isInteger(r)) return false;
                return (Number(r) - Number(e)) / Number(n) >= u;
            };
            t.escapeNode = (e, t = 0, r)=>{
                let n = e.nodes[t];
                if (!n) return;
                if (r && n.type === r || n.type === "open" || n.type === "close") {
                    if (n.escaped !== true) {
                        n.value = "\\" + n.value;
                        n.escaped = true;
                    }
                }
            };
            t.encloseBrace = (e)=>{
                if (e.type !== "brace") return false;
                if (e.commas >> 0 + e.ranges >> 0 === 0) {
                    e.invalid = true;
                    return true;
                }
                return false;
            };
            t.isInvalidBrace = (e)=>{
                if (e.type !== "brace") return false;
                if (e.invalid === true || e.dollar) return true;
                if (e.commas >> 0 + e.ranges >> 0 === 0) {
                    e.invalid = true;
                    return true;
                }
                if (e.open !== true || e.close !== true) {
                    e.invalid = true;
                    return true;
                }
                return false;
            };
            t.isOpenOrClose = (e)=>{
                if (e.type === "open" || e.type === "close") {
                    return true;
                }
                return e.open === true || e.close === true;
            };
            t.reduce = (e)=>e.reduce((e, t)=>{
                    if (t.type === "text") e.push(t.value);
                    if (t.type === "range") t.type = "text";
                    return e;
                }, []);
            t.flatten = (...e)=>{
                const t = [];
                const flat = (e)=>{
                    for(let r = 0; r < e.length; r++){
                        let n = e[r];
                        Array.isArray(n) ? flat(n, t) : n !== void 0 && t.push(n);
                    }
                    return t;
                };
                flat(e);
                return t;
            };
        },
        783: (e, t, r)=>{
            /*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */ const n = r(837);
            const u = r(492);
            const isObject = (e)=>e !== null && typeof e === "object" && !Array.isArray(e);
            const transform = (e)=>(t)=>e === true ? Number(t) : String(t);
            const isValidValue = (e)=>typeof e === "number" || typeof e === "string" && e !== "";
            const isNumber = (e)=>Number.isInteger(+e);
            const zeros = (e)=>{
                let t = `${e}`;
                let r = -1;
                if (t[0] === "-") t = t.slice(1);
                if (t === "0") return false;
                while(t[++r] === "0");
                return r > 0;
            };
            const stringify = (e, t, r)=>{
                if (typeof e === "string" || typeof t === "string") {
                    return true;
                }
                return r.stringify === true;
            };
            const pad = (e, t, r)=>{
                if (t > 0) {
                    let r = e[0] === "-" ? "-" : "";
                    if (r) e = e.slice(1);
                    e = r + e.padStart(r ? t - 1 : t, "0");
                }
                if (r === false) {
                    return String(e);
                }
                return e;
            };
            const toMaxLen = (e, t)=>{
                let r = e[0] === "-" ? "-" : "";
                if (r) {
                    e = e.slice(1);
                    t--;
                }
                while(e.length < t)e = "0" + e;
                return r ? "-" + e : e;
            };
            const toSequence = (e, t)=>{
                e.negatives.sort((e, t)=>e < t ? -1 : e > t ? 1 : 0);
                e.positives.sort((e, t)=>e < t ? -1 : e > t ? 1 : 0);
                let r = t.capture ? "" : "?:";
                let n = "";
                let u = "";
                let s;
                if (e.positives.length) {
                    n = e.positives.join("|");
                }
                if (e.negatives.length) {
                    u = `-(${r}${e.negatives.join("|")})`;
                }
                if (n && u) {
                    s = `${n}|${u}`;
                } else {
                    s = n || u;
                }
                if (t.wrap) {
                    return `(${r}${s})`;
                }
                return s;
            };
            const toRange = (e, t, r, n)=>{
                if (r) {
                    return u(e, t, {
                        wrap: false,
                        ...n
                    });
                }
                let s = String.fromCharCode(e);
                if (e === t) return s;
                let o = String.fromCharCode(t);
                return `[${s}-${o}]`;
            };
            const toRegex = (e, t, r)=>{
                if (Array.isArray(e)) {
                    let t = r.wrap === true;
                    let n = r.capture ? "" : "?:";
                    return t ? `(${n}${e.join("|")})` : e.join("|");
                }
                return u(e, t, r);
            };
            const rangeError = (...e)=>new RangeError("Invalid range arguments: " + n.inspect(...e));
            const invalidRange = (e, t, r)=>{
                if (r.strictRanges === true) throw rangeError([
                    e,
                    t
                ]);
                return [];
            };
            const invalidStep = (e, t)=>{
                if (t.strictRanges === true) {
                    throw new TypeError(`Expected step "${e}" to be a number`);
                }
                return [];
            };
            const fillNumbers = (e, t, r = 1, n = {})=>{
                let u = Number(e);
                let s = Number(t);
                if (!Number.isInteger(u) || !Number.isInteger(s)) {
                    if (n.strictRanges === true) throw rangeError([
                        e,
                        t
                    ]);
                    return [];
                }
                if (u === 0) u = 0;
                if (s === 0) s = 0;
                let o = u > s;
                let i = String(e);
                let a = String(t);
                let l = String(r);
                r = Math.max(Math.abs(r), 1);
                let c = zeros(i) || zeros(a) || zeros(l);
                let p = c ? Math.max(i.length, a.length, l.length) : 0;
                let f = c === false && stringify(e, t, n) === false;
                let A = n.transform || transform(f);
                if (n.toRegex && r === 1) {
                    return toRange(toMaxLen(e, p), toMaxLen(t, p), true, n);
                }
                let R = {
                    negatives: [],
                    positives: []
                };
                let push = (e)=>R[e < 0 ? "negatives" : "positives"].push(Math.abs(e));
                let _ = [];
                let h = 0;
                while(o ? u >= s : u <= s){
                    if (n.toRegex === true && r > 1) {
                        push(u);
                    } else {
                        _.push(pad(A(u, h), p, f));
                    }
                    u = o ? u - r : u + r;
                    h++;
                }
                if (n.toRegex === true) {
                    return r > 1 ? toSequence(R, n) : toRegex(_, null, {
                        wrap: false,
                        ...n
                    });
                }
                return _;
            };
            const fillLetters = (e, t, r = 1, n = {})=>{
                if (!isNumber(e) && e.length > 1 || !isNumber(t) && t.length > 1) {
                    return invalidRange(e, t, n);
                }
                let u = n.transform || ((e)=>String.fromCharCode(e));
                let s = `${e}`.charCodeAt(0);
                let o = `${t}`.charCodeAt(0);
                let i = s > o;
                let a = Math.min(s, o);
                let l = Math.max(s, o);
                if (n.toRegex && r === 1) {
                    return toRange(a, l, false, n);
                }
                let c = [];
                let p = 0;
                while(i ? s >= o : s <= o){
                    c.push(u(s, p));
                    s = i ? s - r : s + r;
                    p++;
                }
                if (n.toRegex === true) {
                    return toRegex(c, null, {
                        wrap: false,
                        options: n
                    });
                }
                return c;
            };
            const fill = (e, t, r, n = {})=>{
                if (t == null && isValidValue(e)) {
                    return [
                        e
                    ];
                }
                if (!isValidValue(e) || !isValidValue(t)) {
                    return invalidRange(e, t, n);
                }
                if (typeof r === "function") {
                    return fill(e, t, 1, {
                        transform: r
                    });
                }
                if (isObject(r)) {
                    return fill(e, t, 0, r);
                }
                let u = {
                    ...n
                };
                if (u.capture === true) u.wrap = true;
                r = r || u.step || 1;
                if (!isNumber(r)) {
                    if (r != null && !isObject(r)) return invalidStep(r, u);
                    return fill(e, t, 1, r);
                }
                if (isNumber(e) && isNumber(t)) {
                    return fillNumbers(e, t, r, u);
                }
                return fillLetters(e, t, Math.max(Math.abs(r), 1), u);
            };
            e.exports = fill;
        },
        357: (e)=>{
            /*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */ e.exports = function(e) {
                if (typeof e === "number") {
                    return e - e === 0;
                }
                if (typeof e === "string" && e.trim() !== "") {
                    return Number.isFinite ? Number.isFinite(+e) : isFinite(+e);
                }
                return false;
            };
        },
        971: (e, t, r)=>{
            const n = r(837);
            const u = r(333);
            const s = r(251);
            const o = r(513);
            const isEmptyString = (e)=>e === "" || e === "./";
            const micromatch = (e, t, r)=>{
                t = [].concat(t);
                e = [].concat(e);
                let n = new Set;
                let u = new Set;
                let o = new Set;
                let i = 0;
                let onResult = (e)=>{
                    o.add(e.output);
                    if (r && r.onResult) {
                        r.onResult(e);
                    }
                };
                for(let o = 0; o < t.length; o++){
                    let a = s(String(t[o]), {
                        ...r,
                        onResult: onResult
                    }, true);
                    let l = a.state.negated || a.state.negatedExtglob;
                    if (l) i++;
                    for (let t of e){
                        let e = a(t, true);
                        let r = l ? !e.isMatch : e.isMatch;
                        if (!r) continue;
                        if (l) {
                            n.add(e.output);
                        } else {
                            n.delete(e.output);
                            u.add(e.output);
                        }
                    }
                }
                let a = i === t.length ? [
                    ...o
                ] : [
                    ...u
                ];
                let l = a.filter((e)=>!n.has(e));
                if (r && l.length === 0) {
                    if (r.failglob === true) {
                        throw new Error(`No matches found for "${t.join(", ")}"`);
                    }
                    if (r.nonull === true || r.nullglob === true) {
                        return r.unescape ? t.map((e)=>e.replace(/\\/g, "")) : t;
                    }
                }
                return l;
            };
            micromatch.match = micromatch;
            micromatch.matcher = (e, t)=>s(e, t);
            micromatch.isMatch = (e, t, r)=>s(t, r)(e);
            micromatch.any = micromatch.isMatch;
            micromatch.not = (e, t, r = {})=>{
                t = [].concat(t).map(String);
                let n = new Set;
                let u = [];
                let onResult = (e)=>{
                    if (r.onResult) r.onResult(e);
                    u.push(e.output);
                };
                let s = micromatch(e, t, {
                    ...r,
                    onResult: onResult
                });
                for (let e of u){
                    if (!s.includes(e)) {
                        n.add(e);
                    }
                }
                return [
                    ...n
                ];
            };
            micromatch.contains = (e, t, r)=>{
                if (typeof e !== "string") {
                    throw new TypeError(`Expected a string: "${n.inspect(e)}"`);
                }
                if (Array.isArray(t)) {
                    return t.some((t)=>micromatch.contains(e, t, r));
                }
                if (typeof t === "string") {
                    if (isEmptyString(e) || isEmptyString(t)) {
                        return false;
                    }
                    if (e.includes(t) || e.startsWith("./") && e.slice(2).includes(t)) {
                        return true;
                    }
                }
                return micromatch.isMatch(e, t, {
                    ...r,
                    contains: true
                });
            };
            micromatch.matchKeys = (e, t, r)=>{
                if (!o.isObject(e)) {
                    throw new TypeError("Expected the first argument to be an object");
                }
                let n = micromatch(Object.keys(e), t, r);
                let u = {};
                for (let t of n)u[t] = e[t];
                return u;
            };
            micromatch.some = (e, t, r)=>{
                let n = [].concat(e);
                for (let e of [].concat(t)){
                    let t = s(String(e), r);
                    if (n.some((e)=>t(e))) {
                        return true;
                    }
                }
                return false;
            };
            micromatch.every = (e, t, r)=>{
                let n = [].concat(e);
                for (let e of [].concat(t)){
                    let t = s(String(e), r);
                    if (!n.every((e)=>t(e))) {
                        return false;
                    }
                }
                return true;
            };
            micromatch.all = (e, t, r)=>{
                if (typeof e !== "string") {
                    throw new TypeError(`Expected a string: "${n.inspect(e)}"`);
                }
                return [].concat(t).every((t)=>s(t, r)(e));
            };
            micromatch.capture = (e, t, r)=>{
                let n = o.isWindows(r);
                let u = s.makeRe(String(e), {
                    ...r,
                    capture: true
                });
                let i = u.exec(n ? o.toPosixSlashes(t) : t);
                if (i) {
                    return i.slice(1).map((e)=>e === void 0 ? "" : e);
                }
            };
            micromatch.makeRe = (...e)=>s.makeRe(...e);
            micromatch.scan = (...e)=>s.scan(...e);
            micromatch.parse = (e, t)=>{
                let r = [];
                for (let n of [].concat(e || [])){
                    for (let e of u(String(n), t)){
                        r.push(s.parse(e, t));
                    }
                }
                return r;
            };
            micromatch.braces = (e, t)=>{
                if (typeof e !== "string") throw new TypeError("Expected a string");
                if (t && t.nobrace === true || !/\{.*\}/.test(e)) {
                    return [
                        e
                    ];
                }
                return u(e, t);
            };
            micromatch.braceExpand = (e, t)=>{
                if (typeof e !== "string") throw new TypeError("Expected a string");
                return micromatch.braces(e, {
                    ...t,
                    expand: true
                });
            };
            e.exports = micromatch;
        },
        251: (e, t, r)=>{
            e.exports = r(683);
        },
        356: (e, t, r)=>{
            const n = r(17);
            const u = "\\\\/";
            const s = `[^${u}]`;
            const o = "\\.";
            const i = "\\+";
            const a = "\\?";
            const l = "\\/";
            const c = "(?=.)";
            const p = "[^/]";
            const f = `(?:${l}|$)`;
            const A = `(?:^|${l})`;
            const R = `${o}{1,2}${f}`;
            const _ = `(?!${o})`;
            const h = `(?!${A}${R})`;
            const g = `(?!${o}{0,1}${f})`;
            const E = `(?!${R})`;
            const C = `[^.${l}]`;
            const y = `${p}*?`;
            const d = {
                DOT_LITERAL: o,
                PLUS_LITERAL: i,
                QMARK_LITERAL: a,
                SLASH_LITERAL: l,
                ONE_CHAR: c,
                QMARK: p,
                END_ANCHOR: f,
                DOTS_SLASH: R,
                NO_DOT: _,
                NO_DOTS: h,
                NO_DOT_SLASH: g,
                NO_DOTS_SLASH: E,
                QMARK_NO_DOT: C,
                STAR: y,
                START_ANCHOR: A
            };
            const x = {
                ...d,
                SLASH_LITERAL: `[${u}]`,
                QMARK: s,
                STAR: `${s}*?`,
                DOTS_SLASH: `${o}{1,2}(?:[${u}]|$)`,
                NO_DOT: `(?!${o})`,
                NO_DOTS: `(?!(?:^|[${u}])${o}{1,2}(?:[${u}]|$))`,
                NO_DOT_SLASH: `(?!${o}{0,1}(?:[${u}]|$))`,
                NO_DOTS_SLASH: `(?!${o}{1,2}(?:[${u}]|$))`,
                QMARK_NO_DOT: `[^.${u}]`,
                START_ANCHOR: `(?:^|[${u}])`,
                END_ANCHOR: `(?:[${u}]|$)`
            };
            const b = {
                alnum: "a-zA-Z0-9",
                alpha: "a-zA-Z",
                ascii: "\\x00-\\x7F",
                blank: " \\t",
                cntrl: "\\x00-\\x1F\\x7F",
                digit: "0-9",
                graph: "\\x21-\\x7E",
                lower: "a-z",
                print: "\\x20-\\x7E ",
                punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
                space: " \\t\\r\\n\\v\\f",
                upper: "A-Z",
                word: "A-Za-z0-9_",
                xdigit: "A-Fa-f0-9"
            };
            e.exports = {
                MAX_LENGTH: 1024 * 64,
                POSIX_REGEX_SOURCE: b,
                REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                REPLACEMENTS: {
                    "***": "*",
                    "**/**": "**",
                    "**/**/**": "**"
                },
                CHAR_0: 48,
                CHAR_9: 57,
                CHAR_UPPERCASE_A: 65,
                CHAR_LOWERCASE_A: 97,
                CHAR_UPPERCASE_Z: 90,
                CHAR_LOWERCASE_Z: 122,
                CHAR_LEFT_PARENTHESES: 40,
                CHAR_RIGHT_PARENTHESES: 41,
                CHAR_ASTERISK: 42,
                CHAR_AMPERSAND: 38,
                CHAR_AT: 64,
                CHAR_BACKWARD_SLASH: 92,
                CHAR_CARRIAGE_RETURN: 13,
                CHAR_CIRCUMFLEX_ACCENT: 94,
                CHAR_COLON: 58,
                CHAR_COMMA: 44,
                CHAR_DOT: 46,
                CHAR_DOUBLE_QUOTE: 34,
                CHAR_EQUAL: 61,
                CHAR_EXCLAMATION_MARK: 33,
                CHAR_FORM_FEED: 12,
                CHAR_FORWARD_SLASH: 47,
                CHAR_GRAVE_ACCENT: 96,
                CHAR_HASH: 35,
                CHAR_HYPHEN_MINUS: 45,
                CHAR_LEFT_ANGLE_BRACKET: 60,
                CHAR_LEFT_CURLY_BRACE: 123,
                CHAR_LEFT_SQUARE_BRACKET: 91,
                CHAR_LINE_FEED: 10,
                CHAR_NO_BREAK_SPACE: 160,
                CHAR_PERCENT: 37,
                CHAR_PLUS: 43,
                CHAR_QUESTION_MARK: 63,
                CHAR_RIGHT_ANGLE_BRACKET: 62,
                CHAR_RIGHT_CURLY_BRACE: 125,
                CHAR_RIGHT_SQUARE_BRACKET: 93,
                CHAR_SEMICOLON: 59,
                CHAR_SINGLE_QUOTE: 39,
                CHAR_SPACE: 32,
                CHAR_TAB: 9,
                CHAR_UNDERSCORE: 95,
                CHAR_VERTICAL_LINE: 124,
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                SEP: n.sep,
                extglobChars (e) {
                    return {
                        "!": {
                            type: "negate",
                            open: "(?:(?!(?:",
                            close: `))${e.STAR})`
                        },
                        "?": {
                            type: "qmark",
                            open: "(?:",
                            close: ")?"
                        },
                        "+": {
                            type: "plus",
                            open: "(?:",
                            close: ")+"
                        },
                        "*": {
                            type: "star",
                            open: "(?:",
                            close: ")*"
                        },
                        "@": {
                            type: "at",
                            open: "(?:",
                            close: ")"
                        }
                    };
                },
                globChars (e) {
                    return e === true ? x : d;
                }
            };
        },
        754: (e, t, r)=>{
            const n = r(356);
            const u = r(513);
            const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: o, REGEX_NON_SPECIAL_CHARS: i, REGEX_SPECIAL_CHARS_BACKREF: a, REPLACEMENTS: l } = n;
            const expandRange = (e, t)=>{
                if (typeof t.expandRange === "function") {
                    return t.expandRange(...e, t);
                }
                e.sort();
                const r = `[${e.join("-")}]`;
                try {
                    new RegExp(r);
                } catch (t) {
                    return e.map((e)=>u.escapeRegex(e)).join("..");
                }
                return r;
            };
            const syntaxError = (e, t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`;
            const parse = (e, t)=>{
                if (typeof e !== "string") {
                    throw new TypeError("Expected a string");
                }
                e = l[e] || e;
                const r = {
                    ...t
                };
                const c = typeof r.maxLength === "number" ? Math.min(s, r.maxLength) : s;
                let p = e.length;
                if (p > c) {
                    throw new SyntaxError(`Input length: ${p}, exceeds maximum allowed length: ${c}`);
                }
                const f = {
                    type: "bos",
                    value: "",
                    output: r.prepend || ""
                };
                const A = [
                    f
                ];
                const R = r.capture ? "" : "?:";
                const _ = u.isWindows(t);
                const h = n.globChars(_);
                const g = n.extglobChars(h);
                const { DOT_LITERAL: E, PLUS_LITERAL: C, SLASH_LITERAL: y, ONE_CHAR: d, DOTS_SLASH: x, NO_DOT: b, NO_DOT_SLASH: S, NO_DOTS_SLASH: H, QMARK: v, QMARK_NO_DOT: $, STAR: m, START_ANCHOR: T } = h;
                const globstar = (e)=>`(${R}(?:(?!${T}${e.dot ? x : E}).)*?)`;
                const L = r.dot ? "" : b;
                const O = r.dot ? v : $;
                let w = r.bash === true ? globstar(r) : m;
                if (r.capture) {
                    w = `(${w})`;
                }
                if (typeof r.noext === "boolean") {
                    r.noextglob = r.noext;
                }
                const N = {
                    input: e,
                    index: -1,
                    start: 0,
                    dot: r.dot === true,
                    consumed: "",
                    output: "",
                    prefix: "",
                    backtrack: false,
                    negated: false,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    globstar: false,
                    tokens: A
                };
                e = u.removePrefix(e, N);
                p = e.length;
                const k = [];
                const I = [];
                const M = [];
                let P = f;
                let B;
                const eos = ()=>N.index === p - 1;
                const G = N.peek = (t = 1)=>e[N.index + t];
                const D = N.advance = ()=>e[++N.index];
                const remaining = ()=>e.slice(N.index + 1);
                const consume = (e = "", t = 0)=>{
                    N.consumed += e;
                    N.index += t;
                };
                const append = (e)=>{
                    N.output += e.output != null ? e.output : e.value;
                    consume(e.value);
                };
                const negate = ()=>{
                    let e = 1;
                    while(G() === "!" && (G(2) !== "(" || G(3) === "?")){
                        D();
                        N.start++;
                        e++;
                    }
                    if (e % 2 === 0) {
                        return false;
                    }
                    N.negated = true;
                    N.start++;
                    return true;
                };
                const increment = (e)=>{
                    N[e]++;
                    M.push(e);
                };
                const decrement = (e)=>{
                    N[e]--;
                    M.pop();
                };
                const push = (e)=>{
                    if (P.type === "globstar") {
                        const t = N.braces > 0 && (e.type === "comma" || e.type === "brace");
                        const r = e.extglob === true || k.length && (e.type === "pipe" || e.type === "paren");
                        if (e.type !== "slash" && e.type !== "paren" && !t && !r) {
                            N.output = N.output.slice(0, -P.output.length);
                            P.type = "star";
                            P.value = "*";
                            P.output = w;
                            N.output += P.output;
                        }
                    }
                    if (k.length && e.type !== "paren" && !g[e.value]) {
                        k[k.length - 1].inner += e.value;
                    }
                    if (e.value || e.output) append(e);
                    if (P && P.type === "text" && e.type === "text") {
                        P.value += e.value;
                        P.output = (P.output || "") + e.value;
                        return;
                    }
                    e.prev = P;
                    A.push(e);
                    P = e;
                };
                const extglobOpen = (e, t)=>{
                    const n = {
                        ...g[t],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = P;
                    n.parens = N.parens;
                    n.output = N.output;
                    const u = (r.capture ? "(" : "") + n.open;
                    increment("parens");
                    push({
                        type: e,
                        value: t,
                        output: N.output ? "" : d
                    });
                    push({
                        type: "paren",
                        extglob: true,
                        value: D(),
                        output: u
                    });
                    k.push(n);
                };
                const extglobClose = (e)=>{
                    let t = e.close + (r.capture ? ")" : "");
                    if (e.type === "negate") {
                        let n = w;
                        if (e.inner && e.inner.length > 1 && e.inner.includes("/")) {
                            n = globstar(r);
                        }
                        if (n !== w || eos() || /^\)+$/.test(remaining())) {
                            t = e.close = `)$))${n}`;
                        }
                        if (e.prev.type === "bos") {
                            N.negatedExtglob = true;
                        }
                    }
                    push({
                        type: "paren",
                        extglob: true,
                        value: B,
                        output: t
                    });
                    decrement("parens");
                };
                if (r.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(e)) {
                    let n = false;
                    let s = e.replace(a, (e, t, r, u, s, o)=>{
                        if (u === "\\") {
                            n = true;
                            return e;
                        }
                        if (u === "?") {
                            if (t) {
                                return t + u + (s ? v.repeat(s.length) : "");
                            }
                            if (o === 0) {
                                return O + (s ? v.repeat(s.length) : "");
                            }
                            return v.repeat(r.length);
                        }
                        if (u === ".") {
                            return E.repeat(r.length);
                        }
                        if (u === "*") {
                            if (t) {
                                return t + u + (s ? w : "");
                            }
                            return w;
                        }
                        return t ? e : `\\${e}`;
                    });
                    if (n === true) {
                        if (r.unescape === true) {
                            s = s.replace(/\\/g, "");
                        } else {
                            s = s.replace(/\\+/g, (e)=>e.length % 2 === 0 ? "\\\\" : e ? "\\" : "");
                        }
                    }
                    if (s === e && r.contains === true) {
                        N.output = e;
                        return N;
                    }
                    N.output = u.wrapOutput(s, N, t);
                    return N;
                }
                while(!eos()){
                    B = D();
                    if (B === "\0") {
                        continue;
                    }
                    if (B === "\\") {
                        const e = G();
                        if (e === "/" && r.bash !== true) {
                            continue;
                        }
                        if (e === "." || e === ";") {
                            continue;
                        }
                        if (!e) {
                            B += "\\";
                            push({
                                type: "text",
                                value: B
                            });
                            continue;
                        }
                        const t = /^\\+/.exec(remaining());
                        let n = 0;
                        if (t && t[0].length > 2) {
                            n = t[0].length;
                            N.index += n;
                            if (n % 2 !== 0) {
                                B += "\\";
                            }
                        }
                        if (r.unescape === true) {
                            B = D() || "";
                        } else {
                            B += D() || "";
                        }
                        if (N.brackets === 0) {
                            push({
                                type: "text",
                                value: B
                            });
                            continue;
                        }
                    }
                    if (N.brackets > 0 && (B !== "]" || P.value === "[" || P.value === "[^")) {
                        if (r.posix !== false && B === ":") {
                            const e = P.value.slice(1);
                            if (e.includes("[")) {
                                P.posix = true;
                                if (e.includes(":")) {
                                    const e = P.value.lastIndexOf("[");
                                    const t = P.value.slice(0, e);
                                    const r = P.value.slice(e + 2);
                                    const n = o[r];
                                    if (n) {
                                        P.value = t + n;
                                        N.backtrack = true;
                                        D();
                                        if (!f.output && A.indexOf(P) === 1) {
                                            f.output = d;
                                        }
                                        continue;
                                    }
                                }
                            }
                        }
                        if (B === "[" && G() !== ":" || B === "-" && G() === "]") {
                            B = `\\${B}`;
                        }
                        if (B === "]" && (P.value === "[" || P.value === "[^")) {
                            B = `\\${B}`;
                        }
                        if (r.posix === true && B === "!" && P.value === "[") {
                            B = "^";
                        }
                        P.value += B;
                        append({
                            value: B
                        });
                        continue;
                    }
                    if (N.quotes === 1 && B !== '"') {
                        B = u.escapeRegex(B);
                        P.value += B;
                        append({
                            value: B
                        });
                        continue;
                    }
                    if (B === '"') {
                        N.quotes = N.quotes === 1 ? 0 : 1;
                        if (r.keepQuotes === true) {
                            push({
                                type: "text",
                                value: B
                            });
                        }
                        continue;
                    }
                    if (B === "(") {
                        increment("parens");
                        push({
                            type: "paren",
                            value: B
                        });
                        continue;
                    }
                    if (B === ")") {
                        if (N.parens === 0 && r.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "("));
                        }
                        const e = k[k.length - 1];
                        if (e && N.parens === e.parens + 1) {
                            extglobClose(k.pop());
                            continue;
                        }
                        push({
                            type: "paren",
                            value: B,
                            output: N.parens ? ")" : "\\)"
                        });
                        decrement("parens");
                        continue;
                    }
                    if (B === "[") {
                        if (r.nobracket === true || !remaining().includes("]")) {
                            if (r.nobracket !== true && r.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("closing", "]"));
                            }
                            B = `\\${B}`;
                        } else {
                            increment("brackets");
                        }
                        push({
                            type: "bracket",
                            value: B
                        });
                        continue;
                    }
                    if (B === "]") {
                        if (r.nobracket === true || P && P.type === "bracket" && P.value.length === 1) {
                            push({
                                type: "text",
                                value: B,
                                output: `\\${B}`
                            });
                            continue;
                        }
                        if (N.brackets === 0) {
                            if (r.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("opening", "["));
                            }
                            push({
                                type: "text",
                                value: B,
                                output: `\\${B}`
                            });
                            continue;
                        }
                        decrement("brackets");
                        const e = P.value.slice(1);
                        if (P.posix !== true && e[0] === "^" && !e.includes("/")) {
                            B = `/${B}`;
                        }
                        P.value += B;
                        append({
                            value: B
                        });
                        if (r.literalBrackets === false || u.hasRegexChars(e)) {
                            continue;
                        }
                        const t = u.escapeRegex(P.value);
                        N.output = N.output.slice(0, -P.value.length);
                        if (r.literalBrackets === true) {
                            N.output += t;
                            P.value = t;
                            continue;
                        }
                        P.value = `(${R}${t}|${P.value})`;
                        N.output += P.value;
                        continue;
                    }
                    if (B === "{" && r.nobrace !== true) {
                        increment("braces");
                        const e = {
                            type: "brace",
                            value: B,
                            output: "(",
                            outputIndex: N.output.length,
                            tokensIndex: N.tokens.length
                        };
                        I.push(e);
                        push(e);
                        continue;
                    }
                    if (B === "}") {
                        const e = I[I.length - 1];
                        if (r.nobrace === true || !e) {
                            push({
                                type: "text",
                                value: B,
                                output: B
                            });
                            continue;
                        }
                        let t = ")";
                        if (e.dots === true) {
                            const e = A.slice();
                            const n = [];
                            for(let t = e.length - 1; t >= 0; t--){
                                A.pop();
                                if (e[t].type === "brace") {
                                    break;
                                }
                                if (e[t].type !== "dots") {
                                    n.unshift(e[t].value);
                                }
                            }
                            t = expandRange(n, r);
                            N.backtrack = true;
                        }
                        if (e.comma !== true && e.dots !== true) {
                            const r = N.output.slice(0, e.outputIndex);
                            const n = N.tokens.slice(e.tokensIndex);
                            e.value = e.output = "\\{";
                            B = t = "\\}";
                            N.output = r;
                            for (const e of n){
                                N.output += e.output || e.value;
                            }
                        }
                        push({
                            type: "brace",
                            value: B,
                            output: t
                        });
                        decrement("braces");
                        I.pop();
                        continue;
                    }
                    if (B === "|") {
                        if (k.length > 0) {
                            k[k.length - 1].conditions++;
                        }
                        push({
                            type: "text",
                            value: B
                        });
                        continue;
                    }
                    if (B === ",") {
                        let e = B;
                        const t = I[I.length - 1];
                        if (t && M[M.length - 1] === "braces") {
                            t.comma = true;
                            e = "|";
                        }
                        push({
                            type: "comma",
                            value: B,
                            output: e
                        });
                        continue;
                    }
                    if (B === "/") {
                        if (P.type === "dot" && N.index === N.start + 1) {
                            N.start = N.index + 1;
                            N.consumed = "";
                            N.output = "";
                            A.pop();
                            P = f;
                            continue;
                        }
                        push({
                            type: "slash",
                            value: B,
                            output: y
                        });
                        continue;
                    }
                    if (B === ".") {
                        if (N.braces > 0 && P.type === "dot") {
                            if (P.value === ".") P.output = E;
                            const e = I[I.length - 1];
                            P.type = "dots";
                            P.output += B;
                            P.value += B;
                            e.dots = true;
                            continue;
                        }
                        if (N.braces + N.parens === 0 && P.type !== "bos" && P.type !== "slash") {
                            push({
                                type: "text",
                                value: B,
                                output: E
                            });
                            continue;
                        }
                        push({
                            type: "dot",
                            value: B,
                            output: E
                        });
                        continue;
                    }
                    if (B === "?") {
                        const e = P && P.value === "(";
                        if (!e && r.noextglob !== true && G() === "(" && G(2) !== "?") {
                            extglobOpen("qmark", B);
                            continue;
                        }
                        if (P && P.type === "paren") {
                            const e = G();
                            let t = B;
                            if (e === "<" && !u.supportsLookbehinds()) {
                                throw new Error("Node.js v10 or higher is required for regex lookbehinds");
                            }
                            if (P.value === "(" && !/[!=<:]/.test(e) || e === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                                t = `\\${B}`;
                            }
                            push({
                                type: "text",
                                value: B,
                                output: t
                            });
                            continue;
                        }
                        if (r.dot !== true && (P.type === "slash" || P.type === "bos")) {
                            push({
                                type: "qmark",
                                value: B,
                                output: $
                            });
                            continue;
                        }
                        push({
                            type: "qmark",
                            value: B,
                            output: v
                        });
                        continue;
                    }
                    if (B === "!") {
                        if (r.noextglob !== true && G() === "(") {
                            if (G(2) !== "?" || !/[!=<:]/.test(G(3))) {
                                extglobOpen("negate", B);
                                continue;
                            }
                        }
                        if (r.nonegate !== true && N.index === 0) {
                            negate();
                            continue;
                        }
                    }
                    if (B === "+") {
                        if (r.noextglob !== true && G() === "(" && G(2) !== "?") {
                            extglobOpen("plus", B);
                            continue;
                        }
                        if (P && P.value === "(" || r.regex === false) {
                            push({
                                type: "plus",
                                value: B,
                                output: C
                            });
                            continue;
                        }
                        if (P && (P.type === "bracket" || P.type === "paren" || P.type === "brace") || N.parens > 0) {
                            push({
                                type: "plus",
                                value: B
                            });
                            continue;
                        }
                        push({
                            type: "plus",
                            value: C
                        });
                        continue;
                    }
                    if (B === "@") {
                        if (r.noextglob !== true && G() === "(" && G(2) !== "?") {
                            push({
                                type: "at",
                                extglob: true,
                                value: B,
                                output: ""
                            });
                            continue;
                        }
                        push({
                            type: "text",
                            value: B
                        });
                        continue;
                    }
                    if (B !== "*") {
                        if (B === "$" || B === "^") {
                            B = `\\${B}`;
                        }
                        const e = i.exec(remaining());
                        if (e) {
                            B += e[0];
                            N.index += e[0].length;
                        }
                        push({
                            type: "text",
                            value: B
                        });
                        continue;
                    }
                    if (P && (P.type === "globstar" || P.star === true)) {
                        P.type = "star";
                        P.star = true;
                        P.value += B;
                        P.output = w;
                        N.backtrack = true;
                        N.globstar = true;
                        consume(B);
                        continue;
                    }
                    let t = remaining();
                    if (r.noextglob !== true && /^\([^?]/.test(t)) {
                        extglobOpen("star", B);
                        continue;
                    }
                    if (P.type === "star") {
                        if (r.noglobstar === true) {
                            consume(B);
                            continue;
                        }
                        const n = P.prev;
                        const u = n.prev;
                        const s = n.type === "slash" || n.type === "bos";
                        const o = u && (u.type === "star" || u.type === "globstar");
                        if (r.bash === true && (!s || t[0] && t[0] !== "/")) {
                            push({
                                type: "star",
                                value: B,
                                output: ""
                            });
                            continue;
                        }
                        const i = N.braces > 0 && (n.type === "comma" || n.type === "brace");
                        const a = k.length && (n.type === "pipe" || n.type === "paren");
                        if (!s && n.type !== "paren" && !i && !a) {
                            push({
                                type: "star",
                                value: B,
                                output: ""
                            });
                            continue;
                        }
                        while(t.slice(0, 3) === "/**"){
                            const r = e[N.index + 4];
                            if (r && r !== "/") {
                                break;
                            }
                            t = t.slice(3);
                            consume("/**", 3);
                        }
                        if (n.type === "bos" && eos()) {
                            P.type = "globstar";
                            P.value += B;
                            P.output = globstar(r);
                            N.output = P.output;
                            N.globstar = true;
                            consume(B);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && !o && eos()) {
                            N.output = N.output.slice(0, -(n.output + P.output).length);
                            n.output = `(?:${n.output}`;
                            P.type = "globstar";
                            P.output = globstar(r) + (r.strictSlashes ? ")" : "|$)");
                            P.value += B;
                            N.globstar = true;
                            N.output += n.output + P.output;
                            consume(B);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && t[0] === "/") {
                            const e = t[1] !== void 0 ? "|$" : "";
                            N.output = N.output.slice(0, -(n.output + P.output).length);
                            n.output = `(?:${n.output}`;
                            P.type = "globstar";
                            P.output = `${globstar(r)}${y}|${y}${e})`;
                            P.value += B;
                            N.output += n.output + P.output;
                            N.globstar = true;
                            consume(B + D());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        if (n.type === "bos" && t[0] === "/") {
                            P.type = "globstar";
                            P.value += B;
                            P.output = `(?:^|${y}|${globstar(r)}${y})`;
                            N.output = P.output;
                            N.globstar = true;
                            consume(B + D());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        N.output = N.output.slice(0, -P.output.length);
                        P.type = "globstar";
                        P.output = globstar(r);
                        P.value += B;
                        N.output += P.output;
                        N.globstar = true;
                        consume(B);
                        continue;
                    }
                    const n = {
                        type: "star",
                        value: B,
                        output: w
                    };
                    if (r.bash === true) {
                        n.output = ".*?";
                        if (P.type === "bos" || P.type === "slash") {
                            n.output = L + n.output;
                        }
                        push(n);
                        continue;
                    }
                    if (P && (P.type === "bracket" || P.type === "paren") && r.regex === true) {
                        n.output = B;
                        push(n);
                        continue;
                    }
                    if (N.index === N.start || P.type === "slash" || P.type === "dot") {
                        if (P.type === "dot") {
                            N.output += S;
                            P.output += S;
                        } else if (r.dot === true) {
                            N.output += H;
                            P.output += H;
                        } else {
                            N.output += L;
                            P.output += L;
                        }
                        if (G() !== "*") {
                            N.output += d;
                            P.output += d;
                        }
                    }
                    push(n);
                }
                while(N.brackets > 0){
                    if (r.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                    N.output = u.escapeLast(N.output, "[");
                    decrement("brackets");
                }
                while(N.parens > 0){
                    if (r.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                    N.output = u.escapeLast(N.output, "(");
                    decrement("parens");
                }
                while(N.braces > 0){
                    if (r.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                    N.output = u.escapeLast(N.output, "{");
                    decrement("braces");
                }
                if (r.strictSlashes !== true && (P.type === "star" || P.type === "bracket")) {
                    push({
                        type: "maybe_slash",
                        value: "",
                        output: `${y}?`
                    });
                }
                if (N.backtrack === true) {
                    N.output = "";
                    for (const e of N.tokens){
                        N.output += e.output != null ? e.output : e.value;
                        if (e.suffix) {
                            N.output += e.suffix;
                        }
                    }
                }
                return N;
            };
            parse.fastpaths = (e, t)=>{
                const r = {
                    ...t
                };
                const o = typeof r.maxLength === "number" ? Math.min(s, r.maxLength) : s;
                const i = e.length;
                if (i > o) {
                    throw new SyntaxError(`Input length: ${i}, exceeds maximum allowed length: ${o}`);
                }
                e = l[e] || e;
                const a = u.isWindows(t);
                const { DOT_LITERAL: c, SLASH_LITERAL: p, ONE_CHAR: f, DOTS_SLASH: A, NO_DOT: R, NO_DOTS: _, NO_DOTS_SLASH: h, STAR: g, START_ANCHOR: E } = n.globChars(a);
                const C = r.dot ? _ : R;
                const y = r.dot ? h : R;
                const d = r.capture ? "" : "?:";
                const x = {
                    negated: false,
                    prefix: ""
                };
                let b = r.bash === true ? ".*?" : g;
                if (r.capture) {
                    b = `(${b})`;
                }
                const globstar = (e)=>{
                    if (e.noglobstar === true) return b;
                    return `(${d}(?:(?!${E}${e.dot ? A : c}).)*?)`;
                };
                const create = (e)=>{
                    switch(e){
                        case "*":
                            return `${C}${f}${b}`;
                        case ".*":
                            return `${c}${f}${b}`;
                        case "*.*":
                            return `${C}${b}${c}${f}${b}`;
                        case "*/*":
                            return `${C}${b}${p}${f}${y}${b}`;
                        case "**":
                            return C + globstar(r);
                        case "**/*":
                            return `(?:${C}${globstar(r)}${p})?${y}${f}${b}`;
                        case "**/*.*":
                            return `(?:${C}${globstar(r)}${p})?${y}${b}${c}${f}${b}`;
                        case "**/.*":
                            return `(?:${C}${globstar(r)}${p})?${c}${f}${b}`;
                        default:
                            {
                                const t = /^(.*?)\.(\w+)$/.exec(e);
                                if (!t) return;
                                const r = create(t[1]);
                                if (!r) return;
                                return r + c + t[2];
                            }
                    }
                };
                const S = u.removePrefix(e, x);
                let H = create(S);
                if (H && r.strictSlashes !== true) {
                    H += `${p}?`;
                }
                return H;
            };
            e.exports = parse;
        },
        683: (e, t, r)=>{
            const n = r(17);
            const u = r(700);
            const s = r(754);
            const o = r(513);
            const i = r(356);
            const isObject = (e)=>e && typeof e === "object" && !Array.isArray(e);
            const picomatch = (e, t, r = false)=>{
                if (Array.isArray(e)) {
                    const n = e.map((e)=>picomatch(e, t, r));
                    const arrayMatcher = (e)=>{
                        for (const t of n){
                            const r = t(e);
                            if (r) return r;
                        }
                        return false;
                    };
                    return arrayMatcher;
                }
                const n = isObject(e) && e.tokens && e.input;
                if (e === "" || typeof e !== "string" && !n) {
                    throw new TypeError("Expected pattern to be a non-empty string");
                }
                const u = t || {};
                const s = o.isWindows(t);
                const i = n ? picomatch.compileRe(e, t) : picomatch.makeRe(e, t, false, true);
                const a = i.state;
                delete i.state;
                let isIgnored = ()=>false;
                if (u.ignore) {
                    const e = {
                        ...t,
                        ignore: null,
                        onMatch: null,
                        onResult: null
                    };
                    isIgnored = picomatch(u.ignore, e, r);
                }
                const matcher = (r, n = false)=>{
                    const { isMatch: o, match: l, output: c } = picomatch.test(r, i, t, {
                        glob: e,
                        posix: s
                    });
                    const p = {
                        glob: e,
                        state: a,
                        regex: i,
                        posix: s,
                        input: r,
                        output: c,
                        match: l,
                        isMatch: o
                    };
                    if (typeof u.onResult === "function") {
                        u.onResult(p);
                    }
                    if (o === false) {
                        p.isMatch = false;
                        return n ? p : false;
                    }
                    if (isIgnored(r)) {
                        if (typeof u.onIgnore === "function") {
                            u.onIgnore(p);
                        }
                        p.isMatch = false;
                        return n ? p : false;
                    }
                    if (typeof u.onMatch === "function") {
                        u.onMatch(p);
                    }
                    return n ? p : true;
                };
                if (r) {
                    matcher.state = a;
                }
                return matcher;
            };
            picomatch.test = (e, t, r, { glob: n, posix: u } = {})=>{
                if (typeof e !== "string") {
                    throw new TypeError("Expected input to be a string");
                }
                if (e === "") {
                    return {
                        isMatch: false,
                        output: ""
                    };
                }
                const s = r || {};
                const i = s.format || (u ? o.toPosixSlashes : null);
                let a = e === n;
                let l = a && i ? i(e) : e;
                if (a === false) {
                    l = i ? i(e) : e;
                    a = l === n;
                }
                if (a === false || s.capture === true) {
                    if (s.matchBase === true || s.basename === true) {
                        a = picomatch.matchBase(e, t, r, u);
                    } else {
                        a = t.exec(l);
                    }
                }
                return {
                    isMatch: Boolean(a),
                    match: a,
                    output: l
                };
            };
            picomatch.matchBase = (e, t, r, u = o.isWindows(r))=>{
                const s = t instanceof RegExp ? t : picomatch.makeRe(t, r);
                return s.test(n.basename(e));
            };
            picomatch.isMatch = (e, t, r)=>picomatch(t, r)(e);
            picomatch.parse = (e, t)=>{
                if (Array.isArray(e)) return e.map((e)=>picomatch.parse(e, t));
                return s(e, {
                    ...t,
                    fastpaths: false
                });
            };
            picomatch.scan = (e, t)=>u(e, t);
            picomatch.compileRe = (e, t, r = false, n = false)=>{
                if (r === true) {
                    return e.output;
                }
                const u = t || {};
                const s = u.contains ? "" : "^";
                const o = u.contains ? "" : "$";
                let i = `${s}(?:${e.output})${o}`;
                if (e && e.negated === true) {
                    i = `^(?!${i}).*$`;
                }
                const a = picomatch.toRegex(i, t);
                if (n === true) {
                    a.state = e;
                }
                return a;
            };
            picomatch.makeRe = (e, t, r = false, n = false)=>{
                if (!e || typeof e !== "string") {
                    throw new TypeError("Expected a non-empty string");
                }
                const u = t || {};
                let o = {
                    negated: false,
                    fastpaths: true
                };
                let i = "";
                let a;
                if (e.startsWith("./")) {
                    e = e.slice(2);
                    i = o.prefix = "./";
                }
                if (u.fastpaths !== false && (e[0] === "." || e[0] === "*")) {
                    a = s.fastpaths(e, t);
                }
                if (a === undefined) {
                    o = s(e, t);
                    o.prefix = i + (o.prefix || "");
                } else {
                    o.output = a;
                }
                return picomatch.compileRe(o, t, r, n);
            };
            picomatch.toRegex = (e, t)=>{
                try {
                    const r = t || {};
                    return new RegExp(e, r.flags || (r.nocase ? "i" : ""));
                } catch (e) {
                    if (t && t.debug === true) throw e;
                    return /$^/;
                }
            };
            picomatch.constants = i;
            e.exports = picomatch;
        },
        700: (e, t, r)=>{
            const n = r(513);
            const { CHAR_ASTERISK: u, CHAR_AT: s, CHAR_BACKWARD_SLASH: o, CHAR_COMMA: i, CHAR_DOT: a, CHAR_EXCLAMATION_MARK: l, CHAR_FORWARD_SLASH: c, CHAR_LEFT_CURLY_BRACE: p, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: R, CHAR_QUESTION_MARK: _, CHAR_RIGHT_CURLY_BRACE: h, CHAR_RIGHT_PARENTHESES: g, CHAR_RIGHT_SQUARE_BRACKET: E } = r(356);
            const isPathSeparator = (e)=>e === c || e === o;
            const depth = (e)=>{
                if (e.isPrefix !== true) {
                    e.depth = e.isGlobstar ? Infinity : 1;
                }
            };
            const scan = (e, t)=>{
                const r = t || {};
                const C = e.length - 1;
                const y = r.parts === true || r.scanToEnd === true;
                const d = [];
                const x = [];
                const b = [];
                let S = e;
                let H = -1;
                let v = 0;
                let $ = 0;
                let m = false;
                let T = false;
                let L = false;
                let O = false;
                let w = false;
                let N = false;
                let k = false;
                let I = false;
                let M = false;
                let P = 0;
                let B;
                let G;
                let D = {
                    value: "",
                    depth: 0,
                    isGlob: false
                };
                const eos = ()=>H >= C;
                const peek = ()=>S.charCodeAt(H + 1);
                const advance = ()=>{
                    B = G;
                    return S.charCodeAt(++H);
                };
                while(H < C){
                    G = advance();
                    let e;
                    if (G === o) {
                        k = D.backslashes = true;
                        G = advance();
                        if (G === p) {
                            N = true;
                        }
                        continue;
                    }
                    if (N === true || G === p) {
                        P++;
                        while(eos() !== true && (G = advance())){
                            if (G === o) {
                                k = D.backslashes = true;
                                advance();
                                continue;
                            }
                            if (G === p) {
                                P++;
                                continue;
                            }
                            if (N !== true && G === a && (G = advance()) === a) {
                                m = D.isBrace = true;
                                L = D.isGlob = true;
                                M = true;
                                if (y === true) {
                                    continue;
                                }
                                break;
                            }
                            if (N !== true && G === i) {
                                m = D.isBrace = true;
                                L = D.isGlob = true;
                                M = true;
                                if (y === true) {
                                    continue;
                                }
                                break;
                            }
                            if (G === h) {
                                P--;
                                if (P === 0) {
                                    N = false;
                                    m = D.isBrace = true;
                                    M = true;
                                    break;
                                }
                            }
                        }
                        if (y === true) {
                            continue;
                        }
                        break;
                    }
                    if (G === c) {
                        d.push(H);
                        x.push(D);
                        D = {
                            value: "",
                            depth: 0,
                            isGlob: false
                        };
                        if (M === true) continue;
                        if (B === a && H === v + 1) {
                            v += 2;
                            continue;
                        }
                        $ = H + 1;
                        continue;
                    }
                    if (r.noext !== true) {
                        const e = G === R || G === s || G === u || G === _ || G === l;
                        if (e === true && peek() === f) {
                            L = D.isGlob = true;
                            O = D.isExtglob = true;
                            M = true;
                            if (y === true) {
                                while(eos() !== true && (G = advance())){
                                    if (G === o) {
                                        k = D.backslashes = true;
                                        G = advance();
                                        continue;
                                    }
                                    if (G === g) {
                                        L = D.isGlob = true;
                                        M = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    if (G === u) {
                        if (B === u) w = D.isGlobstar = true;
                        L = D.isGlob = true;
                        M = true;
                        if (y === true) {
                            continue;
                        }
                        break;
                    }
                    if (G === _) {
                        L = D.isGlob = true;
                        M = true;
                        if (y === true) {
                            continue;
                        }
                        break;
                    }
                    if (G === A) {
                        while(eos() !== true && (e = advance())){
                            if (e === o) {
                                k = D.backslashes = true;
                                advance();
                                continue;
                            }
                            if (e === E) {
                                T = D.isBracket = true;
                                L = D.isGlob = true;
                                M = true;
                                break;
                            }
                        }
                        if (y === true) {
                            continue;
                        }
                        break;
                    }
                    if (r.nonegate !== true && G === l && H === v) {
                        I = D.negated = true;
                        v++;
                        continue;
                    }
                    if (r.noparen !== true && G === f) {
                        L = D.isGlob = true;
                        if (y === true) {
                            while(eos() !== true && (G = advance())){
                                if (G === f) {
                                    k = D.backslashes = true;
                                    G = advance();
                                    continue;
                                }
                                if (G === g) {
                                    M = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                    if (L === true) {
                        M = true;
                        if (y === true) {
                            continue;
                        }
                        break;
                    }
                }
                if (r.noext === true) {
                    O = false;
                    L = false;
                }
                let U = S;
                let K = "";
                let F = "";
                if (v > 0) {
                    K = S.slice(0, v);
                    S = S.slice(v);
                    $ -= v;
                }
                if (U && L === true && $ > 0) {
                    U = S.slice(0, $);
                    F = S.slice($);
                } else if (L === true) {
                    U = "";
                    F = S;
                } else {
                    U = S;
                }
                if (U && U !== "" && U !== "/" && U !== S) {
                    if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                        U = U.slice(0, -1);
                    }
                }
                if (r.unescape === true) {
                    if (F) F = n.removeBackslashes(F);
                    if (U && k === true) {
                        U = n.removeBackslashes(U);
                    }
                }
                const Q = {
                    prefix: K,
                    input: e,
                    start: v,
                    base: U,
                    glob: F,
                    isBrace: m,
                    isBracket: T,
                    isGlob: L,
                    isExtglob: O,
                    isGlobstar: w,
                    negated: I
                };
                if (r.tokens === true) {
                    Q.maxDepth = 0;
                    if (!isPathSeparator(G)) {
                        x.push(D);
                    }
                    Q.tokens = x;
                }
                if (r.parts === true || r.tokens === true) {
                    let t;
                    for(let n = 0; n < d.length; n++){
                        const u = t ? t + 1 : v;
                        const s = d[n];
                        const o = e.slice(u, s);
                        if (r.tokens) {
                            if (n === 0 && v !== 0) {
                                x[n].isPrefix = true;
                                x[n].value = K;
                            } else {
                                x[n].value = o;
                            }
                            depth(x[n]);
                            Q.maxDepth += x[n].depth;
                        }
                        if (n !== 0 || o !== "") {
                            b.push(o);
                        }
                        t = s;
                    }
                    if (t && t + 1 < e.length) {
                        const n = e.slice(t + 1);
                        b.push(n);
                        if (r.tokens) {
                            x[x.length - 1].value = n;
                            depth(x[x.length - 1]);
                            Q.maxDepth += x[x.length - 1].depth;
                        }
                    }
                    Q.slashes = d;
                    Q.parts = b;
                }
                return Q;
            };
            e.exports = scan;
        },
        513: (e, t, r)=>{
            const n = r(17);
            const u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform === "win32";
            const { REGEX_BACKSLASH: s, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: i, REGEX_SPECIAL_CHARS_GLOBAL: a } = r(356);
            t.isObject = (e)=>e !== null && typeof e === "object" && !Array.isArray(e);
            t.hasRegexChars = (e)=>i.test(e);
            t.isRegexChar = (e)=>e.length === 1 && t.hasRegexChars(e);
            t.escapeRegex = (e)=>e.replace(a, "\\$1");
            t.toPosixSlashes = (e)=>e.replace(s, "/");
            t.removeBackslashes = (e)=>e.replace(o, (e)=>e === "\\" ? "" : e);
            t.supportsLookbehinds = ()=>{
                const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version.slice(1).split(".").map(Number);
                if (e.length === 3 && e[0] >= 9 || e[0] === 8 && e[1] >= 10) {
                    return true;
                }
                return false;
            };
            t.isWindows = (e)=>{
                if (e && typeof e.windows === "boolean") {
                    return e.windows;
                }
                return u === true || n.sep === "\\";
            };
            t.escapeLast = (e, r, n)=>{
                const u = e.lastIndexOf(r, n);
                if (u === -1) return e;
                if (e[u - 1] === "\\") return t.escapeLast(e, r, u - 1);
                return `${e.slice(0, u)}\\${e.slice(u)}`;
            };
            t.removePrefix = (e, t = {})=>{
                let r = e;
                if (r.startsWith("./")) {
                    r = r.slice(2);
                    t.prefix = "./";
                }
                return r;
            };
            t.wrapOutput = (e, t = {}, r = {})=>{
                const n = r.contains ? "" : "^";
                const u = r.contains ? "" : "$";
                let s = `${n}(?:${e})${u}`;
                if (t.negated === true) {
                    s = `(?:^(?!${s}).*$)`;
                }
                return s;
            };
        },
        492: (e, t, r)=>{
            /*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */ const n = r(357);
            const toRegexRange = (e, t, r)=>{
                if (n(e) === false) {
                    throw new TypeError("toRegexRange: expected the first argument to be a number");
                }
                if (t === void 0 || e === t) {
                    return String(e);
                }
                if (n(t) === false) {
                    throw new TypeError("toRegexRange: expected the second argument to be a number.");
                }
                let u = {
                    relaxZeros: true,
                    ...r
                };
                if (typeof u.strictZeros === "boolean") {
                    u.relaxZeros = u.strictZeros === false;
                }
                let s = String(u.relaxZeros);
                let o = String(u.shorthand);
                let i = String(u.capture);
                let a = String(u.wrap);
                let l = e + ":" + t + "=" + s + o + i + a;
                if (toRegexRange.cache.hasOwnProperty(l)) {
                    return toRegexRange.cache[l].result;
                }
                let c = Math.min(e, t);
                let p = Math.max(e, t);
                if (Math.abs(c - p) === 1) {
                    let r = e + "|" + t;
                    if (u.capture) {
                        return `(${r})`;
                    }
                    if (u.wrap === false) {
                        return r;
                    }
                    return `(?:${r})`;
                }
                let f = hasPadding(e) || hasPadding(t);
                let A = {
                    min: e,
                    max: t,
                    a: c,
                    b: p
                };
                let R = [];
                let _ = [];
                if (f) {
                    A.isPadded = f;
                    A.maxLen = String(A.max).length;
                }
                if (c < 0) {
                    let e = p < 0 ? Math.abs(p) : 1;
                    _ = splitToPatterns(e, Math.abs(c), A, u);
                    c = A.a = 0;
                }
                if (p >= 0) {
                    R = splitToPatterns(c, p, A, u);
                }
                A.negatives = _;
                A.positives = R;
                A.result = collatePatterns(_, R, u);
                if (u.capture === true) {
                    A.result = `(${A.result})`;
                } else if (u.wrap !== false && R.length + _.length > 1) {
                    A.result = `(?:${A.result})`;
                }
                toRegexRange.cache[l] = A;
                return A.result;
            };
            function collatePatterns(e, t, r) {
                let n = filterPatterns(e, t, "-", false, r) || [];
                let u = filterPatterns(t, e, "", false, r) || [];
                let s = filterPatterns(e, t, "-?", true, r) || [];
                let o = n.concat(s).concat(u);
                return o.join("|");
            }
            function splitToRanges(e, t) {
                let r = 1;
                let n = 1;
                let u = countNines(e, r);
                let s = new Set([
                    t
                ]);
                while(e <= u && u <= t){
                    s.add(u);
                    r += 1;
                    u = countNines(e, r);
                }
                u = countZeros(t + 1, n) - 1;
                while(e < u && u <= t){
                    s.add(u);
                    n += 1;
                    u = countZeros(t + 1, n) - 1;
                }
                s = [
                    ...s
                ];
                s.sort(compare);
                return s;
            }
            function rangeToPattern(e, t, r) {
                if (e === t) {
                    return {
                        pattern: e,
                        count: [],
                        digits: 0
                    };
                }
                let n = zip(e, t);
                let u = n.length;
                let s = "";
                let o = 0;
                for(let e = 0; e < u; e++){
                    let [t, u] = n[e];
                    if (t === u) {
                        s += t;
                    } else if (t !== "0" || u !== "9") {
                        s += toCharacterClass(t, u, r);
                    } else {
                        o++;
                    }
                }
                if (o) {
                    s += r.shorthand === true ? "\\d" : "[0-9]";
                }
                return {
                    pattern: s,
                    count: [
                        o
                    ],
                    digits: u
                };
            }
            function splitToPatterns(e, t, r, n) {
                let u = splitToRanges(e, t);
                let s = [];
                let o = e;
                let i;
                for(let e = 0; e < u.length; e++){
                    let t = u[e];
                    let a = rangeToPattern(String(o), String(t), n);
                    let l = "";
                    if (!r.isPadded && i && i.pattern === a.pattern) {
                        if (i.count.length > 1) {
                            i.count.pop();
                        }
                        i.count.push(a.count[0]);
                        i.string = i.pattern + toQuantifier(i.count);
                        o = t + 1;
                        continue;
                    }
                    if (r.isPadded) {
                        l = padZeros(t, r, n);
                    }
                    a.string = l + a.pattern + toQuantifier(a.count);
                    s.push(a);
                    o = t + 1;
                    i = a;
                }
                return s;
            }
            function filterPatterns(e, t, r, n, u) {
                let s = [];
                for (let u of e){
                    let { string: e } = u;
                    if (!n && !contains(t, "string", e)) {
                        s.push(r + e);
                    }
                    if (n && contains(t, "string", e)) {
                        s.push(r + e);
                    }
                }
                return s;
            }
            function zip(e, t) {
                let r = [];
                for(let n = 0; n < e.length; n++)r.push([
                    e[n],
                    t[n]
                ]);
                return r;
            }
            function compare(e, t) {
                return e > t ? 1 : t > e ? -1 : 0;
            }
            function contains(e, t, r) {
                return e.some((e)=>e[t] === r);
            }
            function countNines(e, t) {
                return Number(String(e).slice(0, -t) + "9".repeat(t));
            }
            function countZeros(e, t) {
                return e - e % Math.pow(10, t);
            }
            function toQuantifier(e) {
                let [t = 0, r = ""] = e;
                if (r || t > 1) {
                    return `{${t + (r ? "," + r : "")}}`;
                }
                return "";
            }
            function toCharacterClass(e, t, r) {
                return `[${e}${t - e === 1 ? "" : "-"}${t}]`;
            }
            function hasPadding(e) {
                return /^-?(0+)\d/.test(e);
            }
            function padZeros(e, t, r) {
                if (!t.isPadded) {
                    return e;
                }
                let n = Math.abs(t.maxLen - String(e).length);
                let u = r.relaxZeros !== false;
                switch(n){
                    case 0:
                        return "";
                    case 1:
                        return u ? "0?" : "0";
                    case 2:
                        return u ? "0{0,2}" : "00";
                    default:
                        {
                            return u ? `0{0,${n}}` : `0{${n}}`;
                        }
                }
            }
            toRegexRange.cache = {};
            toRegexRange.clearCache = ()=>toRegexRange.cache = {};
            e.exports = toRegexRange;
        },
        17: (e)=>{
            e.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
        },
        837: (e)=>{
            e.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var u = t[r] = {
            exports: {}
        };
        var s = true;
        try {
            e[r](u, u.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete t[r];
        }
        return u.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = __nccwpck_require__(971);
    module.exports = r;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    matchRemotePattern: null,
    hasMatch: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchRemotePattern: function() {
        return matchRemotePattern;
    },
    hasMatch: function() {
        return hasMatch;
    }
});
const _micromatch = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/micromatch/index.js [app-client] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        const actualProto = url.protocol.slice(0, -1);
        if (pattern.protocol !== actualProto) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw new Error("Pattern should define hostname but found\n" + JSON.stringify(pattern));
    } else {
        if (!(0, _micromatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    var _pattern_pathname;
    if (!(0, _micromatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : "**").test(url.pathname)) {
        return false;
    }
    return true;
}
function hasMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if ("TURBOPACK compile-time truthy", 1) {
        const missingValues = [];
        // these should always be provided but make sure they are
        if (!src) missingValues.push("src");
        if (!width) missingValues.push("width");
        if (missingValues.length > 0) {
            throw new Error("Next Image Optimization requires " + missingValues.join(", ") + " to be provided. Make sure you pass them as props to the `next/image` component. Received: " + JSON.stringify({
                src,
                width,
                quality
            }));
        }
        if (src.startsWith("//")) {
            throw new Error('Failed to parse src "' + src + '" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)');
        }
        if (!src.startsWith("/") && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
                parsedSrc = new URL(src);
            } catch (err) {
                console.error(err);
                throw new Error('Failed to parse src "' + src + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)');
            }
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasMatch } = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)");
                if (!hasMatch(config.domains, config.remotePatterns, parsedSrc)) {
                    throw new Error("Invalid src prop (" + src + ') on `next/image`, hostname "' + parsedSrc.hostname + '" is not configured under images in your `next.config.js`\n' + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host");
                }
            }
        }
    }
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function() {
        return Image;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _head = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)"));
const _getimgprops = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _routercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
// This is replaced by webpack define plugin
const configEnv = ("TURBOPACK compile-time value", JSON.parse('{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false,"domains":[],"remotePatterns":[{"protocol":"https","hostname":"randomuser.me","pathname":"/api/portraits/**"},{"protocol":"https","hostname":"cloudflare-ipfs.com","pathname":"/ipfs/**"},{"protocol":"https","hostname":"avatars.githubusercontent.com","pathname":"/u/**"},{"protocol":"https","hostname":"picsum.photos"},{"protocol":"https","hostname":"flagcdn.com"},{"protocol":"https","hostname":"utfs.io"},{"protocol":"https","hostname":"images.unsplash.com"},{"protocol":"https","hostname":"s3.amazonaws.com","pathname":"/redqteam.com/isomorphic-furyroad/public/**"},{"protocol":"https","hostname":"isomorphic-furyroad.s3.amazonaws.com"}],"output":"standalone"}'));
if (typeof window === "undefined") {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const origSrc = new URL(src, "http://n").searchParams.get("url") || src;
            if (img.getAttribute("data-nimg") === "fill") {
                if (!unoptimized && (!img.getAttribute("sizes") || img.getAttribute("sizes") === "100vw")) {
                    let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
                    if (widthViewportRatio < 0.6) {
                        (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
                    }
                }
                if (img.parentElement) {
                    const { position } = window.getComputedStyle(img.parentElement);
                    const valid = [
                        "absolute",
                        "fixed",
                        "relative"
                    ];
                    if (!valid.includes(position)) {
                        (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and parent element with invalid "position". Provided "' + position + '" should be one of ' + valid.map(String).join(",") + ".");
                    }
                }
                if (img.height === 0) {
                    (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.');
                }
            }
            const heightModified = img.height.toString() !== img.getAttribute("height");
            const widthModified = img.width.toString() !== img.getAttribute("width");
            if (heightModified && !widthModified || !heightModified && widthModified) {
                (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles \'width: "auto"\' or \'height: "auto"\' to maintain the aspect ratio.');
            }
        }
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".", 2);
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                if (!src) {
                    console.error('Image is missing required "src" property:', img);
                }
                if (img.getAttribute("alt") === null) {
                    console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.');
                }
            }
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        // See https://github.com/facebook/react/pull/26940
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                ref: forwardedRef
            }),
            imgMeta.priority ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getImageProps: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getImageProps: function() {
        return getImageProps;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
const getImageProps = (imgProps)=>{
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", JSON.parse('{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false,"domains":[],"remotePatterns":[{"protocol":"https","hostname":"randomuser.me","pathname":"/api/portraits/**"},{"protocol":"https","hostname":"cloudflare-ipfs.com","pathname":"/ipfs/**"},{"protocol":"https","hostname":"avatars.githubusercontent.com","pathname":"/u/**"},{"protocol":"https","hostname":"picsum.photos"},{"protocol":"https","hostname":"flagcdn.com"},{"protocol":"https","hostname":"utfs.io"},{"protocol":"https","hostname":"images.unsplash.com"},{"protocol":"https","hostname":"s3.amazonaws.com","pathname":"/redqteam.com/isomorphic-furyroad/public/**"},{"protocol":"https","hostname":"isomorphic-furyroad.s3.amazonaws.com"}],"output":"standalone"}'))
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");

}.call(this) }),
}]);

//# sourceMappingURL=e667e_next_0c8c37._.js.map