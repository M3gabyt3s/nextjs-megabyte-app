module.exports = {

"[project]/src/components/cards/widget-card.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const widgetCardClasses = {
    base: 'border border-muted bg-gray-0 p-5 dark:bg-gray-50 lg:p-7',
    rounded: {
        sm: 'rounded-sm',
        DEFAULT: 'rounded-lg',
        lg: 'rounded-xl',
        xl: 'rounded-2xl'
    }
};
function WidgetCard({ title, action, description, rounded = 'DEFAULT', className, headerClassName, actionClassName, titleClassName, descriptionClassName, children }, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](widgetCardClasses.base, widgetCardClasses.rounded[rounded], className),
        ref: ref,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](action && 'flex items-start justify-between', headerClassName),
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Title"], {
                                as: "h3",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('text-base font-semibold sm:text-lg', titleClassName),
                                children: title
                            }, void 0, false, {
                                fileName: "<[project]/src/components/cards/widget-card.tsx>",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            description && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: descriptionClassName,
                                children: description
                            }, void 0, false, {
                                fileName: "<[project]/src/components/cards/widget-card.tsx>",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/cards/widget-card.tsx>",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    action && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('ps-2', actionClassName),
                        children: action
                    }, void 0, false, {
                        fileName: "<[project]/src/components/cards/widget-card.tsx>",
                        lineNumber: 68,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/cards/widget-card.tsx>",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/cards/widget-card.tsx>",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](WidgetCard);
WidgetCard.displayName = 'WidgetCard';

})()),
"[project]/src/utils/add-spaces-to-camel-case.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addSpacesToCamelCase": ()=>addSpacesToCamelCase
});
function addSpacesToCamelCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}

})()),
"[project]/src/utils/format-number.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * Formats a number to a string representation with support for million (M) and billion (B) abbreviations.
 * @param {number} value - The number to be formatted.
 * @returns {string} - The formatted string.
 */ __turbopack_esm__({
    "formatNumber": ()=>formatNumber
});
function formatNumber(value) {
    // Check if the value is less than 0
    if (value < 0) {
        // Handle negative values separately and format the absolute value
        const absoluteValue = Math.abs(value);
        return `-${formatNumber(absoluteValue)}`;
    } else if (value >= 1e9) {
        // Format the value in billions
        const formattedValue = value / 1e9;
        return `${formattedValue.toFixed(1)}B`;
    } else if (value >= 1e6) {
        // Check if the value is between 1 million and 1 billion
        // Format the value in millions
        const formattedValue = value / 1e6;
        return `${formattedValue.toFixed(1)}M`;
    } else if (value >= 1000) {
        // Check if the value is between 1 thousand and 1 million
        // Format the value in thousands
        const formattedValue = value / 1000;
        return `${formattedValue.toFixed(1)}K`;
    } else {
        // If the value is less than 1 thousand, return the original value as a string
        return value.toString();
    }
}

})()),
"[project]/src/components/charts/custom-tooltip.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CustomTooltip": ()=>CustomTooltip
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$add$2d$spaces$2d$to$2d$camel$2d$case$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/add-spaces-to-camel-case.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$format$2d$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/format-number.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function isValidHexColor(colorCode) {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexColorRegex.test(colorCode);
}
function CustomTooltip({ label, prefix, active, postfix, payload, className, formattedNumber }) {
    if (!active) return null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('rounded-md border border-gray-300 bg-gray-0 shadow-2xl dark:bg-gray-100', className),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                className: "label mb-0.5 block bg-gray-100 p-2 px-2.5 text-center font-lexend text-xs font-semibold capitalize text-gray-600 dark:bg-gray-200/60 dark:text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "<[project]/src/components/charts/custom-tooltip.tsx>",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "px-3 py-1.5 text-xs",
                children: payload?.map((item, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "chart-tooltip-item flex items-center py-1.5",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: "me-1.5 h-2 w-2 rounded-full",
                                style: {
                                    backgroundColor: isValidHexColor(item.fill) ? item.fill === '#fff' ? item.stroke : item.fill : item.stroke
                                }
                            }, void 0, false, {
                                fileName: "<[project]/src/components/charts/custom-tooltip.tsx>",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                        as: "span",
                                        className: "capitalize",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$add$2d$spaces$2d$to$2d$camel$2d$case$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addSpacesToCamelCase"](item.dataKey),
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/charts/custom-tooltip.tsx>",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    ' ',
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                        as: "span",
                                        className: "font-medium text-gray-900 dark:text-gray-700",
                                        children: [
                                            prefix && prefix,
                                            formattedNumber ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$format$2d$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"](item.value) : item.value,
                                            postfix && postfix
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/charts/custom-tooltip.tsx>",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/charts/custom-tooltip.tsx>",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.dataKey + index, true, {
                        fileName: "<[project]/src/components/charts/custom-tooltip.tsx>",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/src/components/charts/custom-tooltip.tsx>",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/charts/custom-tooltip.tsx>",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/icons/trending-up.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TrendingUpIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function TrendingUpIcon({ strokeWidth, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: strokeWidth ?? 1.5,
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        }, void 0, false, {
            fileName: "<[project]/src/components/icons/trending-up.tsx>",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/icons/trending-up.tsx>",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/dashboard/storage-report.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>StorageReport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$widget$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/cards/widget-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/src/hooks/use-media.ts [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$use$2f$lib$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__useMedia$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-use@17.5.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/lib/useMedia.js [app-ssr] (ecmascript) {export default as useMedia}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$custom$2d$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/charts/custom-tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$trending$2d$up$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/trending-up.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$simplebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/simplebar.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
const data = [
    {
        month: 'Jan',
        image: 5000,
        video: 1500,
        document: 1500,
        music: 1500
    },
    {
        month: 'Feb',
        image: 8500,
        video: 1600,
        document: 5798,
        music: 2000
    },
    {
        month: 'Mar',
        image: 7000,
        video: 8300,
        document: 3000,
        music: 1375
    },
    {
        month: 'Apr',
        image: 3908,
        video: 1780,
        document: 6798,
        music: 5780
    },
    {
        month: 'May',
        image: 4890,
        video: 2500,
        document: 1500,
        music: 5000
    },
    {
        month: 'Jun',
        image: 8000,
        video: 3200,
        document: 7800,
        music: 4890
    },
    {
        month: 'Jul',
        image: 8500,
        video: 2500,
        document: 2500,
        music: 4890
    },
    {
        month: 'Aug',
        image: 3780,
        video: 3908,
        document: 9908,
        music: 2800
    },
    {
        month: 'Sep',
        image: 7800,
        video: 2800,
        document: 8500,
        music: 1908
    },
    {
        month: 'Oct',
        image: 5780,
        video: 1908,
        document: 7208,
        music: 2780
    },
    {
        month: 'Nov',
        image: 4780,
        video: 1920,
        document: 2930,
        music: 1500
    },
    {
        month: 'Dec',
        image: 7500,
        video: 3000,
        document: 9000,
        music: 1700
    }
];
function CustomYAxisTick({ x, y, payload }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("g", {
        transform: `translate(${x},${y})`,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("text", {
            x: 0,
            y: 0,
            dy: 16,
            textAnchor: "end",
            className: "fill-gray-500",
            children: [
                `${payload.value.toLocaleString()}`,
                "GB"
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function StorageReport({ className }) {
    const isMobile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$use$2f$lib$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__useMedia$7d$__["useMedia"]('(max-width: 768px)', false);
    const isDesktop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$use$2f$lib$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__useMedia$7d$__["useMedia"]('(max-width: 1440px)', false);
    const is2xl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$use$2f$lib$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__useMedia$7d$__["useMedia"]('(max-width: 1780px)', false);
    const isTablet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$use$2f$lib$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__useMedia$7d$__["useMedia"]('(max-width: 800px)', false);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$widget$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: 'Total Storage used',
        titleClassName: "font-normal text-gray-700 sm:text-base font-inter",
        description: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "flex items-center justify-start",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Title"], {
                    as: "h2",
                    className: "me-2 font-semibold",
                    children: "105,000 GB"
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                    lineNumber: 129,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                    className: "flex items-center leading-none text-gray-500",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                            as: "span",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('me-2 inline-flex items-center font-medium text-green'),
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$trending$2d$up$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "me-1 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, void 0),
                                "32.40%"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                            lineNumber: 133,
                            columnNumber: 13
                        }, void 0),
                        "last year"
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                    lineNumber: 132,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
            lineNumber: 128,
            columnNumber: 9
        }, void 0),
        descriptionClassName: "text-gray-500 mt-1.5",
        action: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "hidden @2xl:block",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Badge"], {
                    renderAsDot: true,
                    className: "me-0.5 bg-[#282ECA]"
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                    lineNumber: 149,
                    columnNumber: 11
                }, void 0),
                " Image",
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Badge"], {
                    renderAsDot: true,
                    className: "me-0.5 ms-4 bg-[#4052F6]"
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                    lineNumber: 150,
                    columnNumber: 11
                }, void 0),
                " Video",
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Badge"], {
                    renderAsDot: true,
                    className: "me-0.5 ms-4 bg-[#96C0FF]"
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                    lineNumber: 151,
                    columnNumber: 11
                }, void 0),
                " Documents",
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Badge"], {
                    renderAsDot: true,
                    className: "me-0.5 ms-4 bg-[#DEEAFC] dark:bg-[#7c88b2]"
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                    lineNumber: 152,
                    columnNumber: 11
                }, void 0),
                ' ',
                "Musics"
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
            lineNumber: 148,
            columnNumber: 9
        }, void 0),
        className: className,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$simplebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "h-96 w-full pt-9",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    ...isTablet && {
                        minWidth: '700px'
                    },
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: data,
                        barSize: isMobile ? 16 : isDesktop ? 28 : is2xl ? 32 : 46,
                        margin: {
                            left: 16
                        },
                        className: "[&_.recharts-tooltip-cursor]:fill-opacity-20 dark:[&_.recharts-tooltip-cursor]:fill-opacity-10 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500 [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "8 10",
                                strokeOpacity: 0.435
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "month",
                                axisLine: false,
                                tickLine: false
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                axisLine: false,
                                tickLine: false,
                                tick: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](CustomYAxisTick, {}, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                                    lineNumber: 181,
                                    columnNumber: 23
                                }, void 0)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$custom$2d$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomTooltip"], {}, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                                    lineNumber: 183,
                                    columnNumber: 33
                                }, void 0)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "image",
                                fill: "#282ECA",
                                stackId: "a"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "video",
                                stackId: "a",
                                fill: "#4052F6"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "document",
                                stackId: "a",
                                fill: "#96C0FF"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "music",
                                stackId: "a",
                                fill: "#DEEAFC"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                        lineNumber: 168,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                    lineNumber: 163,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
            lineNumber: 161,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/shared/file/dashboard/storage-report.tsx>",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/hooks/use-scrollable-slider.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useScrollableSlider": ()=>useScrollableSlider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
function useScrollableSlider() {
    const sliderEl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const sliderPrevBtn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const sliderNextBtn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    function scrollToTheRight() {
        let offsetWidth = sliderEl.current.offsetWidth;
        sliderEl.current.scrollLeft += offsetWidth / 2;
        sliderPrevBtn.current.classList.remove('opacity-0', 'invisible');
    }
    function scrollToTheLeft() {
        let offsetWidth = sliderEl.current.offsetWidth;
        sliderEl.current.scrollLeft -= offsetWidth / 2;
        sliderNextBtn.current.classList.remove('opacity-0', 'invisible');
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const filterBarEl = sliderEl.current;
        const prevBtn = sliderPrevBtn.current;
        const nextBtn = sliderNextBtn.current;
        const formPageHeaderEl = filterBarEl.classList.contains('formPageHeaderSliderElJS');
        initNextPrevBtnVisibility();
        // @ts-ignore
        function initNextPrevBtnVisibility() {
            let offsetWidth = filterBarEl.offsetWidth;
            let scrollWidth = filterBarEl.scrollWidth;
            // show next btn when scrollWidth is gather than offsetWidth
            if (scrollWidth > offsetWidth) {
                nextBtn?.classList.remove('opacity-0', 'invisible');
                if (formPageHeaderEl) {
                    filterBarEl?.classList.add('!-mb-[43px]');
                }
            } else {
                nextBtn?.classList.add('opacity-0', 'invisible');
                if (formPageHeaderEl) {
                    filterBarEl?.classList.remove('!-mb-[43px]');
                }
            }
            // hide prev btn initially
            prevBtn?.classList.add('opacity-0', 'invisible');
        }
        function visibleNextAndPrevBtnOnScroll() {
            let newScrollLeft = filterBarEl?.scrollLeft, offsetWidth = filterBarEl?.offsetWidth, scrollWidth = filterBarEl?.scrollWidth;
            // reach to the right end
            if (scrollWidth - newScrollLeft == offsetWidth) {
                nextBtn?.classList.add('opacity-0', 'invisible');
                prevBtn?.classList.remove('opacity-0', 'invisible');
            } else {
                nextBtn?.classList.remove('opacity-0', 'invisible');
            }
            // reach to the left end
            if (newScrollLeft === 0) {
                prevBtn?.classList.add('opacity-0', 'invisible');
                nextBtn?.classList.remove('opacity-0', 'invisible');
            } else {
                prevBtn?.classList.remove('opacity-0', 'invisible');
            }
        }
        window.addEventListener('resize', initNextPrevBtnVisibility);
        filterBarEl.addEventListener('scroll', visibleNextAndPrevBtnOnScroll);
        // clear event
        return ()=>{
            window.removeEventListener('resize', initNextPrevBtnVisibility);
            filterBarEl.removeEventListener('scroll', visibleNextAndPrevBtnOnScroll);
        };
    }, []);
    return {
        sliderEl,
        sliderPrevBtn,
        sliderNextBtn,
        scrollToTheRight,
        scrollToTheLeft
    };
}

})()),
"[project]/src/components/cards/metric-card.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>MetricCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const metricCardClasses = {
    base: 'border border-muted bg-gray-0 p-5 dark:bg-gray-50 lg:p-6',
    rounded: {
        sm: 'rounded-sm',
        DEFAULT: 'rounded-lg',
        lg: 'rounded-xl',
        xl: 'rounded-2xl'
    }
};
function MetricCard({ title, metric, icon, chart, info, rounded = 'DEFAULT', className, iconClassName, contentClassName, titleClassName, metricClassName, chartClassName, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](metricCardClasses.base, metricCardClasses.rounded[rounded], className),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center",
                        children: [
                            icon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 lg:h-12 lg:w-12', iconClassName),
                                children: icon
                            }, void 0, false, {
                                fileName: "<[project]/src/components/cards/metric-card.tsx>",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](icon && 'ps-3', contentClassName),
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('mb-0.5 text-gray-500', titleClassName),
                                        children: title
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/cards/metric-card.tsx>",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('font-lexend text-lg font-semibold text-gray-900 2xl:xl:text-xl dark:text-gray-700', metricClassName),
                                        children: metric
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/cards/metric-card.tsx>",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    info ? info : null
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/cards/metric-card.tsx>",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/cards/metric-card.tsx>",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    chart ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('h-12 w-20', chartClassName),
                        children: chart
                    }, void 0, false, {
                        fileName: "<[project]/src/components/cards/metric-card.tsx>",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/cards/metric-card.tsx>",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/cards/metric-card.tsx>",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/charts/circle-progressbar.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>CircleProgressBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const classes = {
    base: 'transform',
    startAngle: {
        0: 'rotate-0',
        45: '-rotate-45',
        90: '-rotate-90',
        180: '-rotate-180',
        270: '-rotate-[270deg]',
        360: '-rotate-[360deg]'
    },
    fixLabelAngle: {
        0: 'rotate-0',
        45: 'rotate-45',
        90: 'rotate-90',
        180: 'rotate-180',
        270: 'rotate-[270deg]',
        360: 'rotate-[360deg]'
    }
};
function CircleProgressBar({ percentage, size, strokeWidth, stroke, strokeClassName, progressColor, progressBarClassName, useParentResponsive, gradientColor, label, startAngle = 90 }) {
    const cx = size / 2;
    const cy = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - percentage / 100 * circumference;
    const progressBarRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const progressBarRefEl = progressBarRef.current;
        if (progressBarRefEl) {
            progressBarRefEl.style.transition = 'stroke-dashoffset 0.3s ease-in-out';
            progressBarRefEl.style.strokeDashoffset = offset.toString();
        }
        // Cleanup function to remove transition style when unmounting
        return ()=>{
            if (progressBarRefEl) {
                progressBarRefEl.style.transition = '';
            }
        };
    }, [
        offset
    ]);
    // Safari browser transform css issue with foreignObject
    const [isSafari, setSafari] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let isBrowserSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        setSafari(()=>isBrowserSafari);
    }, []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        ...!useParentResponsive && {
            width: size,
            height: size
        },
        viewBox: `0 0 ${size} ${size}`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('transition-all duration-200', !isSafari && classes.base, !isSafari && classes.startAngle[startAngle]),
        children: [
            gradientColor && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                    id: "gradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                            offset: "0%",
                            stopColor: progressColor
                        }, void 0, false, {
                            fileName: "<[project]/src/components/charts/circle-progressbar.tsx>",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                            offset: "100%",
                            stopColor: gradientColor
                        }, void 0, false, {
                            fileName: "<[project]/src/components/charts/circle-progressbar.tsx>",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/charts/circle-progressbar.tsx>",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/charts/circle-progressbar.tsx>",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("circle", {
                cx: cx,
                cy: cy,
                r: radius,
                fill: 'transparent',
                strokeWidth: strokeWidth,
                stroke: stroke,
                ...strokeClassName && {
                    className: strokeClassName
                }
            }, void 0, false, {
                fileName: "<[project]/src/components/charts/circle-progressbar.tsx>",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("circle", {
                ref: progressBarRef,
                cx: cx,
                cy: cy,
                r: radius,
                fill: "transparent",
                strokeWidth: strokeWidth,
                stroke: gradientColor ? 'url(#gradient)' : progressColor,
                strokeDasharray: `${circumference} ${circumference}`,
                strokeDashoffset: -offset,
                strokeLinecap: "round",
                ...progressBarClassName && {
                    className: progressBarClassName
                }
            }, void 0, false, {
                fileName: "<[project]/src/components/charts/circle-progressbar.tsx>",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            label && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("foreignObject", {
                x: 0,
                y: 0,
                width: size,
                height: size,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('flex h-full w-full flex-col items-center justify-center transition-all duration-200', !isSafari && 'transform', !isSafari && classes.fixLabelAngle[startAngle]),
                    children: label
                }, void 0, false, {
                    fileName: "<[project]/src/components/charts/circle-progressbar.tsx>",
                    lineNumber: 128,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/charts/circle-progressbar.tsx>",
                lineNumber: 127,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/charts/circle-progressbar.tsx>",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/icons/trending-down.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TrendingDownIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function TrendingDownIcon({ strokeWidth, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: strokeWidth ?? 1.5,
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
        }, void 0, false, {
            fileName: "<[project]/src/components/icons/trending-down.tsx>",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/icons/trending-down.tsx>",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/dashboard/file-stats.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FileStatGrid": ()=>FileStatGrid,
    "default": ()=>FileStats
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$scrollable$2d$slider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-scrollable-slider.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$metric$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/cards/metric-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$circle$2d$progressbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/charts/circle-progressbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$trending$2d$up$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/trending-up.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$trending$2d$down$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/trending-down.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
const filesStatData = [
    {
        id: 1,
        title: 'Total Images',
        metric: '36,476 GB',
        fill: '#3872FA',
        percentage: 32,
        increased: true,
        decreased: false,
        value: '+32.40'
    },
    {
        id: 2,
        title: 'Total Videos',
        metric: '53,406 GB',
        fill: '#3872FA',
        percentage: 48,
        increased: false,
        decreased: true,
        value: '-18.45'
    },
    {
        id: 3,
        title: 'Total Documents',
        metric: '90,875 GB',
        fill: '#EE0000',
        percentage: 89,
        increased: true,
        decreased: false,
        value: '+20.34'
    },
    {
        id: 4,
        title: 'Total Musics',
        metric: '63,076 GB',
        fill: '#3872FA',
        percentage: 54,
        increased: true,
        decreased: false,
        value: '+14.45'
    }
];
function FileStatGrid({ className }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: filesStatData.map((stat)=>{
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$metric$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: stat.title,
                metric: stat.metric,
                metricClassName: "3xl:text-[22px]",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('w-full max-w-full justify-between', className),
                chart: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$circle$2d$progressbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    percentage: stat.percentage,
                    size: 80,
                    stroke: "#D7E3FE",
                    strokeWidth: 7,
                    progressColor: stat.fill,
                    useParentResponsive: true,
                    label: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                        as: "span",
                        className: "font-lexend text-base font-medium text-gray-700",
                        children: [
                            stat.percentage,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                        lineNumber: 79,
                        columnNumber: 19
                    }, void 0),
                    strokeClassName: "dark:stroke-gray-300"
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                    lineNumber: 71,
                    columnNumber: 15
                }, void 0),
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                    className: "mt-3 flex items-center leading-none text-gray-500",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                            as: "span",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('me-2 inline-flex items-center font-medium', stat.increased ? 'text-green' : 'text-red'),
                            children: [
                                stat.increased ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$trending$2d$up$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "me-1 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                                    lineNumber: 99,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$trending$2d$down$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "me-1 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                                    lineNumber: 101,
                                    columnNumber: 19
                                }, this),
                                stat.value,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                            lineNumber: 91,
                            columnNumber: 15
                        }, this),
                        "last month"
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                    lineNumber: 90,
                    columnNumber: 13
                }, this)
            }, stat.id, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                lineNumber: 64,
                columnNumber: 11
            }, this);
        })
    }, void 0, false);
}
function FileStats({ className }) {
    const { sliderEl, sliderPrevBtn, sliderNextBtn, scrollToTheRight, scrollToTheLeft } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$scrollable$2d$slider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollableSlider"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('relative flex w-auto items-center overflow-hidden', className),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Button"], {
                title: "Prev",
                variant: "text",
                ref: sliderPrevBtn,
                onClick: ()=>scrollToTheLeft(),
                className: "!absolute -left-1 top-0 z-10 !h-full w-20 !justify-start rounded-none bg-gradient-to-r from-gray-0 via-gray-0/70 to-transparent px-0 ps-1 text-gray-500 hover:text-gray-900 3xl:hidden dark:from-gray-50 dark:via-gray-50/70",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretLeftBold"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "w-full overflow-hidden",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    ref: sliderEl,
                    className: "custom-scrollbar-x grid grid-flow-col gap-5 overflow-x-auto scroll-smooth 2xl:gap-6 3xl:gap-8",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](FileStatGrid, {
                        className: "min-w-[292px]"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Button"], {
                title: "Next",
                variant: "text",
                ref: sliderNextBtn,
                onClick: ()=>scrollToTheRight(),
                className: "!absolute right-0 top-0 z-10 !h-full w-20 !justify-end rounded-none bg-gradient-to-l from-gray-0 via-gray-0/70 to-transparent px-0 text-gray-500 hover:text-gray-900 3xl:hidden dark:from-gray-50 dark:via-gray-50/70",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretRightBold"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/file-stats.tsx>",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/dashboard/storage-summary.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>StorageSummary
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$widget$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/cards/widget-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/component/Label.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
const data = [
    {
        name: 'Available storage',
        value: 22
    },
    {
        name: 'Total used storage',
        value: 78
    }
];
const COLORS = [
    '#BFDBFE',
    '#0070F3'
];
function CustomLabel(props) {
    const { cx, cy } = props.viewBox;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("text", {
                x: cx,
                y: cy - 5,
                fill: "#111111",
                className: "recharts-text recharts-label",
                textAnchor: "middle",
                dominantBaseline: "central",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("tspan", {
                    alignmentBaseline: "middle",
                    fontSize: "36px",
                    children: [
                        props.value1,
                        " GB"
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("text", {
                x: cx,
                y: cy + 20,
                fill: "#666666",
                className: "recharts-text recharts-label",
                textAnchor: "middle",
                dominantBaseline: "central",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("tspan", {
                    fontSize: "14px",
                    children: props.value2
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function StorageSummary({ className }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$widget$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: 'Used Storage',
        headerClassName: "hidden",
        className: className,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "h-[373px] w-full @sm:py-3",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                        className: "[&_.recharts-layer:focus]:outline-none [&_.recharts-sector:focus]:outline-none dark:[&_.recharts-text.recharts-label]:first-of-type:fill-white",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                            data: data,
                            cornerRadius: 40,
                            innerRadius: 100,
                            outerRadius: 120,
                            paddingAngle: 10,
                            fill: "#BFDBFE",
                            stroke: "rgba(0,0,0,0)",
                            dataKey: "value",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    width: 30,
                                    position: "center",
                                    content: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](CustomLabel, {
                                        value1: data[1].value,
                                        value2: 'Used of 100'
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                data.map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: COLORS[index % COLORS.length]
                                    }, `cell-${index}`, false, {
                                        fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "  ",
                children: data.map((item, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center justify-start",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "me-2 h-2 w-2 rounded-full",
                                        style: {
                                            backgroundColor: COLORS[index]
                                        }
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                        as: "span",
                                        className: "font-lexend text-sm font-medium text-gray-900 dark:text-gray-700",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                as: "span",
                                children: [
                                    item.value,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/storage-summary.tsx>",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/icons/folder-solid.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>FolderIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function FolderIcon({ ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 56 56",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#F7A004",
                d: "M52.613 50.4H5.602v-42h46.626A3.773 3.773 0 0 1 56 12.174v34.84a3.387 3.387 0 0 1-3.387 3.387Z"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#fff",
                d: "M8.398 47.6V11.2h43.827c.536 0 .972.436.972.973V47.01a.589.589 0 0 1-.588.588H8.4Z"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "url(#b)",
                d: "m30.007 12.26-4.023-3.52a12.691 12.691 0 0 0-8.357-3.14h-6.836a3.795 3.795 0 0 0-3.795 3.795V22.4h39.199v-3.205A3.795 3.795 0 0 0 42.4 15.4h-4.036a12.691 12.691 0 0 1-8.357-3.14Z"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "url(#c)",
                d: "m24.413 12.26-4.022-3.52a12.692 12.692 0 0 0-8.357-3.14H5.197a3.795 3.795 0 0 0-3.795 3.795V22.4h39.2v-3.205a3.795 3.795 0 0 0-3.795-3.795H32.77a12.69 12.69 0 0 1-8.357-3.14Z"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#F9C10A",
                d: "M48.999 46.9V21.973a3.772 3.772 0 0 0-3.773-3.772H30.1a4.967 4.967 0 0 1-4.121-2.2l-.003.006c-3.598-7.27-13.35-7.606-13.35-7.606h-8.35A4.274 4.274 0 0 0 0 12.675v34.072A3.653 3.653 0 0 0 3.653 50.4h48.846a3.5 3.5 0 0 1-3.5-3.5Z"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                        id: "b",
                        x1: 6.996,
                        x2: 46.195,
                        y1: 14,
                        y2: 14,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                offset: 0.001,
                                stopColor: "#009DFF"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                offset: 0.355,
                                stopColor: "#217FFF"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                offset: 0.772,
                                stopColor: "#4261FF"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                offset: 1,
                                stopColor: "#4F56FF"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                        id: "c",
                        x1: 1.402,
                        x2: 40.601,
                        y1: 14,
                        y2: 14,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                offset: 0.001,
                                stopColor: "#00CE2C"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                offset: 1,
                                stopColor: "#0CA529"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/icons/folder-solid.tsx>",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/icons/folder-solid.tsx>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/manager/favorite.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Favorite
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
function Favorite() {
    const [favorite, setFavorite] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["ActionIcon"], {
        variant: "text",
        title: 'Favorite',
        onClick: ()=>setFavorite((prevFav)=>!prevFav),
        children: favorite ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiStarFill"], {
            className: "h-5 w-5 fill-orange text-orange"
        }, void 0, false, {
            fileName: "<[project]/src/app/shared/file/manager/favorite.tsx>",
            lineNumber: 16,
            columnNumber: 9
        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiStar"], {
            className: "h-5 w-5 text-gray-500"
        }, void 0, false, {
            fileName: "<[project]/src/app/shared/file/manager/favorite.tsx>",
            lineNumber: 18,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/shared/file/manager/favorite.tsx>",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/manager/file-grid/grid.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Card": ()=>Card,
    "default": ()=>Grid
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$manager$2f$favorite$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/manager/favorite.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
function Grid({ data, onDeleteItem }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "@container",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "grid grid-cols-1 gap-5 @md:grid-cols-2 @2xl:grid-cols-3 @3xl:grid-cols-4 @7xl:grid-cols-5",
            children: data?.map((item, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Card, {
                    item: item,
                    onDeleteItem: onDeleteItem
                }, index, false, {
                    fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                    lineNumber: 24,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function Card({ item, onDeleteItem, className }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('relative rounded-lg border border-muted bg-gray-0 p-5 shadow-sm transition-all hover:z-50 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-50', className),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("figure", {
                            className: "h-7 w-7",
                            children: item.file.image
                        }, void 0, false, {
                            fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$manager$2f$favorite$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Popover"], {
                                placement: "bottom-end",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Popover"].Trigger, {
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["ActionIcon"], {
                                            title: 'More Options',
                                            variant: "text",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiDotsThreeOutlineVerticalFill"], {
                                                className: "h-5 w-5 text-gray-500"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Popover"].Content, {
                                        className: "z-0 min-w-[140px] px-0 py-2 dark:bg-gray-100 [&>svg]:dark:fill-gray-100",
                                        children: ({ setOpen })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "px-2 text-gray-900",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Button"], {
                                                        variant: "text",
                                                        onClick: ()=>setOpen(false),
                                                        className: "group flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCopySimple"], {
                                                                className: "mr-2 h-5 w-5 text-gray-500 duration-300 group-hover:text-primary"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                                                lineNumber: 67,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Copy"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                                        lineNumber: 62,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Button"], {
                                                        variant: "text",
                                                        onClick: ()=>setOpen(false),
                                                        className: "group flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiShareFat"], {
                                                                className: "mr-2 h-5 w-5 text-gray-500 duration-300 group-hover:text-primary"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                                                lineNumber: 75,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Share"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Button"], {
                                                        variant: "text",
                                                        className: "group flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50",
                                                        onClick: ()=>{
                                                            onDeleteItem(item.id);
                                                            setOpen(false);
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiTrashSimple"], {
                                                                className: "mr-2 h-5 w-5 text-gray-500 duration-300 group-hover:text-primary"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                                                lineNumber: 86,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Delete"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Title"], {
                as: "h4",
                className: "mb-1 truncate text-sm font-medium text-gray-800",
                children: item?.file?.name
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                className: "flex list-inside list-disc gap-3.5",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                        className: "list-none text-sm text-gray-500",
                        children: item?.size
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                        className: "text-sm text-gray-500",
                        children: [
                            item?.totalFiles,
                            " files"
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/manager/file-grid/grid.tsx>",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/dashboard/recent-files.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>RecentFiles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$simplebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/simplebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$folder$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/folder-solid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$manager$2f$file$2d$grid$2f$grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/manager/file-grid/grid.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
const recentFiles = [
    {
        id: 1,
        file: {
            name: 'Employee Sheets',
            image: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$folder$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-files.tsx>",
                lineNumber: 14,
                columnNumber: 14
            }, this)
        },
        size: '2.4 GB',
        totalFiles: '135'
    },
    {
        id: 2,
        file: {
            name: 'Personal Assets',
            image: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$folder$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-files.tsx>",
                lineNumber: 23,
                columnNumber: 14
            }, this)
        },
        size: '1.8 GB',
        totalFiles: '40'
    },
    {
        id: 3,
        file: {
            name: 'Data & Prints',
            image: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$folder$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-files.tsx>",
                lineNumber: 32,
                columnNumber: 14
            }, this)
        },
        size: '528 MB',
        totalFiles: '122'
    },
    {
        id: 4,
        file: {
            name: 'Raw Images',
            image: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$folder$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-files.tsx>",
                lineNumber: 41,
                columnNumber: 14
            }, this)
        },
        size: '8 GB',
        totalFiles: '900'
    }
];
function RecentFiles({ className }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: className,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "col-span-full mb-3 flex items-center justify-between 2xl:mb-5",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Title"], {
                        as: "h3",
                        className: "text-lg font-semibold xl:text-xl",
                        children: "Recent Files"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/recent-files.tsx>",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/file-manager?layout=grid",
                        className: "text-sm font-medium text-gray-900 hover:underline",
                        children: "View all"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/recent-files.tsx>",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-files.tsx>",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$simplebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "grid grid-flow-col gap-5",
                    children: recentFiles.map((item)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$manager$2f$file$2d$grid$2f$grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            item: item,
                            onDeleteItem: ()=>null,
                            className: "min-w-[273px] hover:-translate-y-0 hover:shadow-none"
                        }, item.id, false, {
                            fileName: "<[project]/src/app/shared/file/dashboard/recent-files.tsx>",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/recent-files.tsx>",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-files.tsx>",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/recent-files.tsx>",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/icons/pdf-solid.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>PDFIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function PDFIcon({ strokeWidth, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 56 56",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#DC0A20",
                d: "M14.336 0h18.742l15.866 16.545v32.174c0 4.017-3.263 7.281-7.292 7.281H14.336a7.286 7.286 0 0 1-7.281-7.281V7.28A7.286 7.286 0 0 1 14.336 0Z"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/pdf-solid.tsx>",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M33.055 0v16.416h15.887L33.055 0Z",
                clipRule: "evenodd",
                opacity: 0.302
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/pdf-solid.tsx>",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#fff",
                d: "M27.528 25c-.711.01-1.206.462-1.446.733-.557.626-.582 1.485-.396 2.317.186.832.585 1.718 1.071 2.615.055.1.115.169.172.27-.978 1.78-2.324 3.718-3.498 5.264-1.525.362-2.984.54-3.861 1.527-.734.827-.785 2.084 0 2.816.341.3.82.452 1.236.458a1.93 1.93 0 0 0 .993-.28c1.025-.625 1.692-1.954 2.431-3.49l5.992-1.396c.9 1.114 1.835 2.206 2.95 2.55.517.16 1.063.141 1.55-.035.489-.177.945-.526 1.153-1.064a2.05 2.05 0 0 0-.973-2.552c-.727-.392-1.633-.459-2.642-.415-.515.023-1.06.078-1.613.158-.653-.996-1.533-2.312-2.3-3.594.45-.893.84-1.773 1.01-2.58.187-.9.15-1.788-.361-2.472a1.72 1.72 0 0 0-1.468-.83Zm.492 1.544c.222.287.297.776.145 1.506-.084.405-.37.949-.577 1.443-.297-.61-.607-1.236-.714-1.713-.143-.64-.044-.995.12-1.236.115-.188.271-.304.495-.317.236-.013.393.14.53.317Zm-.37 5.52c.574.914 1.185 1.866 1.685 2.639l-4.01.973c.81-1.227 1.658-2.478 2.325-3.613Zm6.667 3.741c.44.238.573.615.413 1.038-.151.39-.878.495-1.198.38-.435-.135-1.136-.941-1.778-1.606.178-.044.393-.074.561-.082.645-.028 1.4-.013 2.002.27Zm-11.979 2.083c-.424.69-.902 1.627-1.181 1.797a.595.595 0 0 1-.757-.045c-.223-.216-.262-.703.091-1.1.36-.346.873-.49 1.847-.652Z"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/pdf-solid.tsx>",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/icons/pdf-solid.tsx>",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/icons/doc-solid.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>DocIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function DocIcon({ ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 56 56",
        ...props,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#0263D1",
                d: "M14.336 0h18.742l15.866 16.545v32.174c0 4.017-3.263 7.281-7.292 7.281H14.336a7.286 7.286 0 0 1-7.281-7.281V7.28A7.286 7.286 0 0 1 14.336 0Z"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/doc-solid.tsx>",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M33.059 0v16.416h15.887L33.06 0Z",
                clipRule: "evenodd",
                opacity: 0.302
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/doc-solid.tsx>",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#fff",
                d: "M35.385 29.137H20.618c-.679 0-1.24-.55-1.24-1.228 0-.679.561-1.228 1.24-1.228h14.767a1.227 1.227 0 1 1 0 2.456Zm-4.922 14.767h-9.845c-.679 0-1.24-.55-1.24-1.228 0-.678.561-1.228 1.24-1.228h9.845a1.227 1.227 0 1 1 0 2.456Zm4.922-4.923H20.618c-.679 0-1.24-.549-1.24-1.227 0-.679.561-1.228 1.24-1.228h14.767a1.227 1.227 0 1 1 0 2.455Zm0-4.922H20.618c-.679 0-1.24-.55-1.24-1.228 0-.678.561-1.228 1.24-1.228h14.767a1.227 1.227 0 1 1 0 2.456Z"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/doc-solid.tsx>",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/icons/doc-solid.tsx>",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/icons/image-solid.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ImageIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function ImageIcon({ ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 56 56",
        ...props,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#0AC963",
                fillRule: "evenodd",
                d: "M7.293 0h18.73l15.865 16.551v32.156A7.296 7.296 0 0 1 34.594 56H7.293A7.296 7.296 0 0 1 0 48.707V7.293A7.296 7.296 0 0 1 7.293 0Z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/image-solid.tsx>",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M26 0v16.41h15.888L26 0Z",
                clipRule: "evenodd",
                opacity: 0.302
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/image-solid.tsx>",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M28.06 27.988H13.827a1.95 1.95 0 0 0-1.941 1.942v9.045a1.95 1.95 0 0 0 1.941 1.942H28.06c1.066 0 1.918-.876 1.918-1.942V29.93c0-1.066-.852-1.942-1.918-1.942Zm-10.348 2.44c1.16 0 2.083.946 2.083 2.083 0 1.16-.923 2.107-2.083 2.107a2.112 2.112 0 0 1-2.108-2.107c0-1.137.947-2.084 2.108-2.084Zm10.987 8.547c0 .355-.285.663-.64.663H13.83c-.356 0-.64-.308-.64-.663v-.379l2.581-2.58 2.131 2.13c.26.26.663.26.924 0l5.351-5.35 4.523 4.522v1.657Z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/image-solid.tsx>",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/icons/image-solid.tsx>",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/icons/xml-solid.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>XMLIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function XMLIcon({ ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 56 56",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#00733B",
                fillRule: "evenodd",
                d: "M14.348 0h18.73l15.864 16.551v32.156A7.296 7.296 0 0 1 41.65 56H14.348a7.296 7.296 0 0 1-7.293-7.293V7.293A7.296 7.296 0 0 1 14.348 0Z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/xml-solid.tsx>",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M33.055 0v16.41h15.888L33.055 0Z",
                clipRule: "evenodd",
                opacity: 0.302
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/xml-solid.tsx>",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M19.39 41.083h7.436V43.9H19.39v-2.817Zm9.756-14.397h7.459v2.794h-7.459v-2.794Zm-9.755 0h7.435v2.794H19.39v-2.794Zm9.755 4.736h7.459v2.817h-7.459v-2.817Zm-9.755 0h7.435v2.817H19.39v-2.817Zm9.755 4.925h7.459v2.818h-7.459v-2.818Zm-9.755 0h7.435v2.818H19.39v-2.818Zm9.755 4.736h7.459V43.9h-7.459v-2.817Z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons/xml-solid.tsx>",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/icons/xml-solid.tsx>",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/dashboard/quick-access.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "QuickAccessCard": ()=>QuickAccessCard,
    "default": ()=>QuickAccess
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$folder$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/folder-solid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$pdf$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/pdf-solid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$doc$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/doc-solid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$image$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/image-solid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$xml$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/xml-solid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$scrollable$2d$slider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-scrollable-slider.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
;
;
const mockdata = [
    {
        id: 1,
        file: {
            name: 'Employee Sheet',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$folder$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        }
    },
    {
        id: 2,
        file: {
            name: 'Employee history.pdf',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$pdf$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        }
    },
    {
        id: 3,
        file: {
            name: 'Final Changes.doc',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$doc$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        }
    },
    {
        id: 4,
        file: {
            name: 'Office Setup.img',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$image$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        }
    },
    {
        id: 5,
        file: {
            name: 'Salary Statement.xls',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$xml$2d$solid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        }
    }
];
function QuickAccessCard({ item, className }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](className, 'relative flex flex-col items-center justify-center rounded-lg bg-gray-50 p-7 dark:bg-gray-100/50'),
        children: [
            item?.file?.image && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "w-14",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](item.file.image, {}, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                className: "mt-5 w-full truncate text-center text-sm font-medium text-gray-700",
                children: item?.file?.name
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
function QuickAccess({ className }) {
    const { sliderEl, sliderPrevBtn, sliderNextBtn, scrollToTheRight, scrollToTheLeft } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$scrollable$2d$slider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollableSlider"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: className,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "col-span-full mb-3 flex items-center justify-between 2xl:mb-5",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Title"], {
                        as: "h3",
                        className: "text-lg font-semibold xl:text-xl",
                        children: "Quick Access"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: '/file-manager',
                        className: "text-sm font-medium text-gray-900 hover:underline",
                        children: "View all"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Button"], {
                        title: "Prev",
                        variant: "text",
                        ref: sliderPrevBtn,
                        onClick: ()=>scrollToTheLeft(),
                        className: "!absolute left-0 top-0 z-10 !h-full w-14 !justify-start rounded-none bg-gradient-to-r  from-gray-0 via-gray-0/70  to-transparent px-0 text-gray-500 hover:text-gray-900 3xl:hidden dark:from-gray-50 dark:via-gray-50/70",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretLeftBold"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "w-full overflow-hidden",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            ref: sliderEl,
                            className: "custom-scrollbar-x grid grid-flow-col gap-5 overflow-x-auto scroll-smooth",
                            children: mockdata.map((item)=>{
                                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](QuickAccessCard, {
                                    item: item
                                }, item.id, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                                    lineNumber: 116,
                                    columnNumber: 22
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Button"], {
                        title: "Next",
                        variant: "text",
                        ref: sliderNextBtn,
                        onClick: ()=>scrollToTheRight(),
                        className: "!absolute right-0 top-0 z-10 !h-full w-14 !justify-end rounded-none bg-gradient-to-l from-white via-white to-transparent px-0 text-gray-500  hover:text-gray-900 3xl:hidden dark:from-gray-50 dark:via-gray-50/70",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCaretRightBold"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/quick-access.tsx>",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/dashboard/activity-report.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ActivityReport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$widget$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/cards/widget-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.12.4_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$custom$2d$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/charts/custom-tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$simplebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/simplebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/src/hooks/use-media.ts [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$use$2f$lib$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__useMedia$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-use@17.5.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/lib/useMedia.js [app-ssr] (ecmascript) {export default as useMedia}");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
;
const data = [
    {
        month: 'Jan',
        downloads: 2000,
        uploads: 1000
    },
    {
        month: 'Feb',
        downloads: 4200,
        uploads: 3700
    },
    {
        month: 'Mar',
        downloads: 3000,
        uploads: 5800
    },
    {
        month: 'Apr',
        downloads: 5780,
        uploads: 3908
    },
    {
        month: 'May',
        downloads: 4080,
        uploads: 2500
    },
    {
        month: 'Jun',
        downloads: 2300,
        uploads: 5200
    },
    {
        month: 'Jul',
        downloads: 4890,
        uploads: 6500
    },
    {
        month: 'Aug',
        downloads: 3780,
        uploads: 4908
    },
    {
        month: 'Sep',
        downloads: 5800,
        uploads: 2800
    },
    {
        month: 'Oct',
        downloads: 6000,
        uploads: 1908
    },
    {
        month: 'Nov',
        downloads: 2780,
        uploads: 3908
    },
    {
        month: 'Dec',
        downloads: 7500,
        uploads: 3000
    }
];
function ActivityReport({ className }) {
    const isTablet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$use$2f$lib$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__useMedia$7d$__["useMedia"]('(max-width: 800px)', false);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$widget$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: 'Activity',
        titleClassName: "text-lg xl:text-xl font-semibold",
        className: className,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "mt-3 flex items-start 2xl:mt-5",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "me-9 flex items-start",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "me-3 rounded bg-[#00D1FF] p-2 text-white",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiDownloadSimple"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                        className: "text-gray-500",
                                        children: "Downloads"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                        className: "font-lexend text-sm font-semibold text-gray-900 2xl:text-base dark:text-gray-700",
                                        children: "15,556"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-start",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "me-3 rounded bg-[#6B46FF] p-2 text-white",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiUploadSimple"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                        className: "text-gray-500",
                                        children: "Uploads"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                        className: "font-lexend text-sm font-semibold text-gray-900 2xl:text-base dark:text-gray-700",
                                        children: "10,065"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$simplebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "h-96 w-full pt-9",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: "100%",
                        ...isTablet && {
                            minWidth: '700px'
                        },
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                            data: data,
                            margin: {
                                left: -16
                            },
                            className: "[&_.recharts-cartesian-axis-tick-value]:fill-gray-500 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                                            id: "downloads",
                                            x1: "0",
                                            y1: "0",
                                            x2: "0",
                                            y2: "1",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                                    offset: "5%",
                                                    stopColor: "#6B46FF",
                                                    stopOpacity: 0.1
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                                    offset: "95%",
                                                    stopColor: "#6B46FF",
                                                    stopOpacity: 0
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                                            id: "uploads",
                                            x1: "0",
                                            y1: "0",
                                            x2: "0",
                                            y2: "1",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                                    offset: "5%",
                                                    stopColor: "#00D1FF",
                                                    stopOpacity: 0.1
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                                    offset: "95%",
                                                    stopColor: "#00D1FF",
                                                    stopOpacity: 0
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "8 10",
                                    strokeOpacity: 0.435
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "month",
                                    axisLine: false,
                                    tickLine: false,
                                    className: " "
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                    tickLine: false,
                                    className: " "
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    content: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$custom$2d$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomTooltip"], {}, void 0, false, {
                                        fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                        lineNumber: 147,
                                        columnNumber: 33
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                                    type: "monotone",
                                    dataKey: "downloads",
                                    stroke: "#6B46FF",
                                    strokeWidth: 2,
                                    fillOpacity: 1,
                                    fill: "url(#downloads)"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$12$2e$4_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                                    type: "monotone",
                                    dataKey: "uploads",
                                    stroke: "#00D1FF",
                                    strokeWidth: 2,
                                    fillOpacity: 1,
                                    fill: "url(#uploads)"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/activity-report.tsx>",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/icons/trophy.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TrophyIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function TrophyIcon({ strokeWidth, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("g", {
            fill: "currentColor",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                    d: "M22 8.162v.073c0 .86 0 1.291-.207 1.643c-.207.352-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958Zm-20 0v.073c0 .86 0 1.291.207 1.643c.207.352.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162Z"
                }, void 0, false, {
                    fileName: "<[project]/src/components/icons/trophy.tsx>",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                    fillRule: "evenodd",
                    d: "M12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874c.476.586.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.374 26.374 0 0 1 12 2Zm.952 4.199l-.098-.176C12.474 5.34 12.284 5 12 5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354Z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "<[project]/src/components/icons/trophy.tsx>",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/icons/trophy.tsx>",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/icons/trophy.tsx>",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/data/members-data.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "members": ()=>members
});
const members = [
    {
        id: 1,
        thumbnail: 'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-12.webp',
        name: 'Albert Flores',
        email: 'tanya.hill@example.com',
        color: 'text-[#00a76f]',
        fill: 'bg-[#00a76f]/10',
        status: 'online'
    },
    {
        id: 2,
        thumbnail: 'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-11.webp',
        name: 'Jenny Wilson',
        email: 'michael.mitc@example.com',
        color: 'text-[#00b8d9]',
        fill: 'bg-[#00b8d9]/10',
        status: 'online'
    },
    {
        id: 3,
        thumbnail: 'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-10.webp',
        name: 'Bessie Cooper',
        email: 'curtis.weaver@example.com',
        color: 'text-[#ff5630]',
        fill: 'bg-[#ff5630]/10',
        status: 'busy'
    },
    {
        id: 4,
        thumbnail: 'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-07.webp',
        name: 'Wade Warren',
        email: 'debra.holt@example.com',
        color: 'text-[#00a76f]',
        fill: 'bg-[#00a76f]/10',
        status: 'away'
    },
    {
        id: 5,
        thumbnail: 'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
        name: 'Robert Fox',
        email: 'michael.mitc@example.com',
        color: 'text-[#00b8d9]',
        fill: 'bg-[#00b8d9]/10',
        status: 'busy'
    },
    {
        id: 6,
        thumbnail: 'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-14.webp',
        name: 'Sungla hass',
        email: 'sungla@example.com',
        color: 'text-[#ff5630]',
        fill: 'bg-[#ff5630]/10',
        status: 'online'
    },
    {
        id: 7,
        thumbnail: 'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
        name: 'Shoeie Fashio',
        email: 'fashio@example.com',
        color: 'text-[#00a76f]',
        fill: 'bg-[#00a76f]/10',
        status: 'offline'
    },
    {
        id: 8,
        thumbnail: 'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-13.webp',
        name: 'fume lueak',
        email: 'lueak@example.com',
        color: 'text-[#00b8d9]',
        fill: 'bg-[#00b8d9]/10',
        status: 'away'
    }
];

})()),
"[project]/src/app/shared/file/dashboard/members.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Members
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$widget$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/cards/widget-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$trophy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/trophy.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$simplebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/simplebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$members$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/members-data.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
function Members({ className }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: className,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Title"], {
                as: "h3",
                className: "mb-3 text-lg font-semibold text-gray-900 xl:text-xl 2xl:mb-5",
                children: "Members"
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$widget$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "",
                headerClassName: "hidden",
                className: "p-0 lg:p-0",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$simplebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        maxHeight: 450
                    },
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "p-5 lg:p-7",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "-me-2 grid gap-4 @sm:gap-5",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$members$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["members"].map((member)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-start pe-2",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "relative me-3 h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-100 @sm:h-12 @sm:w-12",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: member.thumbnail,
                                                alt: member.name,
                                                fill: true,
                                                sizes: "(max-width: 768px) 100vw",
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                                                lineNumber: 28,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                                            lineNumber: 27,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex w-full items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                                            className: "text-sm font-semibold text-gray-900 2xl:text-base dark:text-gray-700",
                                                            children: member.name
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                                                            lineNumber: 38,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                                            className: "text-gray-500",
                                                            children: member.email
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                                                            lineNumber: 41,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                                                    lineNumber: 37,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('flex h-10 w-10 items-center justify-center rounded-full', member.fill),
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$trophy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('h-6 w-6', member.color)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                                                        lineNumber: 49,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                                                    lineNumber: 43,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                                            lineNumber: 36,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, member.name + member.id, true, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/members.tsx>",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/hooks/use-table.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useTable": ()=>useTable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__external__lodash$2f$isString__ = __turbopack_external_require__("lodash/isString", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function useTable(initialData, countPerPage = 10, initialFilterState) {
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](initialData);
    /*
   * Dummy loading state.
   */ const [isLoading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setLoading(false);
    }, []);
    /*
   * Handle row selection
   */ const [selectedRowKeys, setSelectedRowKeys] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const handleRowSelect = (recordKey)=>{
        const selectedKeys = [
            ...selectedRowKeys
        ];
        if (selectedKeys.includes(recordKey)) {
            setSelectedRowKeys(selectedKeys.filter((key)=>key !== recordKey));
        } else {
            setSelectedRowKeys([
                ...selectedKeys,
                recordKey
            ]);
        }
    };
    const handleSelectAll = ()=>{
        if (selectedRowKeys.length === data.length) {
            setSelectedRowKeys([]);
        } else {
            setSelectedRowKeys(data.map((record)=>record.id));
        }
    };
    /*
   * Handle sorting
   */ const [sortConfig, setSortConfig] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        key: null,
        direction: null
    });
    function sortData(data, sortKey, sortDirection) {
        return [
            ...data
        ].sort((a, b)=>{
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            if (aValue < bValue) {
                return sortDirection === 'asc' ? -1 : 1;
            } else if (aValue > bValue) {
                return sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }
    const sortedData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        let newData = data;
        if (!sortConfig.key) {
            return newData;
        }
        return sortData(newData, sortConfig.key, sortConfig.direction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        sortConfig,
        data
    ]);
    function handleSort(key) {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({
            key,
            direction
        });
    }
    /*
   * Handle pagination
   */ const [currentPage, setCurrentPage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](1);
    function paginatedData(data = sortedData) {
        const start = (currentPage - 1) * countPerPage;
        const end = start + countPerPage;
        if (data.length > start) return data.slice(start, end);
        return data;
    }
    function handlePaginate(pageNumber) {
        setCurrentPage(pageNumber);
    }
    /*
   * Handle delete
   */ function handleDelete(id) {
        const updatedData = Array.isArray(id) ? data.filter((item)=>!id.includes(item.id)) : data.filter((item)=>item.id !== id);
        setData(updatedData);
    }
    /*
   * Handle Filters and searching
   */ const [searchTerm, setSearchTerm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]('');
    const [filters, setFilters] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](initialFilterState ?? {});
    function updateFilter(columnId, filterValue) {
        if (!Array.isArray(filterValue) && !__TURBOPACK__external__lodash$2f$isString__["default"](filterValue)) {
            throw new Error('filterValue data type should be string or array of any');
        }
        if (Array.isArray(filterValue) && filterValue.length !== 2) {
            throw new Error('filterValue data must be an array of length 2');
        }
        setFilters((prevFilters)=>({
                ...prevFilters,
                [columnId]: filterValue
            }));
    }
    function applyFilters() {
        const searchTermLower = searchTerm.toLowerCase();
        return sortedData.filter((item)=>{
            const isMatchingItem = Object.entries(filters).some(([columnId, filterValue])=>{
                if (Array.isArray(filterValue) && typeof filterValue[1] === 'object') {
                    const itemValue = new Date(item[columnId]);
                    return(// @ts-ignore
                    itemValue >= filterValue[0] && itemValue <= filterValue[1]);
                }
                if (Array.isArray(filterValue) && typeof filterValue[1] === 'string') {
                    const itemPrice = Math.ceil(Number(item[columnId]));
                    return itemPrice >= Number(filterValue[0]) && itemPrice <= Number(filterValue[1]);
                }
                if (__TURBOPACK__external__lodash$2f$isString__["default"](filterValue) && !Array.isArray(filterValue)) {
                    const itemValue = item[columnId]?.toString().toLowerCase();
                    if (itemValue !== filterValue.toString().toLowerCase()) {
                        return false;
                    }
                    return true;
                }
            });
            return isMatchingItem;
        })// global search after running filters
        .filter((item)=>Object.values(item).some((value)=>typeof value === 'object' ? value && Object.values(value).some((nestedItem)=>nestedItem && String(nestedItem).toLowerCase().includes(searchTermLower)) : value && String(value).toLowerCase().includes(searchTermLower)));
    }
    /*
   * Handle searching
   */ function handleSearch(searchValue) {
        setSearchTerm(searchValue);
    }
    function searchedData() {
        if (!searchTerm) return sortedData;
        const searchTermLower = searchTerm.toLowerCase();
        return sortedData.filter((item)=>Object.values(item).some((value)=>typeof value === 'object' ? value && Object.values(value).some((nestedItem)=>nestedItem && String(nestedItem).toLowerCase().includes(searchTermLower)) : value && String(value).toLowerCase().includes(searchTermLower)));
    }
    /*
   * Reset search and filters
   */ function handleReset() {
        setData(()=>initialData);
        handleSearch('');
        if (initialFilterState) return setFilters(initialFilterState);
    }
    /*
   * Set isFiltered and final filtered data
   */ const isFiltered = applyFilters().length > 0;
    function calculateTotalItems() {
        if (isFiltered) {
            return applyFilters().length;
        }
        if (searchTerm) {
            return searchedData().length;
        }
        return sortedData.length;
    }
    const filteredAndSearchedData = isFiltered ? applyFilters() : searchedData();
    const tableData = paginatedData(filteredAndSearchedData);
    /*
   * Go to first page when data is filtered and searched
   */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        handlePaginate(1);
    }, [
        isFiltered,
        searchTerm
    ]);
    // useTable returns
    return {
        isLoading,
        isFiltered,
        tableData,
        // pagination
        currentPage,
        handlePaginate,
        totalItems: calculateTotalItems(),
        // sorting
        sortConfig,
        handleSort,
        // row selection
        selectedRowKeys,
        setSelectedRowKeys,
        handleRowSelect,
        handleSelectAll,
        // searching
        searchTerm,
        handleSearch,
        // filters
        filters,
        updateFilter,
        applyFilters,
        handleDelete,
        handleReset
    };
}

})()),
"[project]/src/utils/filter-data.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "filterData": ()=>filterData
});
function filterData(array, filterKeys) {
    return array.filter((obj)=>{
        return Object.values(obj).some((key)=>filterKeys.includes(key));
    });
}

})()),
"[project]/src/hooks/use-column.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useColumn": ()=>useColumn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$filter$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/filter-data.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
function useColumn(columnsData) {
    const [checkedColumns, setCheckedColumns] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](columnsData.map((column)=>column.dataIndex));
    const visibleColumns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$filter$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterData"](columnsData, checkedColumns), [
        columnsData,
        checkedColumns
    ]);
    return {
        visibleColumns,
        checkedColumns,
        setCheckedColumns
    };
}

})()),
"[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "HeaderCell": ()=>HeaderCell,
    "ToggleColumns": ()=>ToggleColumns,
    "default": ()=>Table
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$table$40$7$2e$42$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rc$2d$table$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-table@7.42.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-table/es/index.js [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$table$40$7$2e$42$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rc$2d$table$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-table@7.42.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-table/es/index.js [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$add$2d$spaces$2d$to$2d$camel$2d$case$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/add-spaces-to-camel-case.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
const classes = {
    table: '[&_.rc-table-content]:overflow-x-auto [&_table]:w-full [&_.rc-table-row:hover]:bg-gray-50 [&_.rc-table-row-expand-icon-cell]:w-14',
    thead: '[&_thead]:text-left [&_thead]:rtl:text-right [&_th.rc-table-cell]:uppercase [&_th.rc-table-cell]:text-xs [&_th.rc-table-cell]:font-semibold [&_th.rc-table-cell]:tracking-wider [&_th.rc-table-cell]:text-gray-500',
    tCell: '[&_.rc-table-cell]:px-3 [&_th.rc-table-cell]:py-3 [&_td.rc-table-cell]:py-4',
    variants: {
        classic: '[&_thead]:bg-gray-100 [&_.rc-table-container]:border-x [&_.rc-table-container]:border-muted/70 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted/70 [&_thead]:border-y [&_thead]:border-muted/70',
        modern: '[&_thead_th]:bg-gray-100 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted/70 [&_thead_.rc-table-row-expand-icon-cell]:bg-gray-100',
        minimal: '[&_thead_th]:bg-gray-100 [&_thead_th:first-child]:rounded-ss-lg [&_thead_th:first-child]:rounded-es-lg [&_thead_th:last-child]:rounded-se-lg [&_thead_th:last-child]:rounded-ee-lg [&_thead_.rc-table-row-expand-icon-cell]:bg-gray-100',
        elegant: '[&_thead]:border-y [&_thead]:border-muted/70 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted/70',
        retro: '[&_thead]:border-y [&_thead]:border-muted/70 [&_tbody_tr:last-child_td.rc-table-cell]:border-b [&_tbody_tr:last-child_td.rc-table-cell]:border-muted/70'
    },
    striped: '[&_.rc-table-row:nth-child(2n)_.rc-table-cell]:bg-gray-100/50 [&_.rc-table-row:hover]:bg-transparent'
};
function Table({ striped, variant = 'classic', emptyText, className, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$table$40$7$2e$42$2e$0_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rc$2d$table$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["default"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](classes.table, classes.thead, classes.tCell, classes.variants[variant], striped && classes.striped, className),
        emptyText: emptyText || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "py-5 text-center lg:py-8",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Empty"], {}, void 0, false, {
                    fileName: "<[project]/src/components/ui/table.tsx>",
                    lineNumber: 80,
                    columnNumber: 13
                }, void 0),
                " ",
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                    className: "mt-3",
                    children: "No Data"
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/table.tsx>",
                    lineNumber: 80,
                    columnNumber: 23
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/ui/table.tsx>",
            lineNumber: 79,
            columnNumber: 11
        }, void 0),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/table.tsx>",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
// A util func
function handleTextAlignment(align) {
    if (align === 'center') return 'justify-center';
    if (align === 'right') return 'justify-end';
    return '';
}
function HeaderCell({ title, align = 'left', width, ellipsis, sortable, ascending, iconClassName, className }) {
    if (ellipsis && width === undefined) {
        console.warn('When ellipsis is true make sure you are using the same column width in HeaderCell component too.');
    }
    if (width !== undefined && ellipsis !== true) {
        console.warn("width prop without ellipsis won't work, please set ellipsis prop true.");
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('flex items-center gap-1', sortable && 'cursor-pointer', handleTextAlignment(align), className),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                ...ellipsis && {
                    className: 'truncate'
                },
                ...ellipsis && width && {
                    style: {
                        width
                    }
                },
                children: title
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/table.tsx>",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            sortable && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "inline-flex",
                children: ascending ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('h-auto w-3', iconClassName),
                    viewBox: "0 0 16 16",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                        d: "m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/ui/table.tsx>",
                        lineNumber: 160,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/table.tsx>",
                    lineNumber: 154,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('h-auto w-3', iconClassName),
                    viewBox: "0 0 16 16",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                        d: "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/ui/table.tsx>",
                        lineNumber: 169,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/table.tsx>",
                    lineNumber: 163,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/table.tsx>",
                lineNumber: 152,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/table.tsx>",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
function ToggleColumns({ columns, checkedColumns, setCheckedColumns, hideIndex }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Popover"], {
            shadow: "sm",
            placement: "bottom-end",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Popover"].Trigger, {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["ActionIcon"], {
                        variant: "outline",
                        title: 'Toggle Columns',
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiTextColumns"], {
                            strokeWidth: 3,
                            className: " h-6 w-6"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/ui/table.tsx>",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/ui/table.tsx>",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/table.tsx>",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Popover"].Content, {
                    className: "z-0",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "px-0.5 pt-2 text-left rtl:text-right",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Title"], {
                                as: "h6",
                                className: "mb-1 px-0.5 text-sm font-semibold",
                                children: "Toggle Columns"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/ui/table.tsx>",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["CheckboxGroup"], {
                                values: checkedColumns,
                                setValues: setCheckedColumns,
                                className: "grid grid-cols-2 gap-x-6 gap-y-5 px-1.5 pb-3.5 pt-4",
                                children: columns.map((column, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Checkbox"], {
                                        value: column.dataIndex,
                                        label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$add$2d$spaces$2d$to$2d$camel$2d$case$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addSpacesToCamelCase"](column.dataIndex),
                                        labelClassName: "ml-2 rtl:mr-2 text-[13px] font-medium",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](hideIndex && index === hideIndex ? 'hidden' : '')
                                    }, column.dataIndex, false, {
                                        fileName: "<[project]/src/components/ui/table.tsx>",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "<[project]/src/components/ui/table.tsx>",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/ui/table.tsx>",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/table.tsx>",
                    lineNumber: 199,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/ui/table.tsx>",
            lineNumber: 193,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/table.tsx>",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/utils/format-date.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "formatDate": ()=>formatDate
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$10$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function formatDate(date, format = 'DD MMM, YYYY') {
    if (!date) return '';
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$10$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](date).format(format);
}

})()),
"[project]/src/components/ui/date-cell.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>DateCell
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$format$2d$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/format-date.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function DateCell({ date, className, timeClassName, dateClassName, dateFormat = 'MMMM D, YYYY', timeFormat = 'h:mm A' }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('grid gap-1', className),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("time", {
                dateTime: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$format$2d$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"](date, 'YYYY-MM-DD'),
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('font-medium text-gray-700', dateClassName),
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$format$2d$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"](date, dateFormat)
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/date-cell.tsx>",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("time", {
                dateTime: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$format$2d$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"](date, 'HH:mm:ss'),
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('text-[13px] text-gray-500', timeClassName),
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$format$2d$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"](date, timeFormat)
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/date-cell.tsx>",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/date-cell.tsx>",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/dashboard/file-list/columns.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getColumns": ()=>getColumns
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$manager$2f$favorite$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/manager/favorite.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$date$2d$cell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/date-cell.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
const getColumns = ({ sortConfig, onDeleteItem, onHeaderCellClick })=>[
        {
            title: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderCell"], {
                title: "Name",
                className: "ps-2"
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                lineNumber: 27,
                columnNumber: 12
            }, this),
            dataIndex: 'file',
            key: 'file',
            width: 220,
            render: (file, row)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex items-center ps-2",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: file.avatar,
                                className: "aspect-square h-7 w-7",
                                alt: 'File Type'
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                            lineNumber: 33,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "ml-3 rtl:ml-0 rtl:mr-3",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                className: "mb-0.5 font-lexend !text-sm font-medium text-gray-900 dark:text-gray-700",
                                children: file.name
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                            lineNumber: 40,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                    lineNumber: 32,
                    columnNumber: 7
                }, this)
        },
        {
            title: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderCell"], {
                title: "Size"
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                lineNumber: 49,
                columnNumber: 12
            }, this),
            dataIndex: 'size',
            key: 'size',
            width: 130,
            render: (value)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                    className: "text-gray-500",
                    children: value
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                    lineNumber: 53,
                    columnNumber: 29
                }, this)
        },
        {
            title: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderCell"], {
                title: "Type"
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                lineNumber: 56,
                columnNumber: 12
            }, this),
            dataIndex: 'type',
            key: 'type',
            width: 130,
            render: (value)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                    className: "capitalize text-gray-500",
                    children: value
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                    lineNumber: 61,
                    columnNumber: 7
                }, this)
        },
        {
            title: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderCell"], {
                title: "Modified",
                sortable: true,
                ascending: sortConfig?.direction === 'asc' && sortConfig?.key === 'dueDate'
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            onHeaderCell: ()=>onHeaderCellClick('modified'),
            dataIndex: 'modified',
            key: 'modified',
            width: 150,
            render: (value)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$date$2d$cell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    date: value
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                    lineNumber: 78,
                    columnNumber: 30
                }, this)
        },
        {
            title: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderCell"], {
                title: "Shared"
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                lineNumber: 81,
                columnNumber: 12
            }, this),
            dataIndex: 'shared',
            key: 'shared',
            width: 150,
            render: (value)=>{
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex items-center justify-start",
                    children: value.map((img, index)=>{
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: img,
                            width: 30,
                            height: 30,
                            className: "-me-2 aspect-square rounded-full border-2 border-gray-0 dark:border-t-gray-50",
                            alt: "File Avatar"
                        }, `fileavatar-${index}`, false, {
                            fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                    lineNumber: 87,
                    columnNumber: 9
                }, this);
            }
        },
        {
            // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
            title: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderCell"], {
                title: "Actions",
                className: "opacity-0"
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                lineNumber: 106,
                columnNumber: 12
            }, this),
            dataIndex: 'action',
            key: 'action',
            width: 100,
            render: (_, row)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex items-center justify-end gap-3",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$manager$2f$favorite$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                            lineNumber: 112,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](FileMoreAction, {
                            onDelete: ()=>onDeleteItem(row.id)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                            lineNumber: 113,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                    lineNumber: 111,
                    columnNumber: 7
                }, this)
        }
    ];
function FileMoreAction({ onDelete }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Popover"], {
        placement: "bottom-end",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Popover"].Trigger, {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["ActionIcon"], {
                    title: 'More Options',
                    variant: "text",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiDotsThreeOutlineVerticalFill"], {
                        className: "h-[18px] w-[18px] text-gray-500"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Popover"].Content, {
                className: "z-0 min-w-[140px] px-2 py-2 dark:bg-gray-100 [&>svg]:dark:fill-gray-100",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-gray-900",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Button"], {
                            variant: "text",
                            className: "group flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCopySimple"], {
                                    className: "mr-2 h-5 w-5 text-gray-500 duration-300 group-hover:text-primary"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                "Copy"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Button"], {
                            variant: "text",
                            className: "group flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiShareFat"], {
                                    className: "mr-2 h-5 w-5 text-gray-500 duration-300 group-hover:text-primary"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                "Share"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Button"], {
                            variant: "text",
                            className: "group flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50",
                            onClick: onDelete,
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiTrashSimple"], {
                                    className: "mr-2 h-5 w-5 text-gray-500 duration-300 group-hover:text-primary"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                "Delete"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/file-list/columns.tsx>",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/controlled-table/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ControlledTable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__external__lodash$2f$isEmpty__ = __turbopack_external_require__("lodash/isEmpty", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
const TableFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](()=>__turbopack_require__("[project]/src/components/controlled-table/table-filter.tsx [app-ssr] (ecmascript, loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "src/components/controlled-table/index.tsx -> " + "@/components/controlled-table/table-filter"
        ]
    },
    ssr: false
});
const TablePagination = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](()=>__turbopack_require__("[project]/src/components/controlled-table/table-pagination.tsx [app-ssr] (ecmascript, loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "src/components/controlled-table/index.tsx -> " + "@/components/controlled-table/table-pagination"
        ]
    },
    ssr: false
});
function ControlledTable({ isLoading, filterElement, filterOptions, paginatorOptions, tableFooter, showLoadingText, paginatorClassName, className, ...tableProps }) {
    if (isLoading) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "grid h-full min-h-[128px] flex-grow place-content-center items-center justify-center",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Loader"], {
                    variant: "spinner",
                    size: "xl"
                }, void 0, false, {
                    fileName: "<[project]/src/components/controlled-table/index.tsx>",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                showLoadingText ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Title"], {
                    as: "h6",
                    className: "-me-2 mt-4 font-medium text-gray-500",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "<[project]/src/components/controlled-table/index.tsx>",
                    lineNumber: 47,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/controlled-table/index.tsx>",
            lineNumber: 44,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !__TURBOPACK__external__lodash$2f$isEmpty__["default"](filterOptions) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](TableFilter, {
                ...filterOptions,
                children: filterElement
            }, void 0, false, {
                fileName: "<[project]/src/components/controlled-table/index.tsx>",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        scroll: {
                            x: 1300
                        },
                        rowKey: (record)=>record.id,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](className),
                        ...tableProps
                    }, void 0, false, {
                        fileName: "<[project]/src/components/controlled-table/index.tsx>",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    tableFooter ? tableFooter : null
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/controlled-table/index.tsx>",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            !__TURBOPACK__external__lodash$2f$isEmpty__["default"](paginatorOptions) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](TablePagination, {
                paginatorClassName: paginatorClassName,
                ...paginatorOptions
            }, void 0, false, {
                fileName: "<[project]/src/components/controlled-table/index.tsx>",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}

})()),
"[project]/public/doc-icon.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/doc-icon.dd2e1b4e.svg");
})()),
"[project]/public/doc-icon.svg.mjs/(IMAGE)/[project]/public/doc-icon.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$doc$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/doc-icon.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$doc$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 56,
    height: 56,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/public/pdf-icon.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/pdf-icon.a837f17b.svg");
})()),
"[project]/public/pdf-icon.svg.mjs/(IMAGE)/[project]/public/pdf-icon.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$pdf$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/pdf-icon.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$pdf$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 56,
    height: 56,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/public/xml-icon.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/xml-icon.73ce63d6.svg");
})()),
"[project]/public/xml-icon.svg.mjs/(IMAGE)/[project]/public/xml-icon.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$xml$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/xml-icon.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$xml$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 56,
    height: 56,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/public/image-icon.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/image-icon.436334ab.svg");
})()),
"[project]/public/image-icon.svg.mjs/(IMAGE)/[project]/public/image-icon.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$image$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/image-icon.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$image$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 42,
    height: 56,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/public/folder-icon.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/folder-icon.ea815a99.svg");
})()),
"[project]/public/folder-icon.svg.mjs/(IMAGE)/[project]/public/folder-icon.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$folder$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/folder-icon.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$folder$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 56,
    height: 56,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/src/data/all-files.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "allFilesData": ()=>allFilesData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$doc$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$doc$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/doc-icon.svg.mjs/(IMAGE)/[project]/public/doc-icon.svg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$pdf$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$pdf$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/pdf-icon.svg.mjs/(IMAGE)/[project]/public/pdf-icon.svg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$xml$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$xml$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/xml-icon.svg.mjs/(IMAGE)/[project]/public/xml-icon.svg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$image$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$image$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/image-icon.svg.mjs/(IMAGE)/[project]/public/image-icon.svg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$folder$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$folder$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/folder-icon.svg.mjs/(IMAGE)/[project]/public/folder-icon.svg [app-ssr] (static) (structured image object, ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const allFilesData = [
    {
        id: '90020',
        file: {
            name: 'pink_yowza.doc',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$doc$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$doc$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '7.6MB',
        type: 'doc',
        modified: '2023-08-06T07:36:49.630Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp'
        ]
    },
    {
        id: '86128',
        file: {
            name: 'grunt_around.xml',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$xml$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$xml$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '8.8MB',
        type: 'xml',
        modified: '2024-03-30T20:16:17.243Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp'
        ]
    },
    {
        id: '76411',
        file: {
            name: 'gee.xml',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$xml$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$xml$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '7.4MB',
        type: 'xml',
        modified: '2022-11-08T02:05:58.667Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp'
        ]
    },
    {
        id: '97993',
        file: {
            name: 'adventurously_neatly',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$folder$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$folder$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '6.1MB',
        type: 'folder',
        modified: '2022-09-08T21:11:20.818Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp'
        ]
    },
    {
        id: '76697',
        file: {
            name: 'utterly_modernity_acidly.xml',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$xml$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$xml$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '6.7GB',
        type: 'xml',
        modified: '2023-03-07T22:27:09.014Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp'
        ]
    },
    {
        id: '38724',
        file: {
            name: 'electric.xml',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$xml$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$xml$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '4.3MB',
        type: 'xml',
        modified: '2023-11-17T01:13:45.153Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp'
        ]
    },
    {
        id: '90218',
        file: {
            name: 'from_powerful.webp',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$image$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$image$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '2.3GB',
        type: 'image',
        modified: '2023-11-24T03:30:18.409Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp'
        ]
    },
    {
        id: '74618',
        file: {
            name: 'helplessly',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$folder$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$folder$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '1.4GB',
        type: 'folder',
        modified: '2023-01-13T14:18:23.860Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp'
        ]
    },
    {
        id: '60917',
        file: {
            name: 'white_which.gif',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$image$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$image$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '6.7GB',
        type: 'image',
        modified: '2022-11-01T00:18:22.613Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp'
        ]
    },
    {
        id: '35976',
        file: {
            name: 'associate_hence_claim.gif',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$image$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$image$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '9GB',
        type: 'image',
        modified: '2023-03-23T04:32:48.697Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp'
        ]
    },
    {
        id: '43393',
        file: {
            name: 'who_enterprise.pdf',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$pdf$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$pdf$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '4.4GB',
        type: 'pdf',
        modified: '2022-09-30T17:37:19.899Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp'
        ]
    },
    {
        id: '83362',
        file: {
            name: 'gallivant.xml',
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$xml$2d$icon$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$xml$2d$icon$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        size: '4.9GB',
        type: 'xml',
        modified: '2024-05-28T19:56:28.077Z',
        shared: [
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp'
        ]
    }
];

})()),
"[project]/src/app/shared/file/dashboard/file-list/table.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>FileListTable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-table.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$column$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-column.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$file$2d$list$2f$columns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/dashboard/file-list/columns.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$controlled$2d$table$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/controlled-table/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/routes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$all$2d$files$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/all-files.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
;
function FileListTable({ className }) {
    const [pageSize, setPageSize] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](5);
    const onHeaderCellClick = (value)=>({
            onClick: ()=>{
                handleSort(value);
            }
        });
    const onDeleteItem = (id)=>{
        handleDelete(id);
    };
    const { isLoading, tableData, currentPage, totalItems, handlePaginate, sortConfig, handleSort, handleDelete } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTable"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$all$2d$files$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allFilesData"], pageSize);
    const columns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$file$2d$list$2f$columns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColumns"]({
            sortConfig,
            onHeaderCellClick,
            onDeleteItem
        }), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        onHeaderCellClick,
        sortConfig.key,
        sortConfig.direction,
        onDeleteItem
    ]);
    const { visibleColumns } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$column$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useColumn"](columns);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: className,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "mb-3 flex items-center justify-between 2xl:mb-5",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Title"], {
                        as: "h3",
                        className: "text-lg font-semibold text-gray-900 xl:text-xl",
                        children: "All Files"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/file-list/table.tsx>",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].file.manager,
                        className: "text-sm font-medium text-gray-900 hover:underline",
                        children: "View all"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/file-list/table.tsx>",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-list/table.tsx>",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$controlled$2d$table$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isLoading: isLoading,
                data: tableData,
                // @ts-ignore
                columns: visibleColumns,
                scroll: {
                    x: 1300
                },
                variant: "modern",
                tableLayout: "fixed",
                rowKey: (record)=>record.id,
                className: "overflow-hidden rounded-lg border border-muted text-sm",
                paginatorOptions: {
                    pageSize,
                    setPageSize,
                    total: totalItems,
                    current: currentPage,
                    onChange: (page)=>handlePaginate(page)
                }
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/file-list/table.tsx>",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/file-list/table.tsx>",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/banners/banner-card.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>BannerCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function BannerCard({ bgImage, className, titleClassName = 'text-white', children, title, imageClassName }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('relative p-8', className),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: bgImage ? bgImage : 'https://isomorphic-furyroad.s3.amazonaws.com/public/upgrade-storage-bg.webp',
                alt: "Upgrade Storage",
                fill: true,
                sizes: "(max-width: 768px) 100vw",
                className: imageClassName
            }, void 0, false, {
                fileName: "<[project]/src/components/banners/banner-card.tsx>",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Title"], {
                        as: "h2",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('text-2xl font-semibold', titleClassName),
                        children: title
                    }, void 0, false, {
                        fileName: "<[project]/src/components/banners/banner-card.tsx>",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/banners/banner-card.tsx>",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/banners/banner-card.tsx>",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/dashboard/upgrade-storage.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>UpgradeStorage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$banners$2f$banner$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/banners/banner-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const features = [
    'Premium features with customization.',
    'Multiple user access.',
    'Easy to access and edit.'
];
function UpgradeStorage({ className }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: className,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$banners$2f$banner$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            title: "Upgrade Storage",
            className: "min-h-[280px] overflow-hidden rounded-lg",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "my-5",
                    children: features.map((feature, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                            className: "flex items-center gap-2 py-1 text-sm font-medium text-white",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCheckCircleFill"], {
                                    className: "h-5 w-5 text-xl text-white"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/upgrade-storage.tsx>",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                feature
                            ]
                        }, `feature-${index}`, true, {
                            fileName: "<[project]/src/app/shared/file/dashboard/upgrade-storage.tsx>",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/upgrade-storage.tsx>",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: '/file',
                    className: "inline-block rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 dark:bg-gray-100",
                    children: "Upgrade Storage"
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/upgrade-storage.tsx>",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/shared/file/dashboard/upgrade-storage.tsx>",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/shared/file/dashboard/upgrade-storage.tsx>",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/dashboard/recent-activities.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ActivityThreadCard": ()=>ActivityThreadCard,
    "ActivityThreads": ()=>ActivityThreads,
    "default": ()=>RecentActivities
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$widget$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/cards/widget-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const activities = [
    {
        title: 'Today',
        threads: [
            {
                avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
                username: 'Denny Albuz',
                logMessage: 'added new file in',
                alias: 'photos',
                date: '09:28 PM',
                files: [
                    'Untitled photo.jpg',
                    'brief-feature-chats.png'
                ]
            },
            {
                avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
                username: 'Monty Prismic',
                logMessage: 'edited a file',
                alias: '',
                date: '01:28 PM',
                files: [
                    'Saraly statement.doc'
                ]
            },
            {
                avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
                username: 'Jacky Andersion',
                logMessage: 'uploaded a new file',
                alias: '',
                date: '11:15 AM',
                files: [
                    'Employee.xml'
                ]
            }
        ]
    },
    {
        title: 'Yesterday',
        threads: [
            {
                avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
                username: 'Wolbu fenny',
                logMessage: 'added new file in',
                alias: 'photos',
                date: '06:44 PM',
                files: [
                    'Collage photo.png',
                    'Certificates.png'
                ]
            }
        ]
    }
];
function ActivityThreadCard({ thread }) {
    const { avatar, username, logMessage, alias, date, files } = thread;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "relative flex items-start gap-x-2.5 pb-8 before:absolute before:start-[17px] before:top-0 before:z-0 before:h-full before:w-[1px] before:bg-gray-300 last:pb-0 last:before:hidden",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "aspect-square object-cover",
                    src: avatar,
                    alt: username,
                    fill: true,
                    sizes: "(max-width: 768px) 100vw"
                }, void 0, false, {
                    fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                        className: "text-sm font-normal text-gray-500",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                as: "span",
                                className: "font-medium capitalize text-gray-700",
                                children: username
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            ' ',
                            logMessage,
                            ' ',
                            alias && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                as: "span",
                                className: "font-medium capitalize text-gray-700",
                                children: alias
                            }, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                        as: "span",
                        className: "text-xs text-gray-500",
                        children: date
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    files.map((file)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "mt-2 flex items-center gap-2.5 rounded-lg border border-gray-300 px-2 py-1.5",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiImageDuotone"], {
                                    className: "h-5 w-5  text-[#0761D1]"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                                    as: "span",
                                    className: "text-sm text-gray-700",
                                    children: file
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, file, true, {
                            fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function ActivityThreads({ title, threads }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "relative mb-4 last:mb-0",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Text"], {
                className: "mb-4 text-sm font-semibold text-gray-900 2xl:text-base dark:text-gray-700",
                children: title
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: threads.map((item, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](ActivityThreadCard, {
                        thread: item
                    }, `singleThread-${index}`, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
function RecentActivities({ className }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: className,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Title"], {
                as: "h3",
                className: "mb-3 text-lg font-semibold text-gray-900 xl:text-xl 2xl:mb-5",
                children: "Recent Activities"
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$widget$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "",
                headerClassName: "hidden",
                children: activities.map((activity, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](ActivityThreads, {
                        title: activity.title,
                        threads: activity.threads
                    }, `thread-${index}`, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/recent-activities.tsx>",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/shared/file/dashboard/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>FileDashboard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$storage$2d$report$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/dashboard/storage-report.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$file$2d$stats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/dashboard/file-stats.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$storage$2d$summary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/dashboard/storage-summary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$recent$2d$files$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/dashboard/recent-files.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$quick$2d$access$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/dashboard/quick-access.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$activity$2d$report$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/dashboard/activity-report.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$members$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/dashboard/members.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$file$2d$list$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/dashboard/file-list/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$upgrade$2d$storage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/dashboard/upgrade-storage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$recent$2d$activities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/shared/file/dashboard/recent-activities.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
;
;
function FileDashboard() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "@container",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$file$2d$stats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "mb-5 2xl:mb-8"
            }, void 0, false, {
                fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "mb-6 grid grid-cols-1 gap-6 @4xl:grid-cols-12 2xl:mb-8 2xl:gap-8",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$storage$2d$report$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "@container @4xl:col-span-8 @[96.937rem]:col-span-9"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$storage$2d$summary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "@4xl:col-span-4 @[96.937rem]:col-span-3"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "grid grid-cols-1 gap-6 @container lg:grid-cols-12 2xl:gap-8 ",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "col-span-full flex flex-col gap-6 @5xl:col-span-8 2xl:gap-8 3xl:col-span-9",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$quick$2d$access$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$recent$2d$files$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$activity$2d$report$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$file$2d$list$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "col-span-full flex flex-col gap-6 @5xl:col-span-4 2xl:gap-8 3xl:col-span-3",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$recent$2d$activities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$members$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$file$2f$dashboard$2f$upgrade$2d$storage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/shared/file/dashboard/index.tsx>",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/(hydrogen)/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=_1f6879._.js.map