import axios from "axios";
import React, { useState } from "react";

function ProductForm() {
  const [Product, setProduct] = useState({
    name: "",
    price: "",
    cate: "",
    imgUrl: "",
    storeId: "",
  });

  const handleChange = (e) => {
    setProduct({ ...Product, [e.target.name]: e.target.value });
  };

  //On Submit:
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:3000/api/v1/Products`,
        {
          ...Product,
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full  flex justify-center">
      <form className="w-1/2 border-black px-4 py-4">
        <label className="mb-8">Product Name:</label>
        <br />
        <input
          className="w-full p-2 rounded-md"
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          name="name"
          placeholder="Enter Product Name"
        />
        <br />
        <label>Price:</label>
        <br />
        <input
          className="w-full p-2 rounded-md"
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          name="price"
          placeholder="Enter the price"
        />
        <br />
        <label>Category:</label>
        <br />
        <input
          className="w-full p-2 rounded-md"
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          name="cate"
          placeholder="Enter Category"
        />
        <br />
        <label>Store Id:</label>
        <br />
        <input
          className="w-full p-2 rounded-md"
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          name="storeId"
          placeholder="Enter storeId"
        />
        <br />
        <label>Image:</label>
        <br />
        <input
          className="w-full p-2 rounded-md"
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          name="imgUrl"
          placeholder="Enter The image url"
        />
        <br />
        <button
          style={{
            backgroundColor: "black",
            marginTop: "1em",
            padding: "0.5em 1em",
            color: "white",
            borderRadius: "6px",
          }}
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
