/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes


function RowData({ user }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user.name}
      </th>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.gender}</td>
      <td className="px-6 py-4">{user.id}</td>
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


// Add PropTypes validation for 'user' prop
RowData.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  };
export default RowData;
