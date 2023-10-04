/* eslint-disable no-unused-vars */
import React from "react";
import RowData from "./RowData";

function TableUsers() {
  const Users = [
    {
      name: "John Doe",
      id: 1,
      status: "inactive",
      email: "john.doe@example.com",
      password: "password123",
      gender: "male",
    },
    {
      name: "Jane Smith",
      id: 2,
      status: "inactive",
      email: "jane.smith@example.com",
      password: "hello123",
      gender: "female",
    },
    {
      name: "Michael Johnson",
      id: 3,
      status: "inactive",
      email: "michael.johnson@example.com",
      password: "mysecret",
      gender: "male",
    },
    {
      name: "Emily Davis",
      id: 4,
      status: "inactive",
      email: "emily.davis@example.com",
      password: "p@ssw0rd",
      gender: "female",
    },
    {
      name: "Robert Brown",
      id: 5,
      status: "inactive",
      email: "robert.brown@example.com",
      password: "brownie123",
      gender: "male",
    },
    {
      name: "Jennifer Miller",
      id: 6,
      status: "inactive",
      email: "jennifer.miller@example.com",
      password: "millie456",
      gender: "female",
    },
    {
      name: "William Wilson",
      id: 7,
      status: "inactive",
      email: "william.wilson@example.com",
      password: "wilson23",
      gender: "male",
    },
    {
      name: "Linda Anderson",
      id: 8,
      status: "inactive",
      email: "linda.anderson@example.com",
      password: "landerson7",
      gender: "female",
    },
    {
      name: "David Lee",
      id: 9,
      status: "inactive",
      email: "david.lee@example.com",
      password: "david123",
      gender: "male",
    },
    {
      name: "Sarah Taylor",
      id: 10,
      status: "inactive",
      email: "sarah.taylor@example.com",
      password: "taylor789",
      gender: "female",
    },
  ];

  const usersArr = Users.map((user) => {
    return <RowData key={user.id} user={user}/>
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
          {usersArr}
        </tbody>
      </table>
    </div>
  );
}

export default TableUsers;
