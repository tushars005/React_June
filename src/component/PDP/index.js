import axios from 'axios';
import React,{useEffect, useState } from 'react';
import Footer from '../Footer'
import {Link} from "react-router-dom"


const PDP = (props) => {
    const [product,setProduct]= useState({});
    // const [source, setsource] = useState(product.preview);
    const {id} = props.match.params
    const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/"
    useEffect(()=>{
        axios(`${url}${id}`)
        .then(res=> setProduct(res.data))
        .catch(err=>alert(err))
    },[])

    const path = process.env.PUBLIC_URL
    return (
        
        <div>
            
            <h1>PDP</h1>
            <h1>Product -{id}</h1>
            <div className="col-6" >
                <img src = {product.preview}  style = {{width:"100%"}}/>

            </div>
            <div classNam="col-6">
                <h1>{product.id}</h1>
                <h2>{product.name}</h2>
                <h3>{product.brand}</h3>
                <h3>{`Price: Rs${product.price}`}</h3>
                <h3>Description</h3>
                <p>{product.description}</p>
                <h4>Product Preview</h4>
                <div>
                    {product.photos&&product.photos.length && product.photos.map((item)=>(
                        
                            <img src = {item} onClick={()=>{
                                
                                
                                setProduct({...product, preview:item})
                                
                            }}/>
                        
                        )
                    )}
                    
                </div>
                <Link to ={{
                    pathname:`${path}/cart`,
                    product_id :id
                }}>
                        <button>Add to cart</button>
                </Link>
                
            </div>
            
        </div>
     );
}
 
export default PDP;

//  <Link to={{
//     pathname: `product/${id}`
//     preview,
//     name,
//     descriptionName: description,
// }} >
// </Link>