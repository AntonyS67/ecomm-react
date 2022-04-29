import { BASE_URI } from "../utils/constants"

export async function getProductsApi(page){
    try {
        const uri = `${BASE_URI}/api/products?page=${page}`
        const response= await fetch(uri)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getAllProductsApi(){
    try {
        const uri = `${BASE_URI}/api/products/all`
        const response= await fetch(uri)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function saveProductsApi(data,token){
    try {
        const formData = new FormData()
        formData.append('name',data.name)
        formData.append('description',data.description)
        formData.append('category_id',data.category_id)
        formData.append('image',data.image)
        formData.append('price',data.price)
        formData.append('stock',data.stock)

        const uri = `${BASE_URI}/api/products/store`
        const params = {
            method:"POST",
            headers:{
                "Authorization":`Bearer ${token}`
            },
            body:formData
        }
        const response = await fetch(uri,params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function updateProductApi(data,id,token){
    try {
        const formData = new FormData()

        formData.append('name',data.name)
        formData.append('description',data.description)
        formData.append('category_id',data.category_id)
        formData.append('price',data.price)
        formData.append('stock',data.stock)

        if(data.image) formData.append('image',data.image)

        const uri = `${BASE_URI}/api/products/update/${id}`
        const params = {
            method:'POST',
            headers:{
                "Authorization":`Bearer ${token}`
            },
            body:formData
        }
        const response = await fetch(uri,params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}
export async function deleteProductApi(id,token){
    try {
        const uri = `${BASE_URI}/api/products/delete/${id}`
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