(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_adb533._.js", {

"[project]/src/hooks/use-layout.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useLayout": ()=>useLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jotai@2.7.0_@types+react@18.2.74_react@18.2.0/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jotai@2.7.0_@types+react@18.2.74_react@18.2.0/node_modules/jotai/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/enums.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
'use client';
;
;
// 1. set initial atom for isomorphic layout
const isomorphicLayoutAtom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"](typeof window !== 'undefined' ? localStorage.getItem('isomorphic-layout') : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_OPTIONS"].HYDROGEN);
const isomorphicLayoutAtomWithPersistence = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"]((get)=>get(isomorphicLayoutAtom), (get, set, newStorage)=>{
    set(isomorphicLayoutAtom, newStorage);
    localStorage.setItem('isomorphic-layout', newStorage);
});
function useLayout() {
    _s();
    const [layout, setLayout] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtom"](isomorphicLayoutAtomWithPersistence);
    return {
        layout: layout === null ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_OPTIONS"].HYDROGEN : layout,
        setLayout
    };
}
_s(useLayout, "saxqq01HWO57Bwn+WfytH33STs8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtom"]
    ];
});

})()),
"[project]/src/hooks/use-media.ts [app-client] (ecmascript) {locals}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
'use client';
;

})()),
"[project]/src/hooks/use-media.ts [app-client] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$media$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/src/hooks/use-media.ts [app-client] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/src/hooks/use-direction.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useDirection": ()=>useDirection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jotai@2.7.0_@types+react@18.2.74_react@18.2.0/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jotai@2.7.0_@types+react@18.2.74_react@18.2.0/node_modules/jotai/esm/react.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
'use client';
;
// 1. set initial atom for isomorphic direction
const isomorphicDirectionAtom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"](typeof window !== 'undefined' ? localStorage.getItem('iso-direction') : 'ltr');
const isomorphicDirectionAtomWithPersistence = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"]((get)=>get(isomorphicDirectionAtom), (get, set, newStorage)=>{
    set(isomorphicDirectionAtom, newStorage);
    localStorage.setItem('iso-direction', newStorage);
});
function useDirection() {
    _s();
    const [direction, setDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtom"](isomorphicDirectionAtomWithPersistence);
    return {
        direction: direction === null ? 'ltr' : direction,
        setDirection
    };
}
_s(useDirection, "hU7+en936aCMk4sHc8/xDXZiilk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtom"]
    ];
});

})()),
"[project]/src/hooks/use-theme-color.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useApplyColorPreset": ()=>useApplyColorPreset,
    "useColorPresetName": ()=>useColorPresetName,
    "useColorPresets": ()=>useColorPresets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jotai@2.7.0_@types+react@18.2.74_react@18.2.0/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jotai@2.7.0_@types+react@18.2.74_react@18.2.0/node_modules/jotai/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$update$2d$theme$2d$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/update-theme-color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$color$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/color-presets.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature();
'use client';
;
;
;
;
// color preset hook
function getLocalStoragePreset() {
    if (typeof window !== 'undefined') {
        const localStorageValue = localStorage.getItem('isomorphic-preset');
        return JSON.parse(String(localStorageValue));
    }
}
const colorPresetsAtom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"](typeof window !== 'undefined' ? getLocalStoragePreset() : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$color$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PRESET_COLORS"]);
const colorPresetsAtomWithPersistence = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"]((get)=>get(colorPresetsAtom), (get, set, newStorage)=>{
    set(colorPresetsAtom, newStorage);
    localStorage.setItem('isomorphic-preset', JSON.stringify(newStorage));
});
function useColorPresets() {
    _s();
    const [colorPresets, setColorPresets] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtom"](colorPresetsAtomWithPersistence);
    return {
        colorPresets: colorPresets === null ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$color$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PRESET_COLORS"] : colorPresets,
        setColorPresets
    };
}
_s(useColorPresets, "W2SXCb7OAW+xcW0JN+bgkWMsQ4E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtom"]
    ];
});
//  color preset name hook
const colorPresetNameAtom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"](typeof window !== 'undefined' ? localStorage.getItem('isomorphic-preset-name') : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$color$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PRESET_COLOR_NAME"]);
const colorPresetNameAtomWithPersistence = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"]((get)=>get(colorPresetNameAtom), (get, set, newStorage)=>{
    set(colorPresetNameAtom, newStorage);
    localStorage.setItem('isomorphic-preset-name', newStorage);
});
function useColorPresetName() {
    _s1();
    const [colorPresetName, setColorPresetName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtom"](colorPresetNameAtomWithPersistence);
    return {
        colorPresetName: colorPresetName === null ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$color$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PRESET_COLOR_NAME"] : colorPresetName,
        setColorPresetName
    };
}
_s1(useColorPresetName, "dcYpOV6caM+A9Q3H64vbErtdCzQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$7$2e$0_$40$types$2b$react$40$18$2e$2$2e$74_react$40$18$2e$2$2e$0$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtom"]
    ];
});
function useApplyColorPreset(colorPresets) {
    _s2();
    const COLOR_PRESETS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$color$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresets"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let colorLighter = COLOR_PRESETS[0].colors.lighter;
        let colorLight = COLOR_PRESETS[0].colors.light;
        let colorDefault = COLOR_PRESETS[0].colors.default;
        let colorDark = COLOR_PRESETS[0].colors.dark;
        let colorForeground = COLOR_PRESETS[0].colors.foreground;
        if (colorPresets) {
            colorLighter = colorPresets.lighter;
            colorLight = colorPresets.light;
            colorDefault = colorPresets.default;
            colorDark = colorPresets.dark;
            colorForeground = colorPresets.foreground;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$update$2d$theme$2d$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateThemeColor"](colorLighter, colorLight, colorDefault, colorDark, colorForeground);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        colorPresets
    ]);
}
_s2(useApplyColorPreset, "sbwjgaUlMdpegxRTkDxW4U11EwY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$color$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresets"]
    ];
});

})()),
"[project]/src/hooks/use-is-mounted.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useIsMounted": ()=>useIsMounted
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
'use client';
;
function useIsMounted() {
    _s();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>setMounted(true), []);
    return mounted;
}
_s(useIsMounted, "LrrVfNW3d1raFE0BNzCTILYmIfo=");

})()),
"[project]/src/hooks/use-window-scroll.ts [app-client] (ecmascript) {locals}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/src/hooks/use-window-scroll.ts [app-client] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$window$2d$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/src/hooks/use-window-scroll.ts [app-client] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/src/hooks/use-window-size.ts [app-client] (ecmascript) {locals}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
'use client';
;

})()),
"[project]/src/hooks/use-window-size.ts [app-client] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$window$2d$size$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/src/hooks/use-window-size.ts [app-client] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/src/hooks/use-client-width.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useClientWidth": ()=>useClientWidth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
'use client';
;
function useClientWidth() {
    _s();
    const [clientWidth, set] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    function handleClientWidth() {
        set(document.body.clientWidth);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        handleClientWidth();
        window.addEventListener('resize', handleClientWidth);
        return ()=>{
            window.removeEventListener('resize', handleClientWidth);
        };
    }, []);
    return Number(clientWidth);
}
_s(useClientWidth, "pOlZjSyYsGagstYo5araxJWGCPk=");

})()),
"[project]/src/hooks/use-event-listener.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useEventListener": ()=>useEventListener,
    "useIsomorphicEffect": ()=>useIsomorphicEffect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
const useIsomorphicEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function useEventListener(eventName, handler, element, options) {
    _s();
    // Create a ref that stores handler
    const savedHandler = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](handler);
    useIsomorphicEffect(()=>{
        savedHandler.current = handler;
    }, [
        handler
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // Define the listening target
        const targetElement = element?.current ?? window;
        if (!(targetElement && targetElement.addEventListener)) return;
        // Create event listener that calls handler function stored in ref
        const listener = (event)=>savedHandler.current(event);
        targetElement.addEventListener(eventName, listener, options);
        // Remove event listener on cleanup
        return ()=>{
            targetElement.removeEventListener(eventName, listener, options);
        };
    }, [
        eventName,
        element,
        options
    ]);
}
_s(useEventListener, "fGREsH8De7anQkj/ShzSNFM7UYA=", false, function() {
    return [
        useIsomorphicEffect
    ];
});
;

})()),
"[project]/src/utils/class-names.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$0$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$2$2e$2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tailwind-merge@2.2.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function cn(...inputs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$2$2e$2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$0$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"](inputs));
}

})()),
"[project]/src/utils/hex-to-rgb.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "hexToRGB": ()=>hexToRGB
});
function hexToRGB(hex) {
    if (!hex) return '';
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r} ${g} ${b}`;
}

})()),
"[project]/src/utils/update-theme-color.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "updateThemeColor": ()=>updateThemeColor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$hex$2d$to$2d$rgb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/hex-to-rgb.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function updateThemeColor(primaryLighter, primaryLight, primaryDefault, primaryDark, primaryForeground) {
    document.documentElement.style.setProperty('--primary-dark', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$hex$2d$to$2d$rgb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRGB"](primaryDark));
    document.documentElement.style.setProperty('--primary-light', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$hex$2d$to$2d$rgb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRGB"](primaryLight));
    document.documentElement.style.setProperty('--primary-lighter', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$hex$2d$to$2d$rgb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRGB"](primaryLighter));
    document.documentElement.style.setProperty('--primary-default', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$hex$2d$to$2d$rgb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRGB"](primaryDefault));
    document.documentElement.style.setProperty('--primary-foreground', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$hex$2d$to$2d$rgb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRGB"](primaryForeground));
}

})()),
"[project]/src/utils/use-pathname-active.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useActivePathname": ()=>useActivePathname
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
'use client';
;
function useActivePathname() {
    _s();
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]();
    /**
   * Checks if a given pathname is active.
   * @param {string | DropdownItemType[]} belongsTo - The value to compare the pathname against of an href array
   * @return {boolean} Returns true if the pathname is active, false otherwise.
   */ function isActive(belongsTo) {
        let isActive = false;
        if (typeof belongsTo === 'string') {
            isActive = pathname === belongsTo;
        } else {
            isActive = belongsTo?.some((item)=>item?.href === pathname || item?.subMenuItems?.some((subItem)=>subItem.href === pathname));
        }
        return isActive;
    }
    return {
        isActive
    };
}
_s(useActivePathname, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});

})()),
"[project]/src/config/routes.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "routes": ()=>routes
});
const routes = {
    eCommerce: {
        dashboard: '/ecommerce',
        products: '/ecommerce/products',
        createProduct: '/ecommerce/products/create',
        productDetails: (slug)=>`/ecommerce/products/${slug}`,
        ediProduct: (slug)=>`/ecommerce/products/${slug}/edit`,
        categories: '/ecommerce/categories',
        createCategory: '/ecommerce/categories/create',
        editCategory: (id)=>`/ecommerce/categories/${id}/edit`,
        orders: '/ecommerce/orders',
        createOrder: '/ecommerce/orders/create',
        orderDetails: (id)=>`/ecommerce/orders/${id}`,
        editOrder: (id)=>`/ecommerce/orders/${id}/edit`,
        reviews: '/ecommerce/reviews',
        shop: '/ecommerce/shop',
        cart: '/ecommerce/cart',
        checkout: '/ecommerce/checkout',
        trackingId: (id)=>`/ecommerce/tracking/${id}`
    },
    searchAndFilter: {
        realEstate: '/search/real-estate',
        nft: '/search/nft',
        flight: '/search/flight'
    },
    support: {
        dashboard: '/support',
        inbox: '/support/inbox',
        supportCategory: (category)=>`/support/inbox/${category}`,
        messageDetails: (id)=>`/support/inbox/${id}`,
        snippets: '/support/snippets',
        createSnippet: '/support/snippets/create',
        viewSnippet: (id)=>`/support/snippets/${id}`,
        editSnippet: (id)=>`/support/snippets/${id}/edit`,
        templates: '/support/templates',
        createTemplate: '/support/templates/create',
        viewTemplate: (id)=>`/support/templates/${id}`,
        editTemplate: (id)=>`/support/templates/${id}/edit`
    },
    logistics: {
        dashboard: '/logistics',
        shipmentList: '/logistics/shipments',
        customerProfile: '/logistics/customer-profile',
        createShipment: '/logistics/shipments/create',
        editShipment: (id)=>`/logistics/shipments/${id}/edit`,
        shipmentDetails: (id)=>`/logistics/shipments/${id}`,
        tracking: (id)=>`/logistics/tracking/${id}`
    },
    appointment: {
        dashboard: '/appointment',
        appointmentList: '/appointment/list'
    },
    executive: {
        dashboard: '/executive'
    },
    jobBoard: {
        dashboard: '/job-board'
    },
    analytics: '/analytics',
    financial: {
        dashboard: '/financial'
    },
    file: {
        dashboard: '/file',
        manager: '/file-manager',
        upload: '/file-manager/upload',
        create: '/file-manager/create'
    },
    pos: {
        index: '/point-of-sale'
    },
    eventCalendar: '/event-calendar',
    rolesPermissions: '/roles-permissions',
    invoice: {
        home: '/invoice',
        create: '/invoice/create',
        details: (id)=>`/invoice/${id}`,
        edit: (id)=>`/invoice/${id}/edit`,
        builder: '/invoice/builder'
    },
    widgets: {
        cards: '/widgets/cards',
        icons: '/widgets/icons',
        charts: '/widgets/charts',
        maps: '/widgets/maps',
        banners: '/widgets/banners'
    },
    tables: {
        basic: '/tables/basic',
        collapsible: '/tables/collapsible',
        enhanced: '/tables/enhanced',
        pagination: '/tables/pagination',
        search: '/tables/search',
        stickyHeader: '/tables/sticky-header'
    },
    multiStep: '/multi-step',
    forms: {
        profileSettings: '/forms/profile-settings',
        notificationPreference: '/forms/profile-settings/notification',
        personalInformation: '/forms/profile-settings/profile',
        newsletter: '/forms/newsletter'
    },
    emailTemplates: '/email-templates',
    profile: '/profile',
    welcome: '/welcome',
    comingSoon: '/coming-soon',
    accessDenied: '/access-denied',
    notFound: '/not-found',
    maintenance: '/maintenance',
    blank: '/blank',
    auth: {
        signUp1: '/auth/sign-up-1',
        signUp2: '/auth/sign-up-2',
        signUp3: '/auth/sign-up-3',
        signUp4: '/auth/sign-up-4',
        signUp5: '/auth/sign-up-5',
        // sign in
        signIn1: '/auth/sign-in-1',
        signIn2: '/auth/sign-in-2',
        signIn3: '/auth/sign-in-3',
        signIn4: '/auth/sign-in-4',
        signIn5: '/auth/sign-in-5',
        // forgot password
        forgotPassword1: '/auth/forgot-password-1',
        forgotPassword2: '/auth/forgot-password-2',
        forgotPassword3: '/auth/forgot-password-3',
        forgotPassword4: '/auth/forgot-password-4',
        forgotPassword5: '/auth/forgot-password-5',
        // OTP
        otp1: '/auth/otp-1',
        otp2: '/auth/otp-2',
        otp3: '/auth/otp-3',
        otp4: '/auth/otp-4',
        otp5: '/auth/otp-5'
    },
    signIn: '/signin'
};

})()),
"[project]/src/config/constants.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CART_KEY": ()=>CART_KEY,
    "CHECKOUT": ()=>CHECKOUT,
    "CURRENCY_CODE": ()=>CURRENCY_CODE,
    "CURRENCY_OPTIONS": ()=>CURRENCY_OPTIONS,
    "DUMMY_ID": ()=>DUMMY_ID,
    "LOCALE": ()=>LOCALE,
    "POS_CART_KEY": ()=>POS_CART_KEY,
    "ROLES": ()=>ROLES,
    "ROW_PER_PAGE_OPTIONS": ()=>ROW_PER_PAGE_OPTIONS
});
const CART_KEY = 'isomorphic-cart';
const POS_CART_KEY = 'isomorphic-pos-cart';
const DUMMY_ID = 'FC6723757651DB74';
const CHECKOUT = 'isomorphic-checkout';
const CURRENCY_CODE = 'USD';
const LOCALE = 'en';
const CURRENCY_OPTIONS = {
    formation: 'en-US',
    fractions: 2
};
const ROW_PER_PAGE_OPTIONS = [
    {
        value: 5,
        name: '5'
    },
    {
        value: 10,
        name: '10'
    },
    {
        value: 15,
        name: '15'
    },
    {
        value: 20,
        name: '20'
    }
];
const ROLES = {
    Administrator: 'Administrator',
    Manager: 'Manager',
    Sales: 'Sales',
    Support: 'Support',
    Developer: 'Developer',
    HRD: 'HR Department',
    RestrictedUser: 'Restricted User',
    Customer: 'Customer'
};

})()),
"[project]/src/config/color-presets.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DEFAULT_PRESET_COLORS": ()=>DEFAULT_PRESET_COLORS,
    "DEFAULT_PRESET_COLOR_NAME": ()=>DEFAULT_PRESET_COLOR_NAME,
    "presetDark": ()=>presetDark,
    "presetLight": ()=>presetLight,
    "usePresets": ()=>usePresets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$3$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-themes@0.3.0_react-dom@18.2.0_react@18.2.0/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
const presetLight = {
    lighter: '#f1f1f1',
    light: '#666666',
    default: '#111111',
    dark: '#000000',
    foreground: '#ffffff'
};
const presetDark = {
    lighter: '#222222',
    light: '#929292',
    default: '#f1f1f1',
    dark: '#ffffff',
    foreground: '#111111'
};
const DEFAULT_PRESET_COLORS = {
    lighter: '#d7e3fe',
    light: '#608efb',
    default: '#3872fa',
    dark: '#1d58d8',
    foreground: '#ffffff'
};
const DEFAULT_PRESET_COLOR_NAME = 'Blue';
const usePresets = ()=>{
    _s();
    const { theme } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$3$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]();
    return [
        {
            name: DEFAULT_PRESET_COLOR_NAME,
            colors: DEFAULT_PRESET_COLORS
        },
        {
            name: 'Black',
            colors: {
                lighter: theme === 'light' ? presetLight.lighter : presetDark.lighter,
                light: theme === 'light' ? presetLight.light : presetDark.light,
                default: theme === 'light' ? presetLight.default : presetDark.default,
                dark: theme === 'light' ? presetLight.dark : presetDark.dark,
                foreground: theme === 'light' ? presetLight.foreground : presetDark.foreground
            }
        },
        {
            name: 'Teal',
            colors: {
                lighter: '#ccfbf1',
                light: '#5eead4',
                default: '#0d9488',
                dark: '#115e59',
                foreground: '#ffffff'
            }
        },
        {
            name: 'Violet',
            colors: {
                lighter: '#ede9fe',
                light: '#a5b4fc',
                default: '#7c3aed',
                dark: '#4c1d95',
                foreground: '#ffffff'
            }
        },
        {
            name: 'Rose',
            colors: {
                lighter: '#ffe4e6',
                light: '#fda4af',
                default: '#e11d48',
                dark: '#be123c',
                foreground: '#ffffff'
            }
        },
        {
            name: 'Yellow',
            colors: {
                lighter: '#fef9c3',
                light: '#fde047',
                default: '#ca8a04',
                dark: '#a16207',
                foreground: '#ffffff'
            }
        }
    ];
};
_s(usePresets, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$3$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});

})()),
"[project]/src/data/messages.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "messagesData": ()=>messagesData
});
const messagesData = [
    {
        id: 1,
        message: `It is nice to be chatting with you. Omnis,
        quidem non. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
        avatar: [
            'https://randomuser.me/api/portraits/men/51.jpg'
        ],
        name: 'Wade Warren',
        unRead: true,
        sendTime: '2023-06-01T09:35:31.820Z'
    },
    {
        id: 2,
        message: ` Oh... Let's move on to something else for a bit. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
        avatar: [
            'https://randomuser.me/api/portraits/men/40.jpg'
        ],
        name: 'Jane Cooper',
        unRead: true,
        sendTime: '2023-05-30T09:35:31.820Z'
    },
    {
        id: 3,
        message: `You: I never received any phone calls about it. Omnis,
        quidem non. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
        avatar: [
            'https://randomuser.me/api/portraits/women/11.jpg'
        ],
        name: 'Leslie Alexander',
        unRead: false,
        sendTime: '2023-06-01T09:35:31.820Z'
    },
    {
        id: 4,
        message: `You: But you'll need to type in every possible word. Omnis,
        quidem non. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
        avatar: [
            'https://randomuser.me/api/portraits/men/36.jpg'
        ],
        name: 'John Doe',
        unRead: false,
        sendTime: '2023-05-21T09:35:31.820Z'
    },
    {
        id: 5,
        message: `They were delighted and set to work immediately. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
        avatar: [
            'https://randomuser.me/api/portraits/men/50.jpg',
            'https://randomuser.me/api/portraits/women/57.jpg'
        ],
        name: 'Design & Frontend',
        unRead: true,
        sendTime: '2023-06-01T09:35:31.820Z'
    },
    {
        id: 6,
        message: `Hows going everything in our laravel project. Omnis,
        quidem non. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
        avatar: [
            'https://randomuser.me/api/portraits/women/0.jpg',
            'https://randomuser.me/api/portraits/men/22.jpg'
        ],
        name: 'Laravel',
        unRead: true,
        sendTime: '2023-05-15T09:35:31.820Z'
    },
    {
        id: 7,
        name: 'WordPress',
        avatar: [
            'https://randomuser.me/api/portraits/men/94.jpg',
            'https://randomuser.me/api/portraits/women/11.jpg'
        ],
        unRead: false,
        sendTime: '2023-05-16T09:35:31.820Z'
    },
    {
        id: 8,
        message: `You: which is actually pretty clever and funny, inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
        avatar: [
            'https://randomuser.me/api/portraits/men/43.jpg'
        ],
        name: 'Jenny Doe',
        unRead: false,
        sendTime: '2023-05-01T09:35:31.820Z'
    },
    {
        id: 9,
        message: `You could try ELIZA bot, it was a software tween herself. Omnis,
        quidem non. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
        avatar: [
            'https://randomuser.me/api/portraits/men/75.jpg'
        ],
        name: 'Bruce Warren',
        unRead: true,
        sendTime: '2023-04-01T09:35:31.820Z'
    }
];

})()),
"[project]/src/data/notifications.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "notificationsData": ()=>notificationsData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$truck$2d$solid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/truck-solid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$brush$2d$solid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/brush-solid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$cube$2d$solid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/cube-solid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$file$2d$stack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/file-stack.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$cloud$2d$task$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/cloud-task.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$shopping$2d$bag$2d$solid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/shopping-bag-solid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$bulb$2d$solid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/bulb-solid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$parcel$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/parcel-map.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
const notificationsData = [
    {
        id: 1,
        name: 'Invitation for crafting engaging designs',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$brush$2d$solid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        unRead: true,
        sendTime: '2023-06-01T09:35:31.820Z'
    },
    {
        id: 2,
        name: 'Isomorphic dashboard redesign',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$cube$2d$solid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        unRead: true,
        sendTime: '2023-05-30T09:35:31.820Z'
    },
    {
        id: 3,
        name: '3 New Incoming Project Files:',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$file$2d$stack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        unRead: false,
        sendTime: '2023-06-01T09:35:31.820Z'
    },
    {
        id: 4,
        name: 'Swornak purchased isomorphic',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$shopping$2d$bag$2d$solid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        unRead: false,
        sendTime: '2023-05-21T09:35:31.820Z'
    },
    {
        id: 5,
        name: 'Task #45890 merged with #45890 in “Ads Pro Admin Dashboard project:',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$cloud$2d$task$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        unRead: true,
        sendTime: '2023-06-01T09:35:31.820Z'
    },
    {
        id: 6,
        name: '3 new application design concepts added',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$bulb$2d$solid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        unRead: true,
        sendTime: '2023-05-15T09:35:31.820Z'
    },
    {
        id: 7,
        name: 'Your order has been placed',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$parcel$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        unRead: false,
        sendTime: '2023-05-16T09:35:31.820Z'
    },
    {
        id: 8,
        name: 'Order has been shipped to #123221',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$truck$2d$solid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        unRead: false,
        sendTime: '2023-05-01T09:35:31.820Z'
    }
];

})()),
"[project]/src/app/(hydrogen)/layout.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>DefaultLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/enums.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$hydrogen$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/hydrogen/layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$helium$2f$helium$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/helium/helium-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$beryllium$2f$beryllium$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/beryllium/beryllium-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$is$2d$mounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-is-mounted.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/lithium/lithium-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$carbon$2f$carbon$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/carbon/carbon-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$boron$2f$boron$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/boron/boron-layout.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
function DefaultLayout({ children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](LayoutProvider, {
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/app/(hydrogen)/layout.tsx>",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
_c = DefaultLayout;
function LayoutProvider({ children }) {
    _s();
    const { layout } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayout"]();
    const isMounted = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$is$2d$mounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMounted"]();
    if (!isMounted) {
        return null;
    }
    if (layout === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_OPTIONS"].HELIUM) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$helium$2f$helium$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "<[project]/src/app/(hydrogen)/layout.tsx>",
            lineNumber: 31,
            columnNumber: 12
        }, this);
    }
    if (layout === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_OPTIONS"].LITHIUM) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "<[project]/src/app/(hydrogen)/layout.tsx>",
            lineNumber: 34,
            columnNumber: 12
        }, this);
    }
    if (layout === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_OPTIONS"].BERYLLIUM) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$beryllium$2f$beryllium$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "<[project]/src/app/(hydrogen)/layout.tsx>",
            lineNumber: 37,
            columnNumber: 12
        }, this);
    }
    if (layout === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_OPTIONS"].BORON) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$boron$2f$boron$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "<[project]/src/app/(hydrogen)/layout.tsx>",
            lineNumber: 40,
            columnNumber: 12
        }, this);
    }
    if (layout === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$enums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_OPTIONS"].CARBON) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$carbon$2f$carbon$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "<[project]/src/app/(hydrogen)/layout.tsx>",
            lineNumber: 43,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$hydrogen$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/app/(hydrogen)/layout.tsx>",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
_s(LayoutProvider, "OVhHY4qGvm+Jvtlm48JT4ccDz8I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayout"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$is$2d$mounted$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMounted"]
    ];
});
_c1 = LayoutProvider;
var _c, _c1;
__turbopack_refresh__.register(_c, "DefaultLayout");
__turbopack_refresh__.register(_c1, "LayoutProvider");

})()),
"[project]/src/app/(hydrogen)/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_adb533._.js.map