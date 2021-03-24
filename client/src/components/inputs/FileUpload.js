import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
}));

const FileUpload = (props) => {
  const classes = useStyles();

  return (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={props.handleFileUpload}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload Photo
        </Button>
      </label>
    </div>
  );
}

export default FileUpload;
