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
} from "@material-ui/core";
import Header from "../general/Header";
import CheckboxesGroup from "../inputs/CheckBoxesGroup";

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
  "Mutlicolor"
];

const UserUploadPage = ({ history }) => {
  const classes = useStyles();
  const [shoeBrand, setShoeBrand] = useState("");
  const [shoeModel, setShoeModel] = useState("");
  const [shoeColor, setShoeColor] = useState([]);
  const [shoeYear, setShoeYear] = useState("");

  return (
    <div>
      <Header history={history} />
      <div className="mt-4">
        <h2 className="text-center">Upload</h2>

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
              <h2 className="text-center">Image Upload</h2>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <CheckboxesGroup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUploadPage;
