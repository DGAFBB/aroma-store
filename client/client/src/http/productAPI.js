import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createVoluem = async (type) => {
    const {data} = await $authHost.post('api/voluem', voluem)
    return data
}

export const fetchTVoluems = async () => {
    const {data} = await $host.get('api/voluem')
    return data
}

export const createAroma = async (aroma) => {
    const {data} = await $authHost.post('api/aroma', aroma)
    return data
}

export const fetchAromas = async () => {
    const {data} = await $host.get('api/aroma', )
    return data
}

export const createProduct = async (device) => {
    const {data} = await $authHost.post('api/product', device)
    return data
}

export const fetchProducts = async (typeId, aromaId, page, limit= 5) => {
    const {data} = await $host.get('api/product', {params: {
            typeId, aromaId, page, limit
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}