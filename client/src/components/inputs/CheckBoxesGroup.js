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

const CheckboxesGroup = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    trade: false,
    sell: false,
    view: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { trade, sell, view } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Are you looking to: </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={trade} onChange={handleChange} name="trade" />}
            label="Trade"
          />
          <FormControlLabel
            control={<Checkbox checked={sell} onChange={handleChange} name="sell" />}
            label="Sell"
          />
          <FormControlLabel
            control={<Checkbox checked={view} onChange={handleChange} name="view" />}
            label="View Only"
          />
        </FormGroup>
        <FormHelperText>Select one or more options</FormHelperText>
      </FormControl>
    </div>
  );
}

export default CheckboxesGroup;