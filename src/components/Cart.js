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
        <div className="text-center mx-auto p-6 w-8/12 bg-white rounded-lg shadow-lg mt-8 border border-gray-200">
            <h1 className="text-2xl font-bold mt-10 text-gray-900 mb-4">Your Cart</h1>
            
            {cartItems.length === 0 ? (
                <h1 className="text-gray-500 text-lg">Your Cart is Empty!!!</h1>
            ) : (
                <>
                    <button 
                        className="p-3 mb-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                    <ItemList items={cartItems} />
                </>
            )}
        </div>
    );
};

export default Cart;
