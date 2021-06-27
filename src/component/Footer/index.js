import React,{ useState , useEffect} from 'react';
import styles from './Footer.module.css'
import axios from "axios"
import Cart from "../Cart"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {getProducts} from "../../redux/actions"
import {addcart} from "../../redux/actions"

// const footer = () => {
//     const [name,updatename] = useState("sachin")

//     return ( 
//         <>
//             <h1>{name}</h1>
//             <button onClick={()=>updatename("tushar")}>click</button>
//         </>
//      );
// }

const Products=(props)=>{
    // const [products, setProducts] = useState([])
    // const [cart, setCart] = useState([])
    const {products,cart} = props
    const path = process.env.PUBLIC_URL
    useEffect(()=>{
        axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(res=>{
            props.sendProducts(res.data)
        })
        .catch((err)=> alert(err))
    },[])    
    

    useEffect(()=>{
        console.log("cart", cart);
    })
    console.log("Products", products);
    console.log("cart", cart);
    // useEffect(()=>{
    //     console.log("ComponentDidMount and Didupdate")
    // })   //componentDidmount and Didupdate
    return(
        <div className={styles.main}>

            {products.length && products.map(item=>(
                <div className= {styles.box}>
                    
                    <h1>{item.name}</h1>
                    <Link to ={`${path}/product/${item.id}`}>
                    <img src = {item.preview} className={styles.image}/>
                    </Link>
                    <h3>{item.price}</h3>
                    <p className={styles.desc}>{item.description}</p>
                    <Link to ={`${path}/cart`}>
                        <button onClick={()=>props.sendCart(item)}>Add to cart</button>

                    </Link>
                    
                </div>
            ))}
        </div>
    )
}


const mapStateToProps = (store) => ({
    products: store.products,
    cart:store.cart
  });
  
  const mapDispatchToProps = (dispatch) => ({
    sendProducts: (payload) => dispatch(getProducts(payload)),
    sendCart: (payload)=> dispatch(addcart(payload))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Products);

// const Footer = () => {
//     const [count, updatecount] = useState(0)
    
//     return (  
//         <>
//         <h1>{count}</h1>
//         <button onClick={()=>{
//             const x = count+1
//             updatecount(x)}}>increment</button>
//         </>
//     );
// }
 
// export default Footer;
 


// class footer extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             enter:0,
//             dis:0,
//             todos:[]
//          }
//     }
//     componentDidMount(){
//         axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res)=>{
            
//             this.setState({todos: res.data});
//         });
//         // axios({
//         //     method:"post", //get 
//         //     url:"https://jsonplaceholder.typicode.com/todos/",
//         //     data:{
//         //         name:"Akash"
//         //     },
//         //     params:{
//         //         id:1
//         //     },
//         //     header: {}
//         // })
//         // .then(res=>console.log(res))
//         // .catch(err=> console.log("Error",err))
//     }
//     render() { 
//         const {todos} = this.state;
//         return (  
//             <div>
//                 {console.log("render")}
//                 <h1>{this.state.dis}</h1>
//                 <input onChange={(e)=>{
//                     this.setState({enter:e.target.value})
//                 }}></input>

                

//                 <button onClick = {()=>{
//                     this.setState({dis:this.state.enter})
//                 }}>submit</button>

//             </div>
//         )
//     }
// }
 
// export default footer;