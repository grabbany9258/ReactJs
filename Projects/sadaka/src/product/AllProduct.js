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
        <div>
            <div className="page-heading text-center">
                <div className="container zoomIn animated">
                    <h1 className="page-title">ABOUT Product <span className="title-under"></span></h1>
                    <p className="page-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit Necessitatibus.
                    </p>
                </div>
            </div>

            <div className="main-container">
                <div className="our-team animate-onscroll fadeIn">
                    <div className="container">
                        <h2 className="title-style-1">Our Product <span className="title-under"></span></h2>
                        <div className=''>
                            <h2 >All Product</h2>
                            {product.map((item, index) => (
                                <li key="{item}">{item.name}</li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
