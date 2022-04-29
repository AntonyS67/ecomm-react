import { BASE_URI } from "../utils/constants"


export async function getCategoriesAllApi(){
    try {
        const uri = `${BASE_URI}/api/categories/all`
        const response = await fetch(uri)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getCategoriesApi(page){
    try {
        const uri = `${BASE_URI}/api/categories?page=${page}`
        const response = await fetch(uri)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function saveCategoryApi(data,token){
    try {
        const uri = `${BASE_URI}/api/category/store/`
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

export async function updateCategoryApi(data,id,token){
    try {
        const uri = `${BASE_URI}/api/category/update/${id}`
        const params = {
            method:'PUT',
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

export async function deleteCategoryApi(id,token){
    try {
        const uri = `${BASE_URI}/api/category/delete/${id}`
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