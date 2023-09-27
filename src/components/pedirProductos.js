import data from './ItemListContainer/productos.json' 

export const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(data)
        }, 1000)     
    })
}

export const pedirItemPorId = (id) => {
    return new Promise ((resolve, reject) => {
        const item = data.find((el) => el.id === id);

        if (item) {
            resolve (item)
        } else {
            reject ({
                error: "No se encontro el producto"
            }) 
        }
    }) 
}

