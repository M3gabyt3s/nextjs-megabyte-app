(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_layouts_lithium_85d111._.js", {

"[project]/src/layouts/lithium/bullet-icon.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>BulletIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function BulletIcon({ ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 8 8",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("rect", {
                width: 5.625,
                height: 5.625,
                x: 1.188,
                y: 1.188,
                stroke: "currentColor",
                strokeWidth: 0.375,
                rx: 2.813
            }, void 0, false, {
                fileName: "<[project]/src/layouts/lithium/bullet-icon.tsx>",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M3.813 6.618a2.625 2.625 0 1 0 0-5.237 2.625 2.625 0 0 1 0 5.237Z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "<[project]/src/layouts/lithium/bullet-icon.tsx>",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/layouts/lithium/bullet-icon.tsx>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = BulletIcon;
var _c;
__turbopack_refresh__.register(_c, "BulletIcon");

})()),
"[project]/src/layouts/lithium/lithium-menu-items.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "lithiumMenuItems": ()=>lithiumMenuItems
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/constants.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const lithiumMenuItems = {
    overview: {
        name: 'Overview',
        type: 'link',
        dropdownItems: [
            {
                name: 'File Manager',
                href: '/',
                icon: 'FilesIcon'
            },
            {
                name: 'Appointment',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].appointment.dashboard,
                icon: 'ScheduleIcon'
            },
            {
                name: 'Executive',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].executive.dashboard,
                icon: 'BusinessIcon'
            },
            {
                name: 'Job Board',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].jobBoard.dashboard,
                icon: 'SuitcaseIcon'
            },
            {
                name: 'Financial',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].financial.dashboard,
                icon: 'FinancialStatisticsIcon'
            },
            {
                name: 'Logistics',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].logistics.dashboard,
                icon: 'TruckIcon'
            },
            {
                name: 'E-Commerce',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.dashboard,
                icon: 'ShopIcon'
            },
            {
                name: 'Analytics',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].analytics,
                icon: 'AnalyticsCircularIcon'
            },
            {
                name: 'Support',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].support.dashboard,
                icon: 'WalkmanIcon'
            }
        ]
    },
    appsKit: {
        name: 'Apps Kit',
        type: 'enhance',
        dropdownItems: [
            {
                name: 'E-Commerce',
                description: '"Shop Smart, Click Quick: Your One-Stop Solution!"',
                icon: 'ShoppingCartIcon',
                subMenuItems: [
                    {
                        name: 'Products',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.products
                    },
                    {
                        name: 'Product Details',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.productDetails(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_ID"])
                    },
                    {
                        name: 'Create Product',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.createProduct
                    },
                    {
                        name: 'Edit Product',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.ediProduct(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_ID"])
                    },
                    {
                        name: 'Categories',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.categories
                    },
                    {
                        name: 'Create Category',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.createCategory
                    },
                    {
                        name: 'Edit Category',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.editCategory(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_ID"])
                    },
                    {
                        name: 'Orders',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.orders
                    },
                    {
                        name: 'Order Details',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.orderDetails(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_ID"])
                    },
                    {
                        name: 'Create Order',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.createOrder
                    },
                    {
                        name: 'Edit Order',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.editOrder(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_ID"])
                    },
                    {
                        name: 'Reviews',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.reviews
                    },
                    {
                        name: 'Shop',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.shop
                    },
                    {
                        name: 'Cart',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.cart
                    },
                    {
                        name: 'Checkout & Payment',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.checkout
                    }
                ]
            },
            {
                name: 'Support',
                description: '"Effortless Assistance at your Fingertips!"',
                icon: 'WalkmanWithExclamationIcon',
                subMenuItems: [
                    {
                        name: 'Inbox',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].support.inbox
                    },
                    {
                        name: 'Snippets',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].support.snippets
                    },
                    {
                        name: 'Templates',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].support.templates
                    }
                ]
            },
            {
                name: 'Invoice',
                description: 'Professional-looking invoices for each customer order',
                icon: 'InvoiceIcon',
                subMenuItems: [
                    {
                        name: 'List',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].invoice.home
                    },
                    {
                        name: 'Details',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].invoice.details(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_ID"])
                    },
                    {
                        name: 'Create',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].invoice.create
                    },
                    {
                        name: 'Edit',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].invoice.edit(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_ID"])
                    },
                    {
                        name: 'Invoice Builder',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].invoice.builder
                    }
                ]
            },
            {
                name: 'Logistics',
                description: '"Streamline Shipments: Discover Efficiency with our Logistics!"',
                icon: 'ShipIcon',
                subMenuItems: [
                    {
                        name: 'Shipment List',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].logistics.shipmentList
                    },
                    {
                        name: 'Shipment Details',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].logistics.shipmentDetails(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_ID"])
                    },
                    {
                        name: 'Create Shipment',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].logistics.createShipment
                    },
                    {
                        name: 'Edit Shipment',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].logistics.editShipment(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_ID"])
                    },
                    {
                        name: 'Customer Profile',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].logistics.customerProfile
                    },
                    {
                        name: 'Tracking',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].logistics.tracking(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_ID"])
                    }
                ]
            },
            {
                name: 'File Manager',
                description: '"Organize, Access, and Share: Simplify your Digital World with us!"',
                icon: 'FileSettingsIcon',
                subMenuItems: [
                    {
                        name: 'Files',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].file.dashboard
                    },
                    {
                        name: 'Manage Files',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].file.manager
                    }
                ]
            }
        ]
    },
    widgets: {
        name: 'Widgets',
        type: 'link',
        dropdownItems: [
            {
                name: 'Cards',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].widgets.cards,
                icon: 'DicesIcon'
            },
            {
                name: 'Icons',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].widgets.icons,
                icon: 'GreenLeafIcon'
            },
            {
                name: 'Charts',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].widgets.charts,
                icon: 'PieChartCurrencyIcon'
            },
            {
                name: 'Maps',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].widgets.maps,
                icon: 'MapMarkerWithPathIcon'
            }
        ]
    },
    forms: {
        name: 'Forms',
        type: 'link',
        dropdownItems: [
            {
                name: 'Account Settings',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].forms.profileSettings,
                icon: 'UserSettingsIcon'
            },
            {
                name: 'Notification Preference',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].forms.notificationPreference,
                icon: 'NotificationSettingsIcon'
            },
            {
                name: 'Personal Information',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].forms.personalInformation,
                icon: 'UserInfoIcon'
            },
            {
                name: 'Newsletter',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].forms.newsletter,
                icon: 'NewsletterAnnouncement'
            },
            {
                name: 'Multi Step',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].multiStep,
                icon: 'MultiStepArrowIcon'
            },
            {
                name: 'Payment Checkout',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eCommerce.checkout,
                icon: 'OnlinePaymentIcon'
            }
        ]
    },
    tables: {
        name: 'Tables',
        type: 'link',
        dropdownItems: [
            {
                name: 'Basic',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].tables.basic,
                icon: 'TableBasicIcon'
            },
            {
                name: 'Collapsible',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].tables.collapsible,
                icon: 'TableCollapsibleIcon'
            },
            {
                name: 'Enhanced',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].tables.enhanced,
                icon: 'TableEnhancedIcon'
            },
            {
                name: 'Sticky Header',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].tables.stickyHeader,
                icon: 'TableStickyHeaderIcon'
            },
            {
                name: 'Pagination',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].tables.pagination,
                icon: 'ArrowBothDirectionIcon'
            },
            {
                name: 'Search',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].tables.search,
                icon: 'TableSearchIcon'
            }
        ]
    },
    pages: {
        name: 'Pages',
        type: 'link',
        dropdownItems: [
            {
                name: 'Real Estate',
                icon: 'RealEstateIcon',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].searchAndFilter.realEstate
            },
            {
                name: 'Find Flight',
                icon: 'FlightIcon',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].searchAndFilter.flight
            },
            {
                name: 'Point of Sell',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].pos.index,
                icon: 'PointOfSellIcon'
            },
            {
                name: 'NFT',
                icon: 'NftIcon',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].searchAndFilter.nft
            },
            {
                name: 'Event Calendar',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].eventCalendar,
                icon: 'CalenderIcon'
            },
            {
                name: 'Roles & Permissions',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].rolesPermissions,
                icon: 'FolderLockIcon'
            },
            {
                name: 'Profile',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].profile,
                icon: 'UserAvatarIcon'
            },
            {
                name: 'Welcome',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].welcome,
                icon: 'ShootingStarIcon'
            },
            {
                name: 'Coming Soon',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].comingSoon,
                icon: 'RocketFlamingIcon'
            },
            {
                name: 'Access Denied',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].accessDenied,
                icon: 'BadgeNotAllowedIcon'
            },
            {
                name: 'Not Found',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].notFound,
                icon: 'MagnifyingWithCrossIcon'
            },
            {
                name: 'Maintenance',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].maintenance,
                icon: 'SettingsWarningIcon'
            },
            {
                name: 'Blank',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].blank,
                icon: 'PageBlankIcon'
            }
        ]
    },
    authentication: {
        name: 'Authentication',
        type: 'enhance',
        dropdownItems: [
            {
                name: 'Sign Up',
                icon: 'UserPlusIcon',
                description: '"Shop Smart, Click Quick: Your One-Stop Solution!"',
                subMenuItems: [
                    {
                        name: 'Modern Sign Up',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.signUp1
                    },
                    {
                        name: 'Vintage Sign Up',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.signUp2
                    },
                    {
                        name: 'Trendy Sign Up',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.signUp3
                    },
                    {
                        name: 'Elegant Sign Up',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.signUp4
                    },
                    {
                        name: 'Classic Sign Up',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.signUp5
                    }
                ]
            },
            {
                name: 'Sign In',
                icon: 'UserLockIcon',
                description: '"Effortless Assistance at your Fingertips!"',
                subMenuItems: [
                    {
                        name: 'Modern Sign In',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.signIn1
                    },
                    {
                        name: 'Vintage Sign In',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.signIn2
                    },
                    {
                        name: 'Trendy Sign In',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.signIn3
                    },
                    {
                        name: 'Elegant Sign In',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.signIn4
                    },
                    {
                        name: 'Classic Sign In',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.signIn5
                    }
                ]
            },
            {
                name: 'Forgot Password',
                icon: 'LockExclamationIcon',
                description: '"Streamline Shipments: Discover Efficiency with our Logistics!"',
                subMenuItems: [
                    {
                        name: 'Modern Forgot Password',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.forgotPassword1
                    },
                    {
                        name: 'Vintage Forgot Password',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.forgotPassword2
                    },
                    {
                        name: 'Trendy Forgot Password',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.forgotPassword3
                    },
                    {
                        name: 'Elegant Forgot Password',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.forgotPassword4
                    },
                    {
                        name: 'Classic Forgot Password',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.forgotPassword5
                    }
                ]
            },
            {
                name: 'OTP Pages',
                icon: 'LockWildCardIcon',
                description: '"Organize, Access, and Share: Simplify your Digital World with us!"',
                subMenuItems: [
                    {
                        name: 'Modern OTP Page',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.otp1
                    },
                    {
                        name: 'Vintage OTP Page',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.otp2
                    },
                    {
                        name: 'Trendy OTP Page',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.otp3
                    },
                    {
                        name: 'Elegant OTP Page',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.otp4
                    },
                    {
                        name: 'Classic OTP Page',
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.otp5
                    }
                ]
            }
        ]
    }
};

})()),
"[project]/src/layouts/lithium/lithium-menu-icons.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "lithiumMenuIcons": ()=>lithiumMenuIcons
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$files$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/files.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$truck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/truck.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$schedule$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/schedule.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$shop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/shop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$analytics$2d$circular$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/analytics-circular.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$walkman$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/walkman.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$user$2d$plus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/user-plus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$user$2d$lock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/user-lock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$lock$2d$exclamation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/lock-exclamation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$lock$2d$wild$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/lock-wild-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$dices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/dices.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$green$2d$leaf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/green-leaf.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$pie$2d$chart$2d$currency$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/pie-chart-currency.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$map$2d$marker$2d$with$2d$path$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/map-marker-with-path.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$user$2d$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/user-settings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$notification$2d$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/notification-settings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$user$2d$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/user-info.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$newsletter$2d$announcement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/newsletter-announcement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$multi$2d$step$2d$arrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/multi-step-arrow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$online$2d$payment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/online-payment.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$shopping$2d$cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/shopping-cart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$walkman$2d$with$2d$exclamation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/walkman-with-exclamation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ship$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/ship.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$file$2d$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/file-settings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$invoice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/invoice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$table$2d$basic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/table-basic.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$table$2d$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/table-collapsible.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$table$2d$enhanced$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/table-enhanced.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$table$2d$sticky$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/table-sticky-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$arrow$2d$both$2d$direction$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/arrow-both-direction.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$table$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/table-search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$user$2d$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/user-avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$shooting$2d$star$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/shooting-star.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$rocket$2d$flaming$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/rocket-flaming.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$badge$2d$not$2d$allowed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/badge-not-allowed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$magnifying$2d$with$2d$cross$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/magnifying-with-cross.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$settings$2d$warning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/settings-warning.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$page$2d$blank$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/page-blank.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/calendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$folder$2d$lock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/folder-lock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$point$2d$of$2d$sell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/point-of-sell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$real$2d$estate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/real-estate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$nft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/nft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$flight$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/flight-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$financial$2d$statistics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/financial-statistics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$business$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/business.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$suitcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/suitcase.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
;
;
;
const lithiumMenuIcons = {
    FilesIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$files$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    TruckIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$truck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ShopIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$shop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    AnalyticsCircularIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$analytics$2d$circular$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    WalkmanIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$walkman$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    UserPlusIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$user$2d$plus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    UserLockIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$user$2d$lock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    LockExclamationIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$lock$2d$exclamation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    LockWildCardIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$lock$2d$wild$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    DicesIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$dices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    GreenLeafIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$green$2d$leaf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    PieChartCurrencyIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$pie$2d$chart$2d$currency$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    MapMarkerWithPathIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$map$2d$marker$2d$with$2d$path$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    UserSettingsIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$user$2d$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    NotificationSettingsIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$notification$2d$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    UserInfoIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$user$2d$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    NewsletterAnnouncement: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$newsletter$2d$announcement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    MultiStepArrowIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$multi$2d$step$2d$arrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    OnlinePaymentIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$online$2d$payment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ShoppingCartIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$shopping$2d$cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    WalkmanWithExclamationIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$walkman$2d$with$2d$exclamation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ShipIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ship$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    FileSettingsIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$file$2d$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    InvoiceIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$invoice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    TableBasicIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$table$2d$basic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    TableCollapsibleIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$table$2d$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    TableEnhancedIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$table$2d$enhanced$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    TableStickyHeaderIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$table$2d$sticky$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ArrowBothDirectionIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$arrow$2d$both$2d$direction$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    TableSearchIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$table$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    UserAvatarIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$user$2d$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ShootingStarIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$shooting$2d$star$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    RocketFlamingIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$rocket$2d$flaming$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    BadgeNotAllowedIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$badge$2d$not$2d$allowed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    MagnifyingWithCrossIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$magnifying$2d$with$2d$cross$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    SettingsWarningIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$settings$2d$warning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    PageBlankIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$page$2d$blank$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    CalenderIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    FolderLockIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$folder$2d$lock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    PointOfSellIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$point$2d$of$2d$sell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    RealEstateIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$real$2d$estate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    NftIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$nft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    FlightIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$flight$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    FinancialStatisticsIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$financial$2d$statistics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    BusinessIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$business$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ScheduleIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$schedule$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    SuitcaseIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$suitcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};

})()),
"[project]/src/layouts/lithium/lithium-menu.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EnhancedMenu": ()=>EnhancedMenu,
    "LinkMenu": ()=>LinkMenu,
    "default": ()=>HeaderMenuLeft
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$0$2e$25_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.0.25_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$bullet$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/lithium/bullet-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/nav-menu/nav-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/lithium/lithium-menu-items.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/lithium/lithium-menu-icons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$use$2d$pathname$2d$active$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/use-pathname-active.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$direction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-direction.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature(), _s4 = __turbopack_refresh__.signature();
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
;
;
function EnhancedMenuItems({ items, currentState, className = '' }) {
    _s();
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('w-[calc(100%_-_200px)] rounded-lg bg-white pl-3 dark:bg-gray-100', className),
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
            className: "grid list-none grid-cols-2  gap-x-10 gap-y-4 p-7",
            children: items && items[currentState] && items[currentState]?.subMenuItems && items[currentState]?.subMenuItems?.map((item, index)=>{
                const isActive = pathname === item.href;
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$0$2e$25_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                    style: {
                        transformOrigin: 'center'
                    },
                    initial: {
                        opacity: 0,
                        scale: 0.75
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 0.2,
                        delay: index * 0.075
                    },
                    className: "basis-1/2 text-left",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href ?? '/',
                        className: "group/submenu-link flex items-center gap-3 font-medium text-gray-900",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('text-gray-500 duration-200 group-hover/submenu-link:text-gray-900', {
                                    'text-gray-900': isActive
                                }),
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$bullet$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                    lineNumber: 66,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 58,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('duration-200 ', {
                                    'group-hover/submenu-link:translate-x-1': !isActive,
                                    underline: isActive
                                }),
                                children: item.name
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 68,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this)
                }, `enhance-menu-item-${item.name}-${index}`, false, {
                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                    lineNumber: 46,
                    columnNumber: 15
                }, this);
            })
        }, void 0, false, {
            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(EnhancedMenuItems, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = EnhancedMenuItems;
const EnhancedMenu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_s1(({ items, className = '' }, ref)=>{
    _s1();
    const [currentState, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (items.some((item)=>item.subMenuItems?.some((subItem)=>subItem.href === pathname))) {
            setState(items.findIndex((item)=>item.subMenuItems?.some((subItem)=>subItem.href === pathname)));
        }
    }, [
        items,
        pathname
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$0$2e$25_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.75
        },
        transition: {
            duration: 0.1
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('flex gap-x-2 p-1 pb-1.5 pe-1.5', className),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "col-span-3 flex w-[200px] flex-col gap-2 pe-0",
                children: items.map((item, index)=>{
                    const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuIcons"]?.[item.icon];
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        role: "div",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('relative cursor-pointer rounded-lg p-3 pb-2.5 text-left font-medium text-gray-900 duration-200', {
                            'bg-white dark:bg-gray-100': currentState === index
                        }),
                        onClick: ()=>setState(index),
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](Icon, {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                        lineNumber: 139,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                        lineNumber: 140,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 138,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-xs font-normal leading-5 text-gray-500",
                                children: item?.description
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 142,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('absolute -end-[9px]  top-1/2 -translate-y-1/2 text-white opacity-0 duration-200 rtl:rotate-180 dark:text-gray-100', {
                                    'opacity-100': currentState === index
                                }),
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiFillCaretRight"], {
                                    className: "h-auto w-3.5"
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                    lineNumber: 153,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 145,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('absolute -end-[17px] top-1/2 -translate-y-1/2 text-gray-50  opacity-0 duration-200 rtl:rotate-180 dark:text-gray-0', {
                                    'opacity-100': currentState === index
                                }),
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiFillCaretRight"], {
                                    className: "h-auto w-3.5"
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                    lineNumber: 163,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 155,
                                columnNumber: 17
                            }, this)
                        ]
                    }, `link-menu-${item.name}-${index}`, true, {
                        fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                        lineNumber: 127,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](EnhancedMenuItems, {
                items: items,
                currentState: currentState
            }, void 0, false, {
                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                lineNumber: 169,
                columnNumber: 9
            }, this)
        ]
    }, "enhanced-menu", true, {
        fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
        lineNumber: 115,
        columnNumber: 7
    }, this);
}, "Rawzio5RaQhowlIFFFuKdgoAh9s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
}));
_c1 = EnhancedMenu;
EnhancedMenu.displayName = 'EnhancedMenu';
function LinkMenu({ items, className = '' }) {
    _s2();
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('w-full', className, 'bg-gray-0 dark:bg-gray-100'),
        children: items.map((item, index)=>{
            const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuIcons"]?.[item.icon];
            const isActive = item.href === pathname;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                className: "relative my-0.5 ",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href ?? '/',
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('flex items-center gap-3 whitespace-nowrap rounded-md bg-gray-100/0 px-3 py-2 font-medium text-gray-900 duration-200 hover:bg-gray-100 hover:dark:bg-gray-50/50', {
                        'bg-gray-100 dark:bg-gray-50/50': isActive
                    }),
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](Icon, {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 202,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                            className: "relative block",
                            children: item.name
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 203,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                    lineNumber: 195,
                    columnNumber: 13
                }, this)
            }, `link-menu-${item.name}-${index}`, false, {
                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                lineNumber: 191,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s2(LinkMenu, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c2 = LinkMenu;
function HeaderMenuLeft() {
    _s3();
    const { direction } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$direction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            dir: direction,
            menuClassName: "pb-5 top-3 gap-8 relative",
            menuContentClassName: "mt-2 border border-gray-200 dark:border-gray-300",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Trigger, {
                            className: "flex items-center gap-1 duration-200 ",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](MenuTriggerButton, {
                                name: "overview"
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Content, {
                            className: "border border-[red] bg-white dark:bg-gray-100",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-[172px]",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](LinkMenu, {
                                    className: "flex flex-col p-3 dark:bg-gray-100",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuItems"].overview.dropdownItems ?? []
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                    lineNumber: 221,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Trigger, {
                            className: "flex items-center gap-1 duration-200 ",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](MenuTriggerButton, {
                                name: "appsKit"
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Content, {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-[670px]",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](EnhancedMenu, {
                                    className: "min-h-[336px] w-[670px] bg-gray-50 dark:bg-gray-0",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuItems"].appsKit.dropdownItems ?? []
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                    lineNumber: 234,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Trigger, {
                            className: "flex items-center gap-1 duration-200 ",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](MenuTriggerButton, {
                                name: "widgets"
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Content, {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-[127px]",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](LinkMenu, {
                                    className: "flex flex-col p-3 dark:bg-gray-100",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuItems"].widgets.dropdownItems ?? []
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                    lineNumber: 247,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Trigger, {
                            className: "flex items-center gap-1 duration-200 ",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](MenuTriggerButton, {
                                name: "forms"
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Content, {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-[460px]",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](LinkMenu, {
                                    className: "grid grid-cols-2 gap-x-2 p-3 dark:bg-gray-100",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuItems"].forms.dropdownItems ?? []
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                    lineNumber: 260,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Trigger, {
                            className: "flex items-center gap-1 duration-200 ",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](MenuTriggerButton, {
                                name: "tables"
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Content, {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-[340px]",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](LinkMenu, {
                                    className: "grid grid-cols-2 gap-x-2 p-3 dark:bg-gray-100",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuItems"].tables.dropdownItems ?? []
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                    lineNumber: 273,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Trigger, {
                            className: "flex items-center gap-1 duration-200 ",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](MenuTriggerButton, {
                                name: "pages"
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Content, {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-[420px]",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](LinkMenu, {
                                    className: "grid grid-cols-2 gap-x-1 p-3 dark:bg-gray-100",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuItems"].pages.dropdownItems ?? []
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                    lineNumber: 286,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, {
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Trigger, {
                            className: "flex items-center gap-1 duration-200 ",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](MenuTriggerButton, {
                                name: "authentication"
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$nav$2d$menu$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Content, {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-[710px]",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](EnhancedMenu, {
                                    className: "min-h-[280px] w-[710px] bg-gray-50 dark:bg-gray-0",
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuItems"].authentication.dropdownItems ?? []
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                    lineNumber: 299,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
            lineNumber: 216,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s3(HeaderMenuLeft, "gWjOP/MBI6r3YowFZAVj5+frpf0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$direction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"]
    ];
});
_c3 = HeaderMenuLeft;
function MenuTriggerButton({ name }) {
    _s4();
    const { isActive } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$use$2d$pathname$2d$active$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePathname"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('inline-block w-full overflow-hidden whitespace-nowrap pe-1.5 ps-0 text-sm font-medium leading-5 text-gray-900 transition-all duration-200', isActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuItems"][name].dropdownItems) ? 'text-primary ' : 'group-hover:text-gray-900'),
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuItems"][name].name
            }, void 0, false, {
                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('text-gray-900 duration-200', isActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2d$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lithiumMenuItems"][name].dropdownItems) && 'text-primary'),
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiCaretDownBold"], {}, void 0, false, {
                    fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/layouts/lithium/lithium-menu.tsx>",
                lineNumber: 331,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(MenuTriggerButton, "HHJKEGzXDlW9BvAvqSjUNVoN56M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$use$2d$pathname$2d$active$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePathname"]
    ];
});
_c4 = MenuTriggerButton;
var _c, _c1, _c2, _c3, _c4;
__turbopack_refresh__.register(_c, "EnhancedMenuItems");
__turbopack_refresh__.register(_c1, "EnhancedMenu");
__turbopack_refresh__.register(_c2, "LinkMenu");
__turbopack_refresh__.register(_c3, "HeaderMenuLeft");
__turbopack_refresh__.register(_c4, "MenuTriggerButton");

})()),
"[project]/src/layouts/lithium/lithium-header.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/rizzui@0.8.4_@floating-ui+react@0.26.11_@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/rizzui/dist/index.mjs [app-client] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/class-names.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2f$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/search/search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$messages$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/messages-dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$notification$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/notification-dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$profile$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/profile-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$settings$2f$settings$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/settings/settings-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$hamburger$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/hamburger-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-icons@5.0.1_react@18.2.0/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/lithium/lithium-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$hydrogen$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/hydrogen/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$sticky$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/sticky-header.tsx [app-client] (ecmascript)");
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
;
;
;
;
function HeaderMenuRight() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "ms-auto flex shrink-0 items-center gap-2 text-gray-700 xs:gap-3 xl:gap-4",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$messages$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["ActionIcon"], {
                    "aria-label": "Messages",
                    variant: "text",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](' relative h-[34px] w-[34px] overflow-hidden rounded-full md:h-9 md:w-9 3xl:h-10 3xl:w-10 '),
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiChatsCircleDuotone"], {
                            className: "h-6 w-auto"
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Badge"], {
                            renderAsDot: true,
                            color: "success",
                            enableOutlineRing: true,
                            className: "absolute right-1 top-2.5 -translate-x-1 -translate-y-1/4"
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$notification$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["ActionIcon"], {
                    "aria-label": "Notification",
                    variant: "text",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('relative h-[34px] w-[34px] overflow-hidden rounded-full md:h-9 md:w-9 3xl:h-10 3xl:w-10'),
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiBellSimpleRingingDuotone"], {
                            className: "h-6 w-auto"
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rizzui$40$0$2e$8$2e$4_$40$floating$2d$ui$2b$react$40$0$2e$26$2e$11_$40$headlessui$2b$react$40$1$2e$7$2e$18_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$rizzui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["Badge"], {
                            renderAsDot: true,
                            color: "warning",
                            enableOutlineRing: true,
                            className: "absolute right-1 top-2.5 -translate-x-1 -translate-y-1/4"
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$settings$2f$settings$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "rounded-full text-gray-700 shadow-none backdrop-blur-none hover:text-gray-1000 3xl:h-10 3xl:w-10 dark:bg-gray-100/0",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiGearDuotone"], {
                    className: "h-[22px] w-auto animate-spin-slow"
                }, void 0, false, {
                    fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$profile$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                buttonClassName: "w-auto sm:w-auto p-1 border border-gray-300",
                avatarClassName: "!w-7 !h-7 sm:!h-8 sm:!w-8"
            }, void 0, false, {
                fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = HeaderMenuRight;
function Header() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$sticky$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: 'z-[990] justify-between 2xl:py-5 2xl:pl-6  3xl:px-8',
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "hidden items-center gap-3 xl:flex",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "aria-label": "Site Logo",
                        href: '/',
                        className: "me-4 hidden w-[155px] shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:block",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "max-w-[155px]"
                        }, void 0, false, {
                            fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex w-full items-center gap-5 xl:w-auto 3xl:gap-6",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex w-full max-w-2xl items-center xl:w-auto",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$hamburger$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                view: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$hydrogen$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "static w-full 2xl:w-full"
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                                    lineNumber: 89,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "aria-label": "Site Logo",
                                href: '/',
                                className: "me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    iconOnly: true
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2f$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$0$2e$1_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiMagnifyingGlassDuotone"], {
                                    className: "h-[20px] w-[20px]"
                                }, void 0, false, {
                                    fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                                    lineNumber: 99,
                                    columnNumber: 19
                                }, void 0),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$class$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('text-gray-700 hover:text-gray-900 focus-visible:outline-0 active:translate-y-0 xl:border-0 xl:p-0 xl:shadow-none xl:backdrop-blur-none xl:hover:border-0 xl:hover:outline-0 xl:focus:outline-0 xl:focus-visible:outline-0 [&_.magnifying-glass]:me-0 [&_.placeholder-text]:hidden [&_.search-command]:ms-2 [&_.search-command]:hidden [&_.search-command]:lg:text-gray-0')
                            }, void 0, false, {
                                fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](HeaderMenuRight, {}, void 0, false, {
                        fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/layouts/lithium/lithium-header.tsx>",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c1 = Header;
var _c, _c1;
__turbopack_refresh__.register(_c, "HeaderMenuRight");
__turbopack_refresh__.register(_c1, "Header");

})()),
"[project]/src/layouts/lithium/lithium-layout.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>LithiumLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/layouts/lithium/lithium-header.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function LithiumLayout({ children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("main", {
        className: "flex min-h-screen flex-grow",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "flex w-full flex-col ",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$lithium$2f$lithium$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/src/layouts/lithium/lithium-layout.tsx>",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$1$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-grow flex-col px-4 pb-6 md:px-5 lg:px-6 lg:pb-8 3xl:px-8  3xl:pt-4 4xl:px-10",
                    children: children
                }, void 0, false, {
                    fileName: "<[project]/src/layouts/lithium/lithium-layout.tsx>",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/layouts/lithium/lithium-layout.tsx>",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/layouts/lithium/lithium-layout.tsx>",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = LithiumLayout;
var _c;
__turbopack_refresh__.register(_c, "LithiumLayout");

})()),
}]);

//# sourceMappingURL=src_layouts_lithium_85d111._.js.map