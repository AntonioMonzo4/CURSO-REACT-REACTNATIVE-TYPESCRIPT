export default function Guitar({guitar, addToCart}) {

    const { id, name, image, description, price } = guitar


    return (
        <div classNameName="col-md-6 col-lg-4 my-4 row align-items-center">
            <div classNameName="col-4">
                <img classNameName="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div classNameName="col-8">
                <h3 classNameName="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p classNameName="fw-black text-primary fs-3">${price}</p>
                <button 
                    type="button"
                    classNameName="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}
