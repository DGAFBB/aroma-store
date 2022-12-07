import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const GuestRegistration = async (email, phone_number, password) => {
    const {data} = await $host.post('api/guest/registration', {email, password, role: 'GUEST'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const AdminLogin = async (login, password) => {
    const { data } = await $host.post('api/stuff/login', { login, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const stuffCheck = async () => {
    const { data } = await $authHost.get('api/stuff/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const AdminRegistration = async (email, phone_number, password) => {
    const {data} = await $host.post('api/guest/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}