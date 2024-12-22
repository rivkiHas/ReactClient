
import React from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userIn } from './userSlice';
import { login } from './userApi';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
export const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const save = async (data) => {
    try {
      const res = await login(data);
      if (res) {
        alert("הצליח להכנס ");
        dispatch(userIn(res.data));
        console.log(res);
      }
      else (navigate("/signUp"))

    } catch (err) {
      alert("לא הצליח להכנס" + err.response.data.message);
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(save)}>
      {/* <div>
        <label>Password</label>
        <input {...register("password", { required: true, minLength: 8 })} />
        {errors.password && errors.password.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span>Password must be at least 8 characters long</span>
        )}
      </div> */}

      {/* <div>
        <label>Email</label>
        <input placeholder='email'{...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && errors.email.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span>Invalid email address</span>
        )}
      </div> */}
      <div className="input-wrapper">
        <InputText placeholder='Password'{...register("password", { required: true, minLength: 8 })} />
        {errors.password && errors.password.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span>Username must be at least 8 characters long</span>
        )}
      </div>
      <div className="input-wrapper">
        <InputText placeholder='Email' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && errors.email.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.email && errors.email.type === "minLength" && (
          <span>Invalid email address</span>
        )}
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

