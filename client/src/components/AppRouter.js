import {useContext} from 'react';
import * as React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {authAdminRoutes, authGuestRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
            <Routes>
                {user.role === 'admin' && authAdminRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={Component} />
                    ))}
                {user.role === 'guest' && authGuestRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={Component} />
                    ))}
                {publicRoutes.map(({ path, Component }) => {
                    return <Route key={path} path={path} element={Component} />
                })}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
    );
});

export default AppRouter;