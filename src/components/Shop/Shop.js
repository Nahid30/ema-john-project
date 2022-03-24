
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])


    const handleAddToCart=(product)=>{
        const newCart = [...cart, product]
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        product={product}
                        key={product.id}
                        handleAddToCart ={handleAddToCart}
                    ></Product>)
                }

            </div>


            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $1140</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <p>Grand Total: $1559</p>

                <div>
                    <button>Clear Cart</button>
                    
                </div>
                <div>
                <button>Review Order</button>
                </div>

            </div>

        </div>
    );
};

export default Shop;