import { BASE_URI } from "../utils/constants"

export async function getCartApi(token){
    try {
        const uri = `${BASE_URI}/api/cart`
        const params = {
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${token}`
            }
        }
        const response = await fetch(uri,params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getCartByProductApi(token,productId){
    try {
        const uri = `${BASE_URI}/api/cart/${productId}`
        const params = {
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${token}`
            }
        }
        const response = await fetch(uri,params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function addToCartApi(data,token){
    try {
        const uri = `${BASE_URI}/api/cart/store`;
        const params = {
            method:'POST',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${token}`
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

export async function removeToCartApi(id,token){
    try {
        const uri = `${BASE_URI}/api/cart/delete/${id}`
        const params = {
            method:'DELETE',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${token}`
            }
        }
        const response = await fetch(uri,params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}