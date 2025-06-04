const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
    { nombre: 'Pantalón', precio: 120 },
    { nombre: 'Corbata', precio: 50 },
]

const productosIva = productos.map(producto => {
    return{
        nombre: producto.nombre,
        precio: producto.precio + Number((producto.precio * 0.12).toFixed(2))
    }
})


const preciosCien = productosIva.filter(productos => productos.precio >= 100)

const productosOrdenados = productosIva.sort((a, b) => a.precio - b.precio)


console.log(`\nEl precio de productos con IVA es de: `)
console.log(productosIva)
console.log(`\nLos productos con precio incluyendo IVA mayores a 100 son: `)
console.log(preciosCien)
console.log(`\nEl orden de los productos con IVA de menor a mayor es de: `)
console.log(productosOrdenados)