import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function AllProduct() {
    const [product, setProduct] = useState([])
    console.log(product);

    useEffect(() => {
        allprod()
    }, []);



    const allprod = async () => {
        axios.get("http://localhost/ReactJs/Projects/sadaka/reactApi/products/AllProduct.php")
            .then((res) => {
                setProduct(res.data.datas.pr);
            });
    }




    return (
        <div className=''>
            <h2 >All Product</h2>
            {product.map((item, index) => (
                <li>{item.name}</li>
            ))}

        </div>
    )
}
