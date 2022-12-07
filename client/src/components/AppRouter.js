import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {authAdminRoutes, authGuestRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <div style={{ minHeight: '62.5vh' }}>
            <Routes>
                {user.role === 'admin' &&
                    authAdminRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={Component} />
                    ))}
                {user.role === 'guest' &&
                    authGuestRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={Component} />
                    ))}
                {publicRoutes.map(({ path, Component }) => {
                    return <Route key={path} path={path} element={Component} />
                })}
                <Route path="*" element={<Navigate replace to="/park" />} />
            </Routes>
        </div>
    );
});

export default AppRouter;