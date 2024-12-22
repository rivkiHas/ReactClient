import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByCategoy, getTotalProductsByCategoy } from "./productApi.js";
import ProductListItem from "./productListItem.js";
import { Link, Outlet, useParams } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';

export const ProductList = () => {
    let { category } = useParams();
    let dispatch = useDispatch();

    let [arr, setArr] = useState([]);
    let [page, setPage] = useState(1);
    let [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        // Math.ceil(allBags / perPage)
        // setTotalPages( Math.ceil(+res.data / 8))
        // setTotalPages( Math.ceil(+res.data / 8))
        getTotalProductsByCategoy(category).then(res => setTotalPages(Math.ceil(+res.data / 8))).catch(err => { console.log(err) })
    }, [category])

    const getSomeProducts = async () => {
        try {
            let res = await getProductsByCategoy(category, page, 8);
            setArr(res.data);
            // Update total pages based on total products count
            //   setTotalPages(Math.ceil(res.totalProducts / 2));
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => { getSomeProducts() }, [page, category]);

    const productListStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '20px',
        listStyle: 'none'

    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <Outlet />
            <div style={{ textAlign: 'center' }}>
                <ul style={productListStyle}>
                    {arr.map(item => (
                        <div key={item._id}>
                            <Link to={"" + item._id} style={{ textDecoration: 'none' }}>
                                <ProductListItem one={item} />
                            </Link>
                        </div>
                    ))}
                </ul>
                <Grid container justifyContent="center">
                    <Pagination count={totalPages} shape="rounded" page={page} onChange={handlePageChange} hideNextButton={page <= totalPages} hidePrevButton={page <= 1} />
                </Grid>
            </div>
        </>
    );

}
