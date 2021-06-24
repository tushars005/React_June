import React,{ useState , useEffect} from 'react';
import styles from './Footer.module.css'
import axios from "axios"

import {Link} from "react-router-dom"
// const footer = () => {
//     const [name,updatename] = useState("sachin")

//     return ( 
//         <>
//             <h1>{name}</h1>
//             <button onClick={()=>updatename("tushar")}>click</button>
//         </>
//      );
// }

const Products=()=>{
    const [products, setProducts] = useState([])
    // const [cart, setCart] = useState([])
    
    useEffect(()=>{
        axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(res=>{
            setProducts(res.data)
        })
        .catch((err)=> alert(err))
    },[])    

    useEffect(()=>{
        console.log("ComponentDidMount and Didupdate")
    })   //componentDidmount and Didupdate
    return(
        <div className={styles.main}>

            {products.length && products.map(item=>(
                <div className= {styles.box}>
                    
                    <h1>{item.name}</h1>
                    <Link to ={`/product/${item.id}`}>
                    <img src = {item.preview} className={styles.image}/>
                    </Link>
                    <h3>{item.price}</h3>
                    <p className={styles.desc}>{item.description}</p>
                    
                </div>
            ))}
        </div>
    )
}
export default Products

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