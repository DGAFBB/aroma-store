import Basket from "./pages/basket";
import Delivery from "./pages/delivery";
import Base from "./pages/base";
import Product from "./pages/product";
import Catalog from "./pages/catalog";
import Auth from "./pages/auth";
import Admin_account from "./pages/admin_account";
import {
    BASE_ROUTE,
    BASKET_ROUTE,
    DELIVERY_ROUTE,
    PRODUCT_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    CATALOG_ROUTE,
    ADMIN_ROUTE,
    PERSONAL_ACCOUNT_ROUTE, CONTACTS_ROUTE, FAVOR_ROUTE, GUEST_ROUTE, ABOUT_ROUTE
} from "./utils/consts";
import Favor from "./pages/favor";
import Personal_account from "./pages/personal_account";
import Contacts from "./pages/contacts";

export const authAdminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin_account
    },
]
export const authGuestRoutes =[
    {
        path: GUEST_ROUTE + PERSONAL_ACCOUNT_ROUTE,
        Component: Personal_account
    },
]

export const publicRoutes = [
    {
        path: BASE_ROUTE,
        Component: Base
    },
    {
        path: ABOUT_ROUTE,
        Component: Base
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
        path: FAVOR_ROUTE,
        Component: Favor
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
]