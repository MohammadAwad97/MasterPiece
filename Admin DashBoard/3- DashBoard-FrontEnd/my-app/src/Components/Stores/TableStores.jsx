/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import RowStores from "./RowStroes";
import axios from "axios";
import RowEdit from "./RowEdit";
function TableStores({ toggleModal, onEditRecord }) {
  const [stores, setStores] = useState([]);
  // const [showForm, setShowForm] = useState(false);
  const [editRowId, setEditRowId] = useState(null);

  //Get All Stores
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/v1/stores`);

      setStores(response.data.data.stores);
    } catch (err) {
      console.log(err);
    }
  };

  //Delete Store:
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/api/v1/stores/${id}`);
      const filteredData = stores.filter((el) => el._id !== id);
      setStores(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  //On click Edit:
  const handleEditRecored = (id) => {
    // setEditRowId(id);
    onEditRecord(id);
  };

  //On save:
  const handleSave = () => {
    setEditRowId(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const storesArr = stores.map((el) => {
    return (
      <RowStores
        toggleModal={toggleModal}
        key={el._id}
        el={el}
        handleDelete={handleDelete}
        handleEditRecored={handleEditRecored}
      />
    );
  });

  return (
    <div className="p-6 relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex flex-row justify-between items-center gap-4 mb-8">
        <h2 className="text-3xl ">Stores Section:</h2>
        <div>
          <input
            className="flex rounded-lg"
            placeholder="Search for Users..."
            type="text"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Store name
            </th>
            <th scope="col" className="px-6 py-3">
              Eamil
            </th>
            <th scope="col" className="px-6 py-3">
              Phone number
            </th>
            <th scope="col" className="px-6 py-3">
              Store ID
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>{storesArr}</tbody>
      </table>
    </div>
  );
}

export default TableStores;
