// import React from 'react'

function RowProducts({ el, handleDelete }) {
  //Delete Product
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
      <td className="px-6 py-4">{el.price}</td>
      <td className="px-6 py-4">{el.storeId.name}</td>
      {/* هون المشلكة كانت انو ال el.storId >>  كانت عبارة عن اوبجكت كيف بدك ترندر اوبجكت كامل ؟؟ */}
      <td className="px-6 py-4">{el._id}</td>
      <td className="px-6 py-4">{el.cate}</td>
      <td className="px-6 py-4">
        <img
          style={{ width: "100px", height: "100px" }}
          src={el.imgUrl}
          alt="Product"
        />
      </td>
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

export default RowProducts;
