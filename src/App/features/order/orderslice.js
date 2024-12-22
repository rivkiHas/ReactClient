import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  details: { adress: "", date: new Date() },
  basket: []
  // countProduct: 0,
  // sumPrice: 0

}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {

    addToBasket: (state, action) => {
      let prod = state.basket.find(item => item._id == action.payload._id);
      if (prod) { prod.qty++; }
      else
        state.basket.push({ ...action.payload, qty: 1 });
      // state.countProduct += 1;
      // state.sumPrice += parseInt(action.payload.price);
      localStorage.setItem('busket', JSON.stringify(state.basket))//צריך לטפל בכמות ובסכום
    },
    removeFromBasket: (state, action) => {
      // state.basket.push({...action.payload,qty:qty--});
      let index = state.basket.findIndex(item => item._id == action.payload);
      if (index == -1)
        return;
      state.sumPrice -= parseInt(state.basket[index].price);

      if (state.basket[index].qty == 1)
        state.basket.splice(index, 1);
      else state.basket[index].qty--;
      // state.countProduct -= 1;
    },
    addArrToBusket: (state, action) => {
      state.basket = action.payload;
      localStorage.setItem('busket', JSON.stringify(state.basket));
    }


  },


})

export const { addToBasket, addArrToBusket, removeFromBasket } = orderSlice.actions;

export default orderSlice.reducer;
