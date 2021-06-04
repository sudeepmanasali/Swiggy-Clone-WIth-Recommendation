export const initialState = {
    
    user:"",
    userId:1,
    restaurents:[],
    cart:[],
    cartHotel:{},

}

const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
       
        case "addRestaurents":
                return{
                    ...state,
                    restaurents:action.data,
                };   
           
  
                
        case "cartHotel":
            return{
                ...state,
                cartHotel:action.data,
            };          

      
        case "addUser":
            return{
                ...state,
                user:action.data.name,
                userId:action.data.id
            }; 
            
        case "addToCart":
            return{
                ...state,
                cart:[...state.cart,action.data]
            };         
        

        default: 
          return state;    
    }
}

export default reducer;