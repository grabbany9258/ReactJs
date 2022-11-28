import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditProduct() {
  const params = useParams();
  useEffect(() => {
    productone(params.pid);
  });

  const productone = axios.get(
    "http://localhost/ReactJs/cls3_22_11_22/reactapp2/reactApi/addproduct.php",
    { prid: params.pid }
  );
  return (
    <div className="col-sm-8">
      <h1>Edit Product</h1>

      <form>
        <div className="form-group">
          <label>Product Name:</label>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="form-group">
          <label>Product Details:</label>
          <textarea
            type="text"
            name="details"
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Product Price:</label>
          <input type="text" name="price" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
}
