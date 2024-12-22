import { useState, useEffect } from 'react'; // נוסיף useEffect כדי לעדכן את הסכום הסופי בשינוי הכמות
import { useDispatch, useSelector } from 'react-redux';
import { ProductInBasket } from './productInBusket';
import { useNavigate } from 'react-router-dom';
import { Payment } from './payment';
import { sumBy } from 'lodash';

export const Buscket = () => {
    const basket = useSelector(state => state.order.basket);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // פונקציה לחישוב סכום המחירים הכולל של כל הפריטים בסל
    const calcSum = () => {
        return sumBy(basket, 'price')*calcTotalQuantity();
    };

    // פונקציה לחישוב סך הכמויות הכולל של המוצרים בסל
    const calcTotalQuantity = () => {
        return sumBy(basket, 'qty');
    };

    // useEffect שיקרא את הפונקציה לחישוב הסכום הכולל בכל שינוי בסל
    useEffect(() => {
        calcSum();
    }, [basket]);

    // פונקציה למעבר לדף התשלום
    const goToPayment = () => {
        if (basket.length === 0) {
            alert("אין מוצרים בסל")
            navigate('/list/:category');
        } else {
            navigate('/payment');
        }
    };

    return (
        <>
            <ul>
                {basket.map(item => (
                    <div key={item._id}>
                        <ProductInBasket one={item} />
                    </div>
                ))}
            </ul>
            <div>
                <p>כמות מוצרים שהוזמנו: {calcTotalQuantity()}</p>
                <p>סכום לתשלום: {calcSum()} &#8362;</p>
            </div>
            <button onClick={() => navigate(-1)}>חזור לקנות</button>
            <button onClick={goToPayment}>לתשלום</button>
        </>
    );
};
