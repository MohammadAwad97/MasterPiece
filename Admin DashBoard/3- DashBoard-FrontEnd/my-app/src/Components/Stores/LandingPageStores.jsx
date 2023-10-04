// import React from 'react';
import TableStores from "./TableStores";
import StoreForm from "./StoreForm";
import ModalStores from "./ModalStores";
import { useState } from "react";

function LandingPageStores() {
  const [showModal, setShowModal] = useState(false);
  const [editRowId, setEditRowId] = useState(null);

  const toggleModal = (id) => {
    setEditRowId(id);
    setShowModal(!showModal);
  };

  return (
    <>
      <ModalStores
        showModal={showModal}
        toggleModal={toggleModal}
        editRowId={editRowId}
      />
      <StoreForm />
      <TableStores toggleModal={toggleModal} onEditRecord={toggleModal} />
    </>
  );
}

export default LandingPageStores;
