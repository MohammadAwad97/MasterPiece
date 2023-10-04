// import React from "react";
import { useState } from "react";
// import RowProducts from "./RowProducts";
import axios from "axios";
import { useEffect } from "react";
import RowProducts from "./RowProducts";

function ProductsTable() {
  const [Products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products`);
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(Products);

  const productsArr = Products.map((el) => {
    return <RowProducts key={el._id} el={el} />;
  });

  // const Products = allProducts.map((el) => {
  //   return <RowProducts product={el} key={el._id} />;
  // });

  // const products = [
  //   {
  //     id: 1,
  //     name: "Smartphone",
  //     price: 500,
  //     category: "Electronics",
  //     short_description: "High-end smartphone with advanced features",
  //     storeId: 2,
  //     store_name: "ElectroZone",
  //     store_address: "456 Tech Avenue",
  //   },
  //   {
  //     id: 2,
  //     name: "Smart TV",
  //     price: 800,
  //     category: "Electronics",
  //     short_description: "65-inch 4K Smart TV with built-in streaming apps",
  //     storeId: 2,
  //     store_name: "ElectroZone",
  //     store_address: "456 Tech Avenue",
  //   },
  //   {
  //     id: 3,
  //     name: "Laptop",
  //     price: 1000,
  //     category: "Electronics",
  //     short_description: "Powerful laptop with high-performance specs",
  //     storeId: 2,
  //     store_name: "ElectroZone",
  //     store_address: "456 Tech Avenue",
  //   },
  //   {
  //     id: 4,
  //     name: "T-Shirt",
  //     price: 20,
  //     category: "Clothing",
  //     short_description: "Casual cotton t-shirt",
  //     storeId: 3,
  //     store_name: "Fashion Emporium",
  //     store_address: "789 Fashion Boulevard",
  //   },
  //   {
  //     id: 5,
  //     name: "Jeans",
  //     price: 50,
  //     category: "Clothing",
  //     short_description: "Slim-fit jeans for men and women",
  //     storeId: 3,
  //     store_name: "Fashion Emporium",
  //     store_address: "789 Fashion Boulevard",
  //   },
  //   {
  //     id: 6,
  //     name: "Sneakers",
  //     price: 80,
  //     category: "Clothing",
  //     short_description: "Stylish and comfortable sneakers",
  //     storeId: 3,
  //     store_name: "Fashion Emporium",
  //     store_address: "789 Fashion Boulevard",
  //   },
  //   {
  //     id: 7,
  //     name: "Grocery Bundle",
  //     price: 50,
  //     category: "Supermarket",
  //     short_description: "Assorted groceries for a week",
  //     storeId: 1,
  //     store_name: "Super Mart",
  //     store_address: "123 Main Street",
  //   },
  //   {
  //     id: 8,
  //     name: "Fresh Fruits",
  //     price: 10,
  //     category: "Supermarket",
  //     short_description: "Assorted fresh fruits",
  //     storeId: 1,
  //     store_name: "Super Mart",
  //     store_address: "123 Main Street",
  //   },
  //   {
  //     id: 9,
  //     name: "Dairy Products",
  //     price: 30,
  //     category: "Supermarket",
  //     short_description: "Milk, cheese, and yogurt",
  //     storeId: 1,
  //     store_name: "Super Mart",
  //     store_address: "123 Main Street",
  //   },
  //   {
  //     id: 10,
  //     name: "Smartphone",
  //     price: 550,
  //     category: "Electronics",
  //     short_description: "High-end smartphone with advanced features",
  //     storeId: 1,
  //     store_name: "Super Mart",
  //     store_address: "123 Main Street",
  //   },
  //   // Add more items here...
  // ];

  // const productsArr = products.map((product) => {
  //   return <RowProducts key={product.id} product={product} />;
  // });

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
