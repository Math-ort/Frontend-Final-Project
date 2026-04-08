import "./cart.css";

function Cart({ cart, setCart }) {

  const addQuantity = (index) => {
    const updated = cart.map((item, i) =>
      i === index ? { ...item, cantidad: (item.cantidad || 1) + 1 } : item
    );
    setCart(updated);
  };

  const subtractQuantity = (index) => {
    const updated = cart
      .map((item, i) =>
        i === index ? { ...item, cantidad: (item.cantidad || 1) - 1 } : item
      )
      .filter((item) => (item.cantidad || 1) > 0);
    setCart(updated);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.precio * (item.cantidad || 1),
    0
  );

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.imagen} alt={product.nombre} />
              <div className="cart-item-info">
                <p className="name">{product.nombre}</p>
                <p className="talla">Talla: {product.talla}</p>
                <div className="quantity-controls">
                  <button onClick={() => subtractQuantity(index)}>−</button>
                  <span>{product.cantidad || 1}</span>
                  <button onClick={() => addQuantity(index)}>+</button>
                </div>
              </div>
              <span className="price">
                {(product.precio * (product.cantidad || 1)).toFixed(2)} €
              </span>
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                ✕
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <span>Total:</span>
            <span className="total-price">{total.toFixed(2)} €</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

