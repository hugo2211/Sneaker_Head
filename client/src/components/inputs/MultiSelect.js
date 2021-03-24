import React from "react";
import { FormControl, InputLabel, Select, Input, Chip, MenuItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

const MultiSelect = ({ selectValue, handleMultiSelect }) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl} fullWidth>
      <InputLabel id="shoe-color-label">Color</InputLabel>
      <Select
        labelId="shoe-color-label"
        id="shoe-color-select"
        multiple
        value={selectValue}
        onChange={handleMultiSelect}
        input={<Input id="shoe-color-chip" />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
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
  );
};

export default MultiSelect;
