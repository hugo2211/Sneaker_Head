import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const CheckboxesGroup = ({ postAction, handleCheckboxSelect}) => {
  const classes = useStyles();

  const { trade, sell, view } = postAction;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Are you looking to: </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={trade} onChange={handleCheckboxSelect} name="trade" />}
            label="Trade"
          />
          <FormControlLabel
            control={<Checkbox checked={sell} onChange={handleCheckboxSelect} name="sell" />}
            label="Sell"
          />
          <FormControlLabel
            control={<Checkbox checked={view} onChange={handleCheckboxSelect} name="view" />}
            label="View Only"
          />
        </FormGroup>
        <FormHelperText>Select one or more options</FormHelperText>
      </FormControl>
    </div>
  );
}

export default CheckboxesGroup;