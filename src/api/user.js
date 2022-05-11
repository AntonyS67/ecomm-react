import { BASE_URI } from "../utils/constants"

export async function getMeApi(token){
    try {
        const uri = `${BASE_URI}/api/auth/me`
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