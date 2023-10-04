// import React from 'react'

function RowStores({ el, handleDelete, handleEditRecored, toggleModal }) {
  const handleDeleteClick = () => {
    handleDelete(el._id);
  };

  const handleEdit = () => {
    handleEditRecored(el._id);
    toggleModal(el._id);
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
      <td className="px-6 py-4">{el.phone}</td>
      <td className="px-6 py-4">{el._id}</td>
      <td className="px-6 py-4">
        <div className="flex gap-5">
          <button onClick={handleEdit}>
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

export default RowStores;
