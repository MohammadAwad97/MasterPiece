import React, { useState } from "react";
import axios from "axios";

function RowEdit({ el, onSave }) {
  const [storeUpdated, setStoreUpdated] = useState({
    storeName: "",
    email: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    setStoreUpdated({ ...storeUpdated, [e.target.name]: e.target.value });
  };
  const onSaveClick = async () => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:3000/api/v1/stores/${el._id}`,
        storeUpdated
      );
      console.log(response.data);
      onSave();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <input
          value={el.name}
          name="storeName"
          onChange={handleChange}
          className="flex border-2 border-black rounded-md"
        />
      </th>
      <td className="px-6 py-4">
        <input
          value={el.email}
          name="email"
          onChange={handleChange}
          className="flex border-2 border-black rounded-md"
        />
      </td>
      <td className="px-6 py-4">
        <input
          value={el.phone}
          name="phonenumber"
          onChange={handleChange}
          className="flex border-2 border-black rounded-md"
        />
      </td>
      <td className="px-6 py-4">
        <div>{el._id}</div>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-5">
          <button
            style={{ color: "blue", fontWeight: "600", paddingLeft: "1.3em" }}
            className="flex justify-startr"
            onClick={onSaveClick}
          >
            Save
          </button>
        </div>
      </td>
    </tr>
  );
}

export default RowEdit;
