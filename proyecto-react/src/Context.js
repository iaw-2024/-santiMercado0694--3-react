import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const getProductsFromAPI = async() => {
      const URL_productos = process.env.REACT_APP_API_URL+'/productos';
      const response_productos = await fetch(URL_productos);
      const dataProductos = await response_productos.json();
      setProductos(dataProductos);
 
  }

    useEffect( () => {
        getProductsFromAPI();
    }, []);

  return <AppContext.Provider value={{
    productos,
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }