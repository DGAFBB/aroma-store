import Basket from "./pages/basket";
import Delivery from "./pages/delivery";
import Base from "./pages/base";
import Product from "./pages/product";
import Catalog from "./pages/catalog";
import Auth from "./pages/auth";
import Admin_account from "./pages/admin_account";
import Admin_account_reg from "./pages/admin_account_reg";
import Admin_catalog from "./pages/admin_catalog";
import Admin_deliveries from "./pages/admin_deliveries";
import Admin_guests from "./pages/admin_guests_panel";
import Personal_account_reg from "./pages/personal_account_reg";
import {
    BASE_ROUTE,
    BASKET_ROUTE,
    DELIVERY_ROUTE,
    PRODUCT_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    CATALOG_ROUTE,
    ADMIN_ROUTE,
    PERSONAL_ACCOUNT_ROUTE,
    CONTACTS_ROUTE,
    FAVOR_ROUTE,
    GUEST_ROUTE,
    ABOUT_ROUTE,
    ADMIN_CATALOG_ROUTE,
    ADMIN_ACCOUNT_ROUTE,
    ADMIN_DELIVERIES_ROUTE,
    ADMIN_GUESTS_PANEL_ROUTE,
    ORDER_ROUTE,
    ADMIN_ACCOUNT_REG_ROUTE,
    PERSONAL_ACCOUNT_REG_ROUTE
} from "./utils/consts";
import Favor from "./pages/favor";
import Personal_account from "./pages/personal_account";
import Contacts from "./pages/contacts";
import Order from "./pages/order";

export const authAdminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin_account
    },{
        path: ADMIN_CATALOG_ROUTE,
        Component: Admin_catalog
    },
    {
        path: ADMIN_ACCOUNT_REG_ROUTE,
        Component: Admin_account_reg
    },
    {
        path: ADMIN_DELIVERIES_ROUTE,
        Component: Admin_deliveries
    },
    {
        path: ADMIN_GUESTS_PANEL_ROUTE,
        Component: Admin_guests
    },
]




export const authGuestRoutes =[
    {
        path: GUEST_ROUTE + PERSONAL_ACCOUNT_ROUTE,
        Component: Personal_account
    },
    {
        path: PERSONAL_ACCOUNT_REG_ROUTE,
        Component: Personal_account_reg
    },

]

export const publicRoutes = [
    {
        path: BASE_ROUTE,
        Component: Base
    },
    {
        path: PERSONAL_ACCOUNT_ROUTE,
        Component: Personal_account
    },
    {
        path: ORDER_ROUTE,
        Component: Order
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