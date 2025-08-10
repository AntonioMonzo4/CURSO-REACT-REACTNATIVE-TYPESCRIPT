import { useMemo } from 'react'

export default function Header({cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart}) {

    // State Derivado
    const isEmpty = useMemo( () => cart.length === 0, [cart])
    const cartTotal = useMemo( () => cart.reduce( (total, item ) => total + (item.quantity * item.price), 0), [cart] )

    return (
        <header classNameName="py-5 header">
            <div classNameName="container-xl">
                <div classNameName="row justify-content-center justify-content-md-between">
                    <div classNameName="col-8 col-md-3">
                        <a href="index.html">
                            <img classNameName="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav classNameName="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div 
                            classNameName="carrito"
                        >
                            <img classNameName="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" classNameName="bg-white p-3">
                                {isEmpty ? (
                                    <p classNameName="text-center">El carrito esta vacio</p>
                                ) : (
                                <>
                                    <table classNameName="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map( guitar => (
                                                <tr key={guitar.id}>
                                                    <td>
                                                        <img 
                                                            classNameName="img-fluid" 
                                                            src={`/img/${guitar.image}.jpg`}
                                                            alt="imagen guitarra" 
                                                        />
                                                    </td>
                                                    <td>{guitar.name}</td>
                                                    <td classNameName="fw-bold">
                                                        ${guitar.price}
                                                    </td>
                                                    <td classNameName="flex align-items-start gap-4">
                                                        <button
                                                            type="button"
                                                            classNameName="btn btn-dark"
                                                            onClick={() => decreaseQuantity(guitar.id)}
                                                        >
                                                            -
                                                        </button>
                                                            {guitar.quantity}
                                                        <button
                                                            type="button"
                                                            classNameName="btn btn-dark"
                                                            onClick={() => increaseQuantity(guitar.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            classNameName="btn btn-danger"
                                                            type="button"
                                                            onClick={() => removeFromCart(guitar.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <p classNameName="text-end">Total pagar: <span classNameName="fw-bold">${cartTotal}</span></p>
                                </>
                                )}

                                <button 
                                    classNameName="btn btn-dark w-100 mt-3 p-2"
                                    onClick={clearCart}
                                >Vaciar Carrito</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
