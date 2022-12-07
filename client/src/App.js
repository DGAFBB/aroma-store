import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import { GuestCheck} from "./http/guestAPI";
import {Spinner} from "react-bootstrap";
import './styles/App/App.css';
import {AdminCheck} from "./http/adminAPI";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        AdminCheck()
            .then((data) => {
                user.setUser(data)
                user.setIsAuth(true)
                user.setRole(data.role)
            })
            .finally(() => setLoading(false))
    }, [])
    useEffect(() => {
        GuestCheck()
            .then((data) => {
                user.setUser(data)
                user.setIsAuth(true)
                user.setRole(data.role)
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
         <BrowserRouter>
            <NavBar />
            <AppRouter />
         </BrowserRouter>
    );
});

export default App;
