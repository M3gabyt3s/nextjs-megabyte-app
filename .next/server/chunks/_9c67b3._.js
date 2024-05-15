module.exports = {

"[project]/src/layouts/carbon/need-support.tsx [app-ssr] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/src/layouts/carbon/need-support.tsx'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/react-use@17.5.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/lib/useSessionStorage.js [app-ssr] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var react_1 = __turbopack_require__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var util_1 = __turbopack_require__("[project]/node_modules/.pnpm/react-use@17.5.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/lib/misc/util.js [app-ssr] (ecmascript)");
var useSessionStorage = function(key, initialValue, raw) {
    if (!util_1.isBrowser) {
        return [
            initialValue,
            function() {}
        ];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = react_1.useState(function() {
        try {
            var sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            } else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        } catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react_1.useEffect(function() {
        try {
            var serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        } catch (_a) {
        // If user is in private mode or has storage restriction
        // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [
        state,
        setState
    ];
};
exports.default = useSessionStorage;

}.call(this) }),

};

//# sourceMappingURL=_9c67b3._.js.map