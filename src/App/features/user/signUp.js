import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userIn } from './userSlice';
import { signUp } from './userApi';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

import './signUp.css';

export const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const save = async (data) => {
    try {
      const res = await signUp(data);
      alert("הצליח להוסיף משתמש");
      dispatch(userIn(res.data)); // Assuming res.data contains user info
      console.log(res);
    } catch (err) {
      alert("לא הצליח להרשם" + err.response.data.message);
      console.log(err);
    }
  };


  return (
    <form onSubmit={handleSubmit(save)}>
      <div className="input-wrapper">
        <InputText id="userName" placeholder='Username'{...register("userName", { required: true, minLength: 3 })} />
        {errors.userName && errors.userName.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.userName && errors.userName.type === "minLength" && (
          <span>Username must be at least 3 characters long</span>
        )}
      </div>
      <div className="input-wrapper">
        <InputText placeholder='Password' {...register("password", { required: true, minLength: 8 })} />
        {errors.password && errors.password.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span>Username must be at least 8 characters long</span>
        )}
      </div>
      <div className="input-wrapper">
        <InputText placeholder='Email'{...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && errors.email.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.email && errors.email.type === "minLength" && (
          <span>Invalid email address</span>
        )}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};
