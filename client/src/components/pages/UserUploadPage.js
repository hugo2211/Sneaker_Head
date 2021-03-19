import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Chip,
  RaisedButton,
} from "@material-ui/core";
import CheckboxesGroup from "../inputs/CheckBoxesGroup";
import FileUpload from "../inputs/FileUpload";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(2),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const shoeColorList = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Black",
  "Brown",
  "Silver",
  "White",
  "Gold",
  "Mutlicolor",
];

const UserUploadPage = () => {
  const classes = useStyles();
  const [shoeBrand, setShoeBrand] = useState("");
  const [shoeModel, setShoeModel] = useState("");
  const [shoeColor, setShoeColor] = useState([]);
  const [shoeYear, setShoeYear] = useState("");
  const [fileUpload, setFileUpload] = useState("");

  const handleFileUpload = (event) => {
    setFileUpload(event.target.files[0]);
  };

  const handleUploadSubmit = (event) => {
    event.preventDefault();
    console.log(shoeBrand, shoeModel, shoeColor, shoeYear, fileUpload)
  };

  return (
    <div>
      <div className="mt-4">
        <h2 className="text-center">Upload</h2>

        <form onSubmit={handleUploadSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="shoe-brand-label">Brand</InputLabel>
                  <Select
                    labelId="shoe-brand-label"
                    id="shoe-brand-select"
                    value={shoeBrand}
                    onChange={(e) => setShoeBrand(e.target.value)}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Nike</MenuItem>
                    <MenuItem value={20}>Adiddas</MenuItem>
                    <MenuItem value={30}>Jordan</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <TextField
                  className={classes.formControl}
                  fullWidth
                  id="shoe-model-input"
                  label="Model"
                  variant="outlined"
                  value={shoeModel}
                  onChange={(e) => setShoeModel(e.target.value)}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <TextField
                  className={classes.formControl}
                  fullWidth
                  type="number"
                  id="shoe-year-input"
                  label="Year"
                  variant="outlined"
                  value={shoeYear}
                  onChange={(e) => setShoeYear(e.target.value)}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel id="shoe-color-label">Color</InputLabel>
                  <Select
                    labelId="shoe-color-label"
                    id="shoe-color-select"
                    multiple
                    value={shoeColor}
                    onChange={(e) => setShoeColor(e.target.value)}
                    input={<Input id="shoe-color-chip" />}
                    renderValue={(selected) => (
                      <div className={classes.chips}>
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            className={classes.chip}
                          />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                  >
                    {shoeColorList.map((color) => (
                      <MenuItem key={color} value={color}>
                        {color}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <FileUpload handleFileUpload={handleFileUpload} />
                <p>File: {fileUpload.name}</p>
                <p>Type: {fileUpload.type}</p>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <CheckboxesGroup />
              </div>
              <div className="container-fluid text-center">
                <button type="submit" className="btn btn-light">Create Post</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUploadPage;
