/* eslint-disable no-unused-vars */
import React from "react";

function RowData({ el, handleDelete }) {
  const handleDeleteClick = () => {
    handleDelete(el._id);
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {el.name}
      </th>
      <td className="px-6 py-4">{el.email}</td>
      <td className="px-6 py-4">{el.gender}</td>
      <td className="px-6 py-4">{el.password}</td>
      <td className="px-6 py-4">
        <div className="flex gap-5">
          <button>
            <a
              href="#/"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </button>
          <button onClick={handleDeleteClick}>
            <a
              href="#/"
              className="font-medium text-red-600 dark:text-blue-500 hover:underline"
            >
              Remove
            </a>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default RowData;
