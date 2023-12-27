import React from "react";
import CartItem from "../components/cart-items";

const Home = ({data, addCart}) =>{
    return(
        <div className="d-flex flex-wrap gap-4 justify-content-around mt-4">
            {
                data.map((product, index) =>{
                    return <CartItem onClick={() => addCart(product.id)} {...product} children="Add To Card"/>
                })
            }
            
        </div>
    )
}
export default Home;