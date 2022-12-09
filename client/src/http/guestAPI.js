import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const GuestRegistration = async (email, phone_number) => {
    const {data} = await $host.post('api/guest/registration', {email, phone_number, role:'guest'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const GuestLogin = async (email) => {
    const { data } = await $host.post('api/guest/login', { email })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const GuestCheck = async () => {
    const { data } = await $authHost.get('api/guest/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}