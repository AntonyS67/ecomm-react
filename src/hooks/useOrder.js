import { useState } from "react"
import { getAllOrderApi, getOrderApi, saveOrderApi, updateOrderApi } from "../api/order"
import { useAuth } from "./useAuth"

export const useOrder = () => {
    const {auth} = useAuth()
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)
    const [orders,setOrders] = useState([])
    const [total,setTotal] = useState(0)
    const [pages,setPages] = useState(1)
    const [pdf,setPDF] = useState('')

    const getOrders = async () => {
        try {
            setLoading(true)
            const result = await getOrderApi(auth.token)
            setLoading(false)
            setOrders(result.orders)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    const getAllOrders = async (page) => {
        try {
            setLoading(true)
            const result = await getAllOrderApi(auth.token,page)
            setLoading(false)
            setTotal(result.orders.total)
            setPages(result.orders.last_page)
            setOrders(result.orders.data)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    const saveOrder = async (data) => {
        try {
            setLoading(true)
            await saveOrderApi(data,auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    const updateOrder = async (id,order) => {
        try {
            setLoading(true)
            await updateOrderApi(auth.token,id,order)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    return {
        error,
        loading,
        orders,
        total,
        pages,
        saveOrder,
        getOrders,
        getAllOrders,
        updateOrder
    }
}