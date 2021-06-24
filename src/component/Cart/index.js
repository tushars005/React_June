
import React,{useEffect, useState} from 'react';
import axios from "axios"

const Cart = (props) => {
    console.log(props)
    const [product, updateproduct]  = useState([])
    const {id} = props.location.product_id
    const array = JSON.parse(localStorage.getItem('document'));
    
    useEffect(()=>{
        axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(res => updateproduct(res.data))
    })

    return ( 
        <div>
            <h1>Checkout</h1>
            <h3>Total Items</h3>

        </div>
     );
}
 
export default Cart;