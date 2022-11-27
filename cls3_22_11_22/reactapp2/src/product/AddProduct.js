import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [prodinfo, prodinfoSet] = useState({
    name: "",
    details: "",
    price: "",
  });
  console.log(prodinfo);

  const onChangeValue = (e) => {
    prodinfoSet({ ...prodinfo, [e.target.name]: e.target.value });
  };

  const SubmitValue = async (e) => {
    //alert("You have submiteed succesfully!");
    e.preventDefault();
    e.persist();
    axios
      .post(
        "http://localhost/ReactJs/cls3_22_11_22/reactapp2/reactApi/addproduct.php",
        {
          pname: prodinfo.name,
          pdetails: prodinfo.details,
          pprice: prodinfo.price,
        }
      )
      .then((result) => {
        alert(result.data.msg);
        navigate("/products");
      });
    //alert(result);
  };

  return (
    <div className="col-sm-8">
      <h1>Product Entry Form</h1>
      <form onSubmit={SubmitValue}>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            onChange={onChangeValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Details:</label>
          <textarea
            type="text"
            name="details"
            onChange={onChangeValue}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Product Price:</label>
          <input
            type="text"
            name="price"
            onChange={onChangeValue}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add New
        </button>
      </form>
    </div>
  );
}
