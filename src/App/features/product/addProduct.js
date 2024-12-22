import React from 'react';
import { useForm } from 'react-hook-form';
import { addProduct } from './productApi';
import { useSelector } from 'react-redux';

export const AddProduct = () => {
    const { register: register, handleSubmit: handleSubmit, formState: { errors: errors } } = useForm();
    let currentUser = useSelector(state => state.user.currentUser)


    const save = async (data) => {
        try {
            const token = currentUser.token

            const res = await addProduct(data, token);
            console.log(res);
            alert("המוצר נוסף בהצלחה  ");


        }
        catch (err) {
            alert("לא הצליח להוסיף מוצר" + err.response.data.message);
            console.log(err);
        }

    };


    return (

        <div>
            <form onSubmit={handleSubmit(save)}>
                {/* <h2>User Details</h2> */}
                <div>
                    <input type="text" id="productName" placeholder='productName' {...register("productName")} />
                </div>

                <div>
                    <input type="textarea" id="description" placeholder='description'{...register("description")} />
                </div>

                <div>
                    <input type="text" id="price" placeholder='price' {...register("price")} />
                </div>

                <div>
                    <input type="text" id="category" placeholder='category' {...register("category")} />
                </div>


                <div>
                    <input type="text" id="metal" placeholder='metal ' {...register("metal")} />
                   
                </div>

                <div>
                    <input type="text" id="img" placeholder='image'{...register("image")} />
                 
                </div>


                <button type="submit">הוסף</button>
            </form>
        </div>

    );
};
