import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CircularProgress from "@material-ui/core/CircularProgress";
import './Modals.css';

const LoadingModal = ({ modalMessage, showLoadingScreen }) => {
  return (
    <>
      <Modal show={showLoadingScreen} backdrop="static" keyboard={false} className="my-modal">
        <Modal.Header>
          <Modal.Title>{modalMessage}</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="justify-content-center">
          <CircularProgress />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoadingModal;
