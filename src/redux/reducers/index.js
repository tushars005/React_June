const initialState = {
    userDetails: [],
    products: [{ name: "Sachin", age: 123 }],
    cart: [],
  };
  
  const Reducers = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        // debugger;
        return { ...state, products: action.payload };
     case "ADD_TO_CART":
        //  const flag = false;
         for(let i of state.cart){
             if(i.id.id===action.payload.id){
                i.value = i.value+1
                return {...state}
             }
         }
         return {...state,cart:[...state.cart,{id:action.payload,value:1}]}
         
     case "CLEAR_CART":
         return {...state, cart:[]};


      default:
        return state;
    }

    

  };
  
  export default Reducers;