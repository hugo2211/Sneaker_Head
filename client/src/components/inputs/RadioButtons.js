import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: "flex",
  },
  radioGroup: {
    flexDirection: "row",
    faAlignLeft: "true",
  },
}));

export default function RadioButtons({ post_action, handleRadioSelect }) {
  const classes = useStyles();

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend" className={classes.formLabel}>
        Are you looking to:
      </FormLabel>
      <RadioGroup
        required
        aria-label="status_type"
        className={classes.radioGroup}
        name="status_type"
        value={post_action}
        onChange={handleRadioSelect}
      >
        <FormControlLabel
          value="Trade"
          control={<Radio required color="default" />}
          label="Trade"
        />
        <FormControlLabel
          value="Sell"
          control={<Radio required color="default" />}
          label="Sell"
        />
        <FormControlLabel
          value="Share"
          control={<Radio required color="default" />}
          label="Share Only"
        />
      </RadioGroup>
    </FormControl>
  );
}
