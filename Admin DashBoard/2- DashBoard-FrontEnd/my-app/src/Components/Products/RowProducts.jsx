// import React from 'react'
import PropTypes from "prop-types"; // Import PropTypes

function RowProducts({ el }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {el.name}
      </th>
      <td className="px-6 py-4">{el.price}</td>
      <td className="px-6 py-4">{el.storeId}</td>
      <td className="px-6 py-4">{el._id}</td>
      <td className="px-6 py-4">
        <div className="flex gap-5">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
        <a
          href="#"
          className="font-medium text-red-600 dark:text-blue-500 hover:underline"
        >
          Remove
        </a>
        </div>
      </td>
    </tr>
  );
}


RowProducts.propTypes = {
    el: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      storeId: PropTypes.string.isRequired,
      _id: PropTypes.number.isRequired,
    }).isRequired,
  };

export default RowProducts;
