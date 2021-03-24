import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtons({ post_action, handleRadioSelect }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Are you looking to:</FormLabel>
      <RadioGroup aria-label="status_type" name="status_type" value={post_action} onChange={handleRadioSelect}>
        <FormControlLabel value="trade" control={<Radio />} label="Trade" />
        <FormControlLabel value="sell" control={<Radio />} label="Sell" />
        <FormControlLabel value="share" control={<Radio />} label="Share (post your collection)" />
      </RadioGroup>
    </FormControl>
  );
}
