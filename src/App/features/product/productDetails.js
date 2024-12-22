import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "./productApi";
import { addToBasket } from "../order/orderslice";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from 'primereact/sidebar';
import MinimalBasket from '../order/minimalBusket';
import { Image } from 'primereact/image';
import { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { deleteProduct } from './productApi';

export const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visibleRight, setVisibleRight] = useState(false);
  const role = useSelector(state => state.user.currentUser.role);
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);

  const getSomeProductById = async () => {
    try {
      const res = await getProductById(params.id);
      setProduct(res.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getSomeProductById();
  }, [params.id]);

  const handleButton = () => {
    dispatch(addToBasket(product));
    setVisibleRight(true);
  }

  let user=useSelector(state=>state.user.currentUser)

  const accept = async () => {
    try {
      const res = await deleteProduct(product._id,user?.token);
      if (res) {
        alert("הצליח למחוק ");
        navigate('/list/charms')
        // dispatch(userIn(res.data));
        // console.log(res);
      }
      // else (navigate("/signUp"))

    } catch (err) {
      alert("לא הצליח למחוק" + err.response.data.message);
      console.log(err);
    }
  }

  const reject = () => {
    toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  }
  return (
    <>
      <style>
        {`
          .product-details-container {
            display: flex;
            justify-content: center;
            position:fixed;
            top:5%;
            left:0;
            right:0;
            align-items:center;
            z-index:100;
            wight:100%;
            height:100%;
            background-color:white;
            height: calc(100vh -64vh); /* גובה העמוד פחות גובה ה-Nav bar */
          }

          .product-details {
            display: flex;
            align-items: center;
            padding: 30px;
          }
          
          .product-image {
            flex: 3; /* לקחת את רוב הרוחב */
            margin-right: 20px; /* מרווח מימין */
            border-radius: 10px;
            
          }
          
          .product-info {
            flex: 1; /* לקחת פחות רוחב */
          }
          
          /* כדי להפוך את הפרטים להופיע בצד ימין נוסיף */
          .product-info {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
          }
          
          button {
            background-color: #ffd6e0;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          button:hover {
            background-color: #fac8d5 ;
          }
        `}

      </style>
      <Toast ref={toast} />
      <ConfirmDialog
        group="declarative"
        visible={visible}
        onHide={() => setVisible(false)}
        message="אתה בטוח שברצונך למחוק את המוצר?"
        header="זהירות"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
        style={{ width: '50vw', backgroundColor: 'white' }}
        breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
      />
      <div className="product-details-container">
        {product && (
          <div className="product-details">
            <div className="card flex justify-content-center">
              <Image src={product.productImg} alt="Image" width="250" preview className="product-image" />
            </div>
            <div className="product-info">
              <h2>{product.productName}</h2>
              <p>מחיר: {product.price} ש"ח</p>
              <p >{product.description}</p>
              <div>
                {role == 'USER' && <button onClick={handleButton}>הוסף לסל</button>}
                {role == 'USER' && <button onClick={() => navigate(-1)}>חזרה לקניה</button>}
                {role == 'ADMIN' && <div className="card flex justify-content-center">
                  <Button onClick={() => setVisible(true)} icon="pi-delete-left" label="מחיקת מוצר"/>
                </div>}
              </div>

            </div>

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
              <MinimalBasket />
            </Sidebar>
          </div>
        )}
      </div>
    </>
  );
};
