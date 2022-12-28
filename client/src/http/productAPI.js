import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createPrice = async (volm) => {
    const {data} = await $authHost.post('api/volm', volm)
    return data
}

export const fetchTPrices = async () => {
    const {data} = await $host.get('api/volm')
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