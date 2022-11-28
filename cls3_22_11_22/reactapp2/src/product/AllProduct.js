import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    allprod();
  }, []);

  const allprod = async () => {
    axios
      .get(
        "http://localhost/ReactJs/cls3_22_11_22/reactapp2/reactApi/allproducts.php"
      )
      .then((res) => {
        setProduct(res.data.datas.pr);
      });
  };
  // //  For deleteing this part
  // const delconfirm = (id) => {
  //   delprod(id);
  //   // console.log(id);
  // };

  // const delprod = async (id) => {
  //   axios
  //     .post(
  //       "http://localhost/ReactJs/cls3_22_11_22/reactapp2/reactApi/delproduct.php",
  //       { prodid: id }
  //     )
  //     .then((res) => {
  //       // setProduct(res.data.datas.pr);
  //       alert(res.data.msg); // akhn theke alert a msg a dibe
  //       allprod(); //ata refresh ar jonno
  //     });
  // };

  return (
    <div className="col-sm-8">
      <h2 className="bg-dark text-light">All Products</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.details}</td>
              <td>{item.price}</td>
              <td>
                <button>Edit</button>
                {/* <button onClick={() => delconfirm(item.id)}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
        {/* {product.map((item, index) => (
        <li> {item.name} </li>
      ))} */}
      </table>
      <Link to="/products/add" className="btn btn-secondary">
        Add New Product
      </Link>
    </div>
  );
};

export default AllProduct;
