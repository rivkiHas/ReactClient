import React, { useState, useEffect } from 'react';
// import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
// import { Tag } from 'primereact/tag';
// import { ProductService } from './service/ProductService';
import { getProducts } from './App/features/product/productApi';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
// import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
// import { useDispatch } from 'react-redux';

export default function Carusela() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    // const getSeverity = (product) => {
    //     switch (product.inventoryStatus) {
    //         case 'INSTOCK':
    //             return 'success';

    //         case 'LOWSTOCK':
    //             return 'warning';

    //         case 'OUTOFSTOCK':
    //             return 'danger';

    //         default:
    //             return null;
    //     }
    // };
    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await getProducts(3, 12); // שליפת 9 מוצרים מהעמוד הראשון
                setProducts(res.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, []);

    const productTemplate = (product) => {
        return (
            <Card variant="outlined" sx={{ width: 300, borderRadius: 0 }} >
                <AspectRatio ratio="1.3" >
                    <img
                        src={product.productImg}
                        alt=""
                    />
                </AspectRatio>
                <CardContent sx={{ padding: '16px', marginTop: '-8px' }}>
                    <Typography component="div" level="title-md"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{product.productName}</a></Typography>
                    <Typography component="div" level="body-sm">&#8362; {product.price}</Typography>
                </CardContent>
            </Card>
        );
    };

    return (
        <div className="card">
           <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
}
