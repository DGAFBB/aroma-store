import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const AdminRegistration = async (email, login, password) => {
    const { data } = await $host.post('api/admin/registration', {login, password, role:'admin'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const AdminLogin = async (login, password) => {
    const { data } = await $host.post('api/admin/login', { login, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const AdminCheck = async () => {
    const { data } = await $authHost.get('api/admin/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const fetchAdmin = async (id) => {
    const {data} = await $host.get('api/admin/' + id)
    return data
}