import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import userSlice from "./features/user/userSlice";
import orderSlice from "./features/order/orderslice";

export const store = configureStore
    ({
        reducer: {
            user: userSlice,
            product: productSlice,
            order:orderSlice
        }
    })
