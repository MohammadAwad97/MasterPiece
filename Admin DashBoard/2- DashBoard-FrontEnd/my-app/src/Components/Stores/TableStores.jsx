/* eslint-disable no-unused-vars */
import React from "react";
import RowStores from "./RowStores";
function TableStores() {
  
  const stores =  [
      {
        "id": 1,
        "name": "Super Mart",
        "category": "Supermarket",
        "address": "123 Main Street",
        "phone": "123-456-7890",
        "email": "contact@supermart.com"
      },
      {
        "id": 2,
        "name": "ElectroZone",
        "category": "Electronics",
        "address": "456 Tech Avenue",
        "phone": "987-654-3210",
        "email": "info@electrozone.com"
      },
      {
        "id": 3,
        "name": "Fashion Emporium",
        "category": "Clothing",
        "address": "789 Fashion Boulevard",
        "phone": "111-222-3333",
        "email": "support@fashionemporium.com"
      },
      {
        "id": 4,
        "name": "Healthy Bites",
        "category": "Health Food Store",
        "address": "246 Wellness Way",
        "phone": "555-444-3333",
        "email": "info@healthybites.com"
      },
      {
        "id": 5,
        "name": "Tech Gadgetry",
        "category": "Electronics",
        "address": "567 Innovation Street",
        "phone": "777-888-9999",
        "email": "sales@techgadgetry.com"
      },
      {
        "id": 6,
        "name": "Sports Central",
        "category": "Sports Equipment",
        "address": "321 Fitness Avenue",
        "phone": "444-555-6666",
        "email": "info@sportscentral.com"
      },
      {
        "id": 7,
        "name": "Book Haven",
        "category": "Bookstore",
        "address": "789 Reading Lane",
        "phone": "222-333-4444",
        "email": "books@bookhaven.com"
      },
      {
        "id": 8,
        "name": "Green Thumb Nursery",
        "category": "Garden Center",
        "address": "101 Gardenia Grove",
        "phone": "999-888-7777",
        "email": "info@greenthumbnursery.com"
      },
      {
        "id": 9,
        "name": "Pet Paradise",
        "category": "Pet Store",
        "address": "555 Pet Street",
        "phone": "777-777-7777",
        "email": "pets@petparadise.com"
      },
      {
        "id": 10,
        "name": "Home Decor Delights",
        "category": "Home Goods",
        "address": "888 Decor Drive",
        "phone": "444-444-4444",
        "email": "info@homedecordelights.com"
      }
    ]


  const storesArr = stores.map((store) => {
    return <RowStores key={store.id} store={store}/>
  })
  
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              User name
            </th>
            <th scope="col" className="px-6 py-3">
              Eamil
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {storesArr}
        </tbody>
      </table>
    </div>
  );
  
}

export default TableStores;
