import "./cart.css"
function Cart({cart, setCart}) {
    // la idea es guardar los productos cuando le de al boton añadir al carrito
    return (
    <div>
        <h2> Tu carrito </h2>
        {cart.map((product) => (
            <div key={product._ide} className="cart">
                <img src={product.imagen} alt={product.nombre} />
                <p>{product.nombre}</p>
                <p>{product.talle}</p>
                <p>{product.precio}</p>
            </div>
        ))    
}
    </div>
  )
}

export default Cart;