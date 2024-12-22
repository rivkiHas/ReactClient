import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export default function MinimalBasket({ visible, setVisible }) {
    const [products, setProducts] = useState([]);
    const basket = useSelector(state => state.order.basket);
    const navigate = useNavigate();
    useEffect(() => {
        setProducts(basket); // Update products whenever basket changes
    }, [basket]);

    const toBusket = () => {
        if (basket.length == 0)
            alert(" אין מוצרים בסל")
        else
            navigate("/Buscket")
    }

    const itemTemplate = (product) => {
        return (
            <div className="p-d-flex p-ai-center p-gap-3" key={product.id}>
                <img className="p-shadow-2 p-border-rounded" src={product.productImg} alt={product.name} style={{ width: '4rem', flexShrink: 0 }} />
                <div className="p-d-flex p-flex-column p-gap-2" style={{ flex: 1 }}>
                    <span className="p-font-weight-bold">{product.productName}</span>
                    <div className="p-d-flex p-ai-center p-gap-2">
                        <i className="pi pi-tag p-text-sm"></i>
                        <span>{product.category}</span>
                    </div>
                </div>
                <span className="p-font-weight-bold">&#8362;{product.price}</span>
            </div>
        );
    };


    return (<>
        <div className={`p-card ${visible ? 'visible' : 'hidden'}`} style={{ maxWidth: '600px', margin: '0 auto', marginTop: '20px', backgroundColor: 'white' }}>
            {/* <div className="p-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}
                {/* <h2>Products</h2> */}
            {/* </div> */}
            <div className="p-card-body">
                <OrderList value={products} itemTemplate={itemTemplate}></OrderList>
            </div>
        </div>
        {/* <Button label="למעבר לסל המלא" severity="secondary"  onClick={()=>toBusket()} /> */}
    </>
    );
}

