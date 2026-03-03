import React from 'react'
import api from "../../services/api";

export const fetchProducts = async() => {
  const response = await api.get("/products")
  return response.data
}

export const fetchSingleProduct = async(id) => {
  const response = await api.get(`/products/${id}`)
  return response.data
}