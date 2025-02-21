import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center mx-auto p-4 w-6/12">
            <h1 className="text-xl font-bold">Cart</h1>

            <button className="p-2 m-2 bg-black text-white rounded-lg "
            onClick={handleClearCart}
            >Clear Cart</button>  
            {cartItems.length == 0 && <h1>Your Cart is Empty!!!</h1>}          <ItemList items={cartItems}/>
        </div>
        
    );
};

export default Cart;