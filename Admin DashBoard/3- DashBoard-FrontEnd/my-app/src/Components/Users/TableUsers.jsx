/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import RowData from "./RowData";
import axios from "axios";

function TableUsers() {
  const [users, setUsers] = useState([]);

  //Get all users:
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/v1/users`);
      setUsers(response.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Delete Users:
  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:3000/api/v1/users/${id}`);
    const filteredUsers = users.filter((el) => el._id !== id);
    setUsers(filteredUsers);
  };
  const usersArr = users.map((el) => {
    return <RowData key={el._id} el={el} handleDelete={handleDelete} />;
  });

  return (
    <div className="p-6 relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex flex-row justify-between items-center gap-4 mb-8">
        <h2 className="text-3xl ">Users Section:</h2>
        <div>
          <input
            className="flex rounded-lg"
            placeholder="Search for Users..."
            type="text"
          />
        </div>
      </div>
      <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
              Password
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>{usersArr}</tbody>
      </table>
    </div>
  );
}

export default TableUsers;
