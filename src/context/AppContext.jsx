import React, { useState } from "react";

export const AppContext = React.createContext({})

export const AppContextProvider = ({children}) => {
    const [products, setProducts] = useState([])


    const addProduct = (product) => {
        console.log(product)
      
      
        // const isInCart = (element) => element.id === product.id
        // !products.some(isInCart) && setProducts(prev => [...prev, product])
    }

    const removeProduct = (product) => {
        setProducts(prev => prev.filter(ele => ele.id !== product.id))
    }

    const addMore = (productId) => {
        const aux = products.map(ele => ele.id === productId ? {...ele, cant: cant + 0.250} : ele)
        setProducts(aux)
    }

    const removeMore = (productId) => {
        const aux = products.map(ele => ele.id === productId ? {...ele, cant: cant - 0.250} : ele)
        setProducts(aux)
    }



    return (
        <AppContext.Provider value={{ products, addMore, removeMore, addProduct, removeProduct }}>
            {children}
        </AppContext.Provider>
    )
} 
