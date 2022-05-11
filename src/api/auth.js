import { BASE_URI } from "../utils/constants"

export async function registerApi(data){
    try {
        const uri = `${BASE_URI}/api/auth/register`
        const params = {
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
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

export async function loginApi(data){
    try {
        const uri = `${BASE_URI}/api/auth/login`
        const params = {
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
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

export async function logoutApi(token){
    try {
        const uri = `${BASE_URI}/api/auth/logout`
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