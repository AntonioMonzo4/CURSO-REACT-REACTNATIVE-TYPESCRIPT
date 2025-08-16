import { useState, useEffect } from "react"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { db } from "./data/db"

function App() {

    const MAX_ITEMS = 10;
    const MIN_ITEMS = 1;


    const initialCart = JSON.parse(localStorage.getItem("cart")) || [];


    const [data, setData] = useState([])//tambien se puede poner db 

    useEffect(() => { //Esta opción es mejor para las Apis ssino ponemos la de arriba
        setData(db)
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const [cart, setCart] = useState([])//Estado para el carrito

    function addToCart(item){
        const itemExists = cart.findIndex((guitar)=>guitar.id ===item.id)
        if(itemExists >= 0){
            console.log("Ya existe en el carrito", item.name)
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++ //esto hace que se actualice la cantidad en el carrito
            setCart(updatedCart)
        }else{
            item.quantity = 1 //Agregamos una propiedad para la cantidad

            console.log("Agregando al carrito", item.name)
            setCart([...cart, item]

            )

        }
        saveLocalStorage() //Guardamos el carrito en el localStorage
    }


    function removeFromCart(id) {
        setCart(cart.filter(guitar => guitar.id !== id)) //Filtramos el carrito para eliminar el item con el id que se pasa como parametro
        
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map(guitar => {
            if (guitar.id === id) {
                return { ...guitar, quantity: Math.min(guitar.quantity + 1, MAX_ITEMS) };
            }
            return guitar;
        });
        setCart(updatedCart);
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map(guitar => {
            if (guitar.id === id) {
                return { ...guitar, quantity: Math.max(guitar.quantity - 1, MIN_ITEMS) };
            }
            return guitar;
        });
        setCart(updatedCart);
    }

    function clearCart() {
        setCart([]);
    }

   

    return (
        <>
            <Header 
            cart={cart}// Esto quiere decir que le estamos pasando el estado del carrito al Header
            removeFromCart={removeFromCart} //Pasamos la funcion para eliminar del carrito
            increaseQuantity={increaseQuantity} //Pasamos la funcion para aumentar la cantidad
            decreaseQuantity={decreaseQuantity} //Pasamos la funcion para disminuir la cantidad
            clearCart={clearCart} //Pasamos la funcion para vaciar el carrito
            />


            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitar) => (
                        <Guitar
                        key={guitar.id}//para iterar
                        guitar={guitar}
                        cart={cart}
                        setCart={setCart}
                        addToCart={addToCart}
                         
                        /> 
                    ))}




                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default App
