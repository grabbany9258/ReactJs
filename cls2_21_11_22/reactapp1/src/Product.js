function Product(props){
    return(
        <div className="product">
            <h1>{props.name}</h1>
            <p>Price:{props.price} Quantity:{props.quantity}</p>
            <p>Lorem ipsum is a ipsum message here</p>

            </div>

    );

}

export default Product;