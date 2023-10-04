// import React from 'react'
import PropTypes from "prop-types"; // Import PropTypes


function RowStores({ store }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {store.name}
      </th>
      <td className="px-6 py-4">{store.email}</td>
      <td className="px-6 py-4">{store.phone}</td>
      <td className="px-6 py-4">{store.id}</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
}



RowStores.propTypes = {
    store: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  };
export default RowStores;
