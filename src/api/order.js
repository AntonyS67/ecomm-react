import { BASE_URI } from "../utils/constants"

export async function saveOrderApi(data,token){
    try {
        const uri = `${BASE_URI}/api/order/store`
        const params = {
            method:'POST',
            headers:{
                "Content-Type":"Application/json",
                Authorization:`Bearer ${token}`
            },
            body:JSON.stringify(data)
        }
        const response = await fetch(uri,params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getOrderApi(token){
    try {
        const uri = `${BASE_URI}/api/order`
        const params = {
            headers:{
                "Content-Type":"Application/json",
                Authorization:`Bearer ${token}`
            },
        }
        const response = await fetch(uri,params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getAllOrderApi(token,page){
    try {
        const uri = `${BASE_URI}/api/order/all?page=${page}`
        const params = {
            headers:{
                'Access-Control-Allow-Origin':'*',
                "Content-Type":"Application/json",
                Authorization:`Bearer ${token}`
            },
        }
        const response = await fetch(uri,params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function updateOrderApi(token,id,order){
    try {
        const uri = `${BASE_URI}/api/order/update/${id}`
        const params = {
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
                Authorization:`Bearer ${token}`
            },
            body:JSON.stringify(order)
        }
        const response = await fetch(uri,params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}
