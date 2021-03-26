import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';


const DeleteModal = ({ handleDeleteClick }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i className="fas fa-trash-alt" onClick={handleShow}></i>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this post?</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="justify-content-center">
          <button className="btn btn-outline-dark" onClick={handleClose}>Cancel</button>
          <button className="btn btn-dark" onClick={handleDeleteClick}>Delete</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;