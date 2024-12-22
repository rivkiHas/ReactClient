import React from "react";
import { InputNumber } from 'primereact/inputnumber';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "./orderslice.js";
import styled from "styled-components";
import { useEffect } from "react";

const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const ProductDetails = styled.div`
    display: flex;
    align-items: center;
`;

const ProductName = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
`;

const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 10px;
`;

const ProductPrice = styled.div`
    font-size: 16px;
`;

const QuantityInput = styled.div`
    flex-shrink: 0;
`;

export const ProductInBasket = ({ one }) => {
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    const add = () => {
        dispatch(addToBasket(one));
    }
    const remove = () => {
        dispatch(removeFromBasket(one._id));
    }
    

    return (
        
        <ProductContainer>
            <ProductDetails>
                <ProductName>{one.productName}</ProductName>
                <ProductPrice>&#8362;{one.price}</ProductPrice>

            </ProductDetails>

            <QuantityInput>
                {/* <InputNumber  
                    value={value} 
                    onValueChange={handleValueChange} 
                    showButtons 
                    buttonLayout="vertical" 
                    style={{ width: '4rem' }} 
                    decrementButtonClassName="p-button-secondary" 
                    incrementButtonClassName="p-button-secondary" 
                    incrementButtonIcon={<i className="pi pi-arrow-up"  /> } 
                    decrementButtonIcon={<i className="pi pi-arrow-down" />} 
                    min={1} // הערך המינימלי שניתן לבחור
                    max={5} // הערך המקסימלי שניתן לבחור
                /> */}
                <div>{one.qty}</div>
                <button onClick={add}>+</button>
                <button onClick={remove}>-</button>
                {/* <button onClick={add}>עריכת מוצר</button>
                
                <button onClick={remove}>מחיקת מוצר</button> */}

            </QuantityInput>
            <ProductImage src={one.productImg} alt={one.productName} />
        </ProductContainer>
    );
}