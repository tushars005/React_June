
import React,{useEffect, useState} from 'react';
import axios from "axios"
import {connect} from "react-redux"
import Home from "../Home"
import {Link} from "react-router-dom"
import {clearcart} from "../../redux/actions"
import {Redirect} from "react-router-dom"

import styles from "./Cart.module.css"


const Cart = (props) => {
    // console.log(props)
    const [product, updateproduct]  = useState([])
    const [mine, updatemine] = useState({})
    const [redirect, setredirect] = useState(false);
    // const {id} = props.location.product_id
    // const array = JSON.parse(localStorage.getItem('document'));
    const {cart} = props
    const path = process.env.PUBLIC_URL
    
    
    useEffect(()=>{
        axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(res => updateproduct(res.data))
        
    })
    // useEffect(()=>{
    //     console.log(cart)
    // })
    const placeorder=()=>{
        
        console.log(cart)
        props.clearcart();
        
        
        setredirect(true)
        
        
        
    }
    return ( 
        
        <div>
            
            {redirect &&<Redirect to={`${path}/`}/>}


            



            <h1>Checkout</h1>
            <h3>Total Items</h3>
            <h3>{`Cart Total: ${cart.length}`}</h3>
            {cart&&cart.length&&cart.map(({id,value})=>(
                <div>

                    <div className="card" >
                        <img className="card-img-top" src={id.preview} className ={styles.img}/>
                        <div className="card-body">
                        <h1 className="card-text">{id.name}</h1>
                        <h1 className="card-text">{`Number of items: ${value}`}</h1>
                        <h1 className="card-text">{`Amount:${value*id.price}`}</h1>
                        
                        </div>
                        
                    </div>
                    
                    
                    {/* <h1>{`${item.id}:${item.value}`}</h1> */}
                </div>

                
                
            ))}
            <div>
                <h1>{`Total: ${cart.reduce((acc,item)=>{
                    return acc= acc+ item.value*item.id.price
                },0)}`}</h1>
            </div>
            <Link to ={`${path}/`}>
                <h3>back to shopping</h3>

            </Link>
            <button onClick={placeorder}>Place Order</button>
            
            
        </div>
     );
}

const mapDispatchToProps = (dispatch) => ({
    clearcart: ()=> dispatch(clearcart())
  });



const mapStateToProps = (store) => ({
    
    cart:store.cart
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);