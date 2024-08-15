import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: 'cart',
    initialState:{
        items:[],
        value:0,
        price:0,
        discountprice:0,
    },
    reducers:{
      add:(state,action)=>{
        const item = state.items.find(i => i.id === action.payload.id);
           if(!item){
            state.items.push({ ...action.payload, quantity: 1 });
          
           }
           else{
            item.quantity+=1;
           }
            var cnt=0;
            for(let i=0;i<state.items.length;i++){
                cnt+=state.items[i].quantity;
            }

            state.value=cnt;
            state.price+=parseInt(action.payload.price);
            const sub=((parseInt(action.payload.discountPercentage)*parseInt(action.payload.price))/100);
            state.discountprice+=Math.round(action.payload.price-sub);
        },
        del:(state,action)=>{
          const item=state.items.findIndex(i => i.id === action.payload.id);
          const value=parseInt(state.items[item].quantity);
          if(value==1){
            state.items.splice(item,1);
          }
          else{
            state.items[item].quantity-=1;
          }
          state.price-=parseInt(action.payload.price);
          const sub=((parseInt(action.payload.discountPercentage)*parseInt(action.payload.price))/100);
          state.discountprice-=Math.round(action.payload.price-sub);
          var cnt=0;
          for(let i=0;i<state.items.length;i++){
              cnt+=state.items[i].quantity;
          }

          state.value=cnt;
        }
        
        
    }
})
export const {add,del}=cartSlice.actions;
export default cartSlice.reducer;
