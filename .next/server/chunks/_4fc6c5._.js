module.exports = {

"[project]/src/env.mjs [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "env": ()=>env
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$9$2e$2_typescript$40$5$2e$4$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@t3-oss+env-nextjs@0.9.2_typescript@5.4.2_zod@3.22.4/node_modules/@t3-oss/env-nextjs/dist/index.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const env = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$9$2e$2_typescript$40$5$2e$4$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnv"]({
    /*
   * ServerSide Environment variables, not available on the client.
   */ server: {
        NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
            'development',
            'test',
            'production'
        ]),
        NEXTAUTH_SECRET: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1).optional(),
        NEXTAUTH_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
        // Since NextAuth.js automatically uses the VERCEL_URL if present.
        (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL
        process.env.VERCEL ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().url()),
        // email
        SMTP_HOST: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
        SMTP_PORT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
        SMTP_USER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
        SMTP_PASSWORD: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
        SMTP_FROM_EMAIL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().email().optional(),
        GOOGLE_CLIENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
        GOOGLE_CLIENT_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
    },
    /*
   * Environment variables available on the client (and server).
   */ client: {
        NEXT_PUBLIC_APP_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
        NEXT_PUBLIC_GOOGLE_MAP_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$22$2e$4$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
    },
    runtimeEnv: process.env
});

})()),
"[project]/src/config/routes.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
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
"[project]/src/app/api/auth/[...nextauth]/pages-options.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "pagesOptions": ()=>pagesOptions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/routes.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const pagesOptions = {
    signIn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].signIn,
    error: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].signIn
};

})()),
"[project]/src/app/api/auth/[...nextauth]/auth-options.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "authOptions": ()=>authOptions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$4$2e$24$2e$7_next$40$14$2e$1$2e$3_nodemailer$40$6$2e$9$2e$13_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@4.24.7_next@14.1.3_nodemailer@6.9.13_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$4$2e$24$2e$7_next$40$14$2e$1$2e$3_nodemailer$40$6$2e$9$2e$13_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@4.24.7_next@14.1.3_nodemailer@6.9.13_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/providers/google.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/env.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__external__lodash$2f$isEqual__ = __turbopack_external_require__("lodash/isEqual", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$pages$2d$options$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/auth/[...nextauth]/pages-options.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const authOptions = {
    // debug: true,
    pages: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$pages$2d$options$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pagesOptions"]
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    callbacks: {
        async session ({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.idToken
                }
            };
        },
        async jwt ({ token, user }) {
            if (user) {
                // return user as JWT
                token.user = user;
            }
            return token;
        },
        async redirect ({ url, baseUrl }) {
            // const parsedUrl = new URL(url, baseUrl);
            // if (parsedUrl.searchParams.has('callbackUrl')) {
            //   return `${baseUrl}${parsedUrl.searchParams.get('callbackUrl')}`;
            // }
            // if (parsedUrl.origin === baseUrl) {
            //   return url;
            // }
            return baseUrl;
        }
    },
    providers: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$4$2e$24$2e$7_next$40$14$2e$1$2e$3_nodemailer$40$6$2e$9$2e$13_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
            id: 'credentials',
            name: 'Credentials',
            credentials: {},
            async authorize (credentials) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid
                const user = {
                    email: 'admin@admin.com',
                    password: 'admin'
                };
                if (__TURBOPACK__external__lodash$2f$isEqual__["default"](user, {
                    email: credentials?.email,
                    password: credentials?.password
                })) {
                    return user;
                }
                return null;
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$4$2e$24$2e$7_next$40$14$2e$1$2e$3_nodemailer$40$6$2e$9$2e$13_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
            clientId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GOOGLE_CLIENT_ID || '',
            clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GOOGLE_CLIENT_SECRET || '',
            allowDangerousEmailAccountLinking: true
        })
    ]
};

})()),
"[project]/src/app/api/auth/[...nextauth]/route.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>handler,
    "POST": ()=>handler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$4$2e$24$2e$7_next$40$14$2e$1$2e$3_nodemailer$40$6$2e$9$2e$13_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@4.24.7_next@14.1.3_nodemailer@6.9.13_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$auth$2d$options$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/auth/[...nextauth]/auth-options.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const handler = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$4$2e$24$2e$7_next$40$14$2e$1$2e$3_nodemailer$40$6$2e$9$2e$13_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$auth$2d$options$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authOptions"]);
;

})()),
"[project]/.next-internal/server/app/api/auth/[...nextauth]/route/actions.js (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({});

}.call(this) }),

};

//# sourceMappingURL=_4fc6c5._.js.map