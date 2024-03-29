export const initialState= {
    basket: [],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount, 0);

const reducer = (state,action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],

            };
            default :
            return state;
    }
};

export default reducer;


// export const initialState = {
   
     
//     basket: [

//       {
//         id:"325325325",
//         title:"new apple",
//         price:129.68,
//         rating:4,
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj09sK6zUg1F4UxX4cu0_t-KKxyQeSwJgQsA&usqp=CAU"

//       },

//        {
//         id:"325325325",
//         title:"new apple",
//         price:129.68,
//         rating:4,
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj09sK6zUg1F4UxX4cu0_t-KKxyQeSwJgQsA&usqp=CAU"

//       },
      

      
//   ],
      
//   user:null
 
//   };

  

//  /* function Reducer(state , action)
//   {
//     console.log(action);
//     switch(action.type)
//     {
//       case "SET_USER":
//       return {
//         ...state,
//         user: action.user,
//       };
//       case 'ADD TO BASKET':
//         return{
//           ...state,
//           basket :[...state.basket , action.item],
          
//         };
//       break;
//       case  'REMOVE FROM BASKET':
//       let newBasket = [...state.basket];
//       const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
//       if(index>=0)
//       {
//         //items exits in basket
//         newBasket.splice(index ,1);
//       } else{
//         console.warn(
//            `cant remove product (id : ${action.id})`
//         );
//       }
//       return {...state , basket:newBasket};
//       break;
        
//         default:
//           return state;
//     }
//   }
  
//   export default Reducer;*/

// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);

// const reducer = (state, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.user,
//       };
//     case "ADD_TO_BASKET":
//       //Logic to add item to basket
//       return {
//         ...state,
//         basket: [...state.basket, action.item],
//       };
//       break;
//     case "REMOVE_FROM_BASKET":
//       //Logic to remove item
//       //we cloned the basket
//       let newBasket = [...state.basket];
//       //we found the index of item to be removed
//       const index = state.basket.findIndex(
//         (basketItem) => basketItem.id === action.id
//       );

//       if (index >= 0) {
//         //remove item at that index
//         newBasket.splice(index, 1);
//       } else {
//         console.warn(`Cant remove `);
//       }
//       return { ...state, basket: newBasket };
//       break;
//     default:
//       return state;
//   }
// };



// export default reducer;
