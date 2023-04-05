import react from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return (

        <div className="cart">
            <div>
                <h1>CartItems</h1>

            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ? <div className="checkout">
                <p>Subtotal : ${totalAmount}</p>
                <button onClick={() => navigate("/")}>continue shopping </button>
                <button>checkout</button>

            </div>
                : <h2>Your Cart is Empty</h2>}

        </div>
    )
}