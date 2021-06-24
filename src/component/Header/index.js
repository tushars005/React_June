import React, {Component} from 'react';
import styles from './Header.module.css'

import {convertToUpper as toUpper}  from '../../utils/constants'
import { getNodeText, render } from '@testing-library/react';

class movie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cart:[],
            ori_cart:[],
            loader:true,
            seach_val:""
         }
    }
    componentDidMount(){
        fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
        .then(res=>res.json())
        .then(res=>{
            this.setState({ori_cart:res.Search, loader:false, cart: res.Search})
            
        })
    }

    render() { 
        return ( 
            <div>
                <input onChange={(e)=>{
                    this.setState({search_val:e.target.value})
                }}></input>

                <button onClick={()=>
                    { 
                    
                    this.setState({cart:this.state.ori_cart.filter(item=>item.Title.includes(this.state.search_val))})
    
                    // this.state.cart.filter(item=>item.Year===this.state.seach_val)
                    }
                }>search</button>
                <div>
                    {this.state.cart&&this.state.cart.length&&this.state.cart.map(item=>(
                        <div className={styles.main}>
                            <div className={styles.hov}> 
                                <h1>{item.Title}</h1>
                                <img src = {item.Poster} />
                                <h4>{item.Year}</h4>
                            </div>
                            <div className = {styles.dis}>
                                <h1>{item.imdbID}</h1>
                            </div>
                        </div>
                        
                        

                    ))}
                </div>
                
            </div>
         );
    }
}
 
export default movie;

// class load extends Component {
//     constructor(props) {
//         super(props);
//        

//          }
//     }
//     // const change=(res)=>{
//     //     this.setState({loader:false,product:res})
//     // }
//     componentDidMount(){
//         fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
//         .then(res=>res.json)
//         .then(res=>{
//             setTimeout(()=>{this.setState({loader:false,product:res})},5000)
//         })
//     }

//     shouldComponentUpdate(nextProps, nextState){
//         if(nextState.product.length>10) return true;
//         else     return false;
//     }

//     render() { 
//         const {loader,product} = this.state
//         return ( 
//             <div>
//                 {loader?<h1>Loading...</h1>:
//                     product.length&& product.map(({preview})=>
//                         <img src = {preview}/>
//                     )
//                 }
//             </div>
//          );
//     }
// }
 
// export default load;



// class parent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             count:0,
//             loader:true,
//             products:[]
//          }
//     }
//     componentDidMount(){
//         console.log("third call mount parent")
//         fetch("").then(res=>res.json())
//         .then(res=> this.setState({products:res,loader:false  })
              
//         )
//     }
//     render() { 
//         const {loader,products}= this.state
//         return ( 
//             <div>
//                  {loader? <h1>Loading...</h1>:
//                     products.length&& products.map(({name})=>
//                     <h1>{name}</h1>)
//                  }
            
//             <child
//                 count= {this.state.count}
//                 updateCount={(e)=>{
//                     console.log("event",e)
//                     this.setState({count: ++this.state.count})
//                 }
                    
//                 }
//             />
//             </div>
//         );
//     }
// }
 
// // export default parent;



// class child extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     ComponentDidMount(){
//         console.log("third call mount child")
        
//     }
//     render() { 
        
//         return ( 
//             <div>
               
//                 <h1>{this.props.count}</h1>
//                 <button onclick={()=>{
//                     this.props.updateCount
//                 }}>Click to increment</button>
//             </div>
//          );
//     }
// }
 
// export default child;


// class Header extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             name: "Anil",
//             age: 10
//         }
//     }
//     updateData=()=>{
//         this.setState({name:"Tushar", age:123})
//     };
    
//     render(){
//         return(
//             <div>
//                 <h1 className = {styles.heading}>{toUpper(this.state.name)}</h1>
//                 <button onClick= {this.updateData}>click</button>
//             </div>
//         )
//     }
// }

// class Header extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             counter:0
//         }
//     }
    
//     shouldComponentUpdate(nextProps, nextState){
//         console.log(this.state.counter, nextState.counter);
//         if(nextState.counter<6 && nextState.counter >=0)    return true;
//         else{
//             if(nextState.counter>=6)    nextState.counter=5
//             else    nextState.counter=0
//             return false;
//         }
        
//     }
//     render(){
//         let k = this.state.counter 
//         return(
//             <div>
//                 <h1>{this.state.counter}</h1>
                
//                 <button onClick={()=>{
//                     this.setState({counter:--k})
//                 }}>minus</button>
//                 <button onClick={()=>{
//                     this.setState({counter:++k})
//                 }}>plus</button>
//             </div>
//         )
//     }
// }







// // const Header = () => {
// //     return ( 
// //     <h1 className= {styles.heading}>{toUpper("Header")}</h1> );
// // }
 
// export default Header;