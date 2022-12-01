import Basket from "./pages/basket";
import Delivery from "./pages/delivery";
import Mainpage from "./pages/mainpage";
import Product from "./pages/product";
import Catalog from "./pages/catalog";
import Auth from "./pages/auth";
import Admin from "./pages/admin";
import {
    MAIN_ROUTE,
    BASKET_ROUTE,
    DELIVERY_ROUTE,
    PRODUCT_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    CATALOG_ROUTE,
    ADMIN_ROUTE,
    PERSONAL_ACCOUNT_ROUTE, CONTACTS_ROUTE
} from "./utils/consts";
import Favorit from "./pages/favorit";
import Personal_account from "./pages/personal_account";
import Contacts from "./pages/contacts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PERSONAL_ACCOUNT_ROUTE,
        Component: Personal_account
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Mainpage
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: DELIVERY_ROUTE,
        Component: Delivery
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path:PRODUCT_ROUTE + '/:id',
        Component: Product
    },
    {
        path: FAVORIT_ROUTE,
        Component: Favorit
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
]