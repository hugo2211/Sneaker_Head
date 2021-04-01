import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import './Modals.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const LoadingModal = ({ modalMessage, showLoadingScreen }) => {
  const classes = useStyles();

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
