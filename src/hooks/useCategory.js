import {useState} from 'react'
import { deleteCategoryApi, getCategoriesApi,getCategoriesAllApi, saveCategoryApi, updateCategoryApi } from '../api/categories'
import { TOKEN } from '../utils/constants'

export function useCategory(){
    const [categories,setCategories] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(true)
    const [total,setTotal] = useState(0)
    const [pages,setPages] = useState(1)

    const getCategoriesAll = async () => {
        try {
            setLoading(true)
            const result = await getCategoriesAllApi()
            setCategories(result.categories)
            setLoading(false)         
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    const getCategories = async (page) =>{
        try {
            setLoading(true)
            const result = await getCategoriesApi(page)
            setCategories(result.categories.data)
            setTotal(result.categories.total)
            setPages(result.categories.last_page)
            setLoading(false)         
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    const saveCategory = async (data) => {
        try {
            setLoading(true)
            await saveCategoryApi(data,TOKEN)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    const updateCategory = async (data,id) => {
        try {
            setLoading(true)
            await updateCategoryApi(data,id,TOKEN)
            console.log(data);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }


    const deleteCategory = async (id) => {
        try {
            setLoading(true)
            await deleteCategoryApi(id,TOKEN)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }


    return {
        loading,
        error,
        categories,
        total,
        pages,
        getCategories,
        getCategoriesAll,
        deleteCategory,
        saveCategory,
        updateCategory
    }
}