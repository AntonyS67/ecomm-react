import { BASE_URI } from "../utils/constants"

export async function getMeApi(){
    try {
        const uri = `${BASE_URI}/api/auth/me`
        const response = await fetch(uri)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}