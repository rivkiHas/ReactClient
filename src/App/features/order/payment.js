import React, { useSyncExternalStore } from 'react';
import { useForm } from 'react-hook-form';
import { addOrder } from "./orderApi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';


export const Payment = () => {
  const { register: register, handleSubmit: handleSubmit, formState: { errors: errors } } = useForm();
  const basket = useSelector(state => state.order.basket);
  const dispatch = useDispatch();

  let currentUser = useSelector(state => state.user.currentUser)
  let navigate = useNavigate()


  const save = async (data) => {
    try {
      if (currentUser) {
        const token = currentUser.token
        const res = await addOrder(data, token);
        console.log(res);
        alert("ההזמנה בוצעה בהצלחה  ");
        localStorage.removeItem('busket')
        navigate("/productList")

      }
      else {
        alert("אינך רשום באתר ")
        navigate("/signUp")
      }


    } catch (err) {
      alert("לא הצליח לבצע הזמנה" + err.response.data.message);
      console.log(err);
    }
    //  res= addOrder(data, basket)
    //     .then((res) => {
    //       alert(" הזמנה בוצעה בהצלחה");
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       alert("לא הצליח לבצע הזמנה" + err.response.data.message);
    //       console.log(err);
    //     });
  };


  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        {/* <h2>User Details</h2> */}
        <div>
          <input type="text" id="userName" placeholder='userName' {...register("userName")} />
        </div>

        <div>
          <input type="text" id="mail" placeholder='email'{...register("email")} />
        </div>

        <div>
          <input type="text" id="orderAdres" placeholder='adress' {...register("orderAdres")} />
        </div>

        <div>
          <input type="text" id="date" disabled placeholder='date' defaultValue={new Date().toLocaleDateString()}{...register("orderDate")} />
        </div>


        <div>
          <input type="text" id="cardNumber" placeholder='card number' {...register("cardNumber")} />
          {errors.cardNumber && <span>This field is required</span>}
        </div>

        <div>
          <input type="text" id="expiry" placeholder='expiry date'{...register("expiry")} />
          {errors.expiry && <span>This field is required</span>}
        </div>

        <div>
          <input type="text" id="cvv" placeholder='CVV'{...register("cvv")} />
          {errors.cvv && <span>This field is required</span>}
        </div>

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};
