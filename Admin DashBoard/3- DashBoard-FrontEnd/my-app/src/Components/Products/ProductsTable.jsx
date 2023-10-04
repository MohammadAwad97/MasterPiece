// import React from "react";
import { useState } from "react";
// import RowProducts from "./RowProducts";
import axios from "axios";
import { useEffect } from "react";
import RowProducts from "./ProductsRow";

function ProductsTable() {
  const [Products, setProducts] = useState([]);

  //Create Product: ///////////// Important......

  //Get All products:
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products`);
      setProducts(response.data.products);
      console.log(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Delete Product:
  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:3000/api/v1/products/${id}`);
    const filteredProd = Products.filter((el) => el._id !== id);
    setProducts(filteredProd);
  };

  const productsArr = Products.map((el) => (
    <RowProducts key={el._id} el={el} handleDelete={handleDelete} />
  ));

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-7">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Store Name
              </th>
              <th scope="col" className="px-6 py-3">
                Product Id
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{productsArr}</tbody>
        </table>
      </div>
    </>
  );
}

export default ProductsTable;
