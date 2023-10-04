import axios from "axios";
import React, { useState } from "react";

function StoreForm() {
  const [store, setStore] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  //On Submit:
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:3000/api/v1/stores`, {
        ...store,
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full  flex justify-center">
      <form className="w-1/2 border-black px-4 py-4">
        <label className="mb-8">Store Name:</label>
        <br />
        <input
          className="w-full p-2 rounded-md"
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          name="name"
          placeholder="Enter store Name"
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          className="w-full p-2 rounded-md"
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          name="phone"
          placeholder="Enter Phone Number"
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          className="w-full p-2 rounded-md"
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          name="email"
          placeholder="Enter Email"
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          className="w-full p-2 rounded-md"
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          name="password"
          placeholder="Enter Password"
        />
        <br />
        <button
          style={{
            backgroundColor: "black",
            marginTop: "1em",
            padding: "0.5em 1em",
            color: "white",
            borderRadius: "6px",
          }}
          onClick={handleSubmit}
        >
          Add Store
        </button>
      </form>
    </div>
  );
}

export default StoreForm;
