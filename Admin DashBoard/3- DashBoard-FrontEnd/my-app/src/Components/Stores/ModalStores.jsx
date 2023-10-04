import axios from "axios";
import React, { useState, useEffect } from "react";

function ModalStores({ showModal, toggleModal, editRowId }) {
  const [store, setStore] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  ///////هوووووووووووون شغلة مهم جدا لازم بالاول تعمل فيتش للستور يلي بدك تعمللها ابديت و تخزنها في الستور فوق لانو لما نجي نعدل بنعمل ...store و بنحط القيم الي تغييرت فقط عشان ما يكون الباقي فاضيات لانو الهن validation
  //////////////////////////////////////////// مهم لازم تقرا النص الي فوق /////////////////////////////////////
  useEffect(() => {
    // Fetch store data based on the 'id' when the modal opens
    if (editRowId) {
      axios
        .get(`http://127.0.0.1:3000/api/v1/stores/${editRowId}`)
        .then((response) => {
          setStore(response.data); // Set the retrieved data in the state
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [editRowId]);

  if (!showModal) {
    return null;
  }

  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const handleShbmit = async () => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:3000/api/v1/stores/${editRowId}`,
        {
          name: store.name,
          phone: store.phone,
          email: store.email,
          password: store.password,
        }
      );
      console.log(`Store updated`, response.data);
    } catch (err) {
      console.log(err);
    }
    toggleModal();
  };
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgb(0,0,0, 0.40)",
        backdropFilter: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <div style={{ width: "500px" }}>
        <form style={{ width: "100%" }} className="bg-white p-6 w-100">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl mb-3">Enter the new data</h2>
            <button onClick={() => toggleModal()}>✖️</button>
          </div>
          <label>Store Name</label>
          <br />
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter the name of the store"
            className="w-full"
          />
          <br />
          <br />
          <label>Phone</label>
          <br />
          <input
            onChange={handleChange}
            name="phone"
            type="text"
            placeholder="Enter the phone number"
            className="w-full"
          />
          <br />
          <br />
          <label>Email</label>
          <br />
          <input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="enter the email"
            className="w-full"
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            onChange={handleChange}
            name="password"
            type="text"
            placeholder="Enter the password"
            className="w-full mb-3"
          />
          <br />
          <button
            style={{
              backgroundColor: "blue",
              padding: "0.5em 1em",
              color: "white",
              borderRadius: "6px",
            }}
            onClick={handleShbmit}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalStores;
