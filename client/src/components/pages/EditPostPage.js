import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MultiSelect from "../inputs/MultiSelect";

const useStyles = makeStyles(() => ({
  shoePost: {
    maxWidth: 300,
  },
  username: {
    marginBottom: "3px",
  },
  seperator: {
    backgroundColor: "white",
  },
  italic: {
    fontStyle: "italic",
  },
  radioGroup: {
    flexDirection: "row",
  },
}));

const EditPostPage = ({ history }) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [brand_name, set_brand_name] = useState("");
  const [shoe_model, set_shoe_model] = useState("");
  const [color, set_color] = useState([]);
  const [year, set_year] = useState("");
  const [post_action, set_post_action] = useState("Trade");
  const [price, set_price] = useState("");
  const [condition, set_condition] = useState("");
  const [description, setDescription] = useState("");
  const [size, set_size] = useState("");
  const [characterCount, setCharacterCount] = useState(255);

  const countChars = (val) => {
    let maxLength = 255;
    let strLength = val.length;
    let charRemain = (maxLength - strLength);
    setCharacterCount(charRemain)
  };

  let { id } = useParams();

  const getShoe = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.get(
        `/api/private/shoe?shoeid=${id}`,
        config
      );

      console.log(data);

      set_post_action(data.data[0][0].status_name);
      set_color(JSON.parse(data.data[0][0].color));
      set_brand_name(data.data[0][0].brand_name);
      set_shoe_model(data.data[0][0].shoe_model);
      set_year(data.data[0][0].year);
      setDescription(data.data[0][0].description);
      set_price(data.data[0][0].price);
      set_condition(data.data[0][0].shoe_condition);
      setUsername(data.data[0][0].username);
      setImageUrl(data.data[0][0].image_url);
      set_size(data.data[0][0].size);
      setCharacterCount(255 - data.data[0][0].description.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShoe();
  }, []);

  const handleRadioSelect = (event) => {
    set_post_action(event.target.value);
  };

  const handleMultiSelect = (event) => {
    set_color(event.target.value);
  };

  const handleUpdatePost = (event) => {
    event.preventDefault();
    updateShoe();
  };

  const updateShoe = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    const updateObj = {
      shoe_id: id,
      brand_name,
      shoe_model,
      color,
      year,
      post_action,
      price,
      condition,
      size,
      description,
    };

    try {
      const { data } = await axios.put(`/api/private/shoe`, updateObj, config);
      if (data.success === true) {
        history.push("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderShoeSize = () => {
    if (post_action === "Sell" || post_action === "Trade") {
      return (
        <div className="mb-4">
          <FormControl fullWidth variant="outlined">
            <InputLabel id="shoe-size-label">Shoe Size (US Men's)</InputLabel>
            <Select
              required
              labelId="shoe-size-label"
              id="shoe-size-select"
              value={size}
              onChange={(e) => set_size(e.target.value)}
              label="Condition"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"6.5"}>6.5</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"7.5"}>7.5</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"8.5"}>8.5</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"9.5"}>9.5</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
              <MenuItem value={"10.5"}>10.5</MenuItem>
              <MenuItem value={"11"}>11</MenuItem>
              <MenuItem value={"11.5"}>11.5</MenuItem>
              <MenuItem value={"12"}>12</MenuItem>
              <MenuItem value={"13"}>13</MenuItem>
              <MenuItem value={"14"}>14</MenuItem>
              <MenuItem value={"15"}>15</MenuItem>
            </Select>
          </FormControl>
        </div>
      )
    }
  }

  const renderAskingPrice = () => {
    if (post_action === "Sell") {
      return (
        <div className="mb-4">
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-price">
              Asking Price
            </InputLabel>
            <OutlinedInput
              required
              type="number"
              id="outlined-adornment-price"
              value={price}
              onChange={(e) => set_price(e.target.value)}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              labelWidth={90}
            />
          </FormControl>
        </div>
      );
    }
  };

  const renderShoeCondition = () => {
    if (post_action === "Sell" || post_action === "Trade") {
      return (
        <div className="mb-3">
          <FormControl fullWidth variant="outlined">
            <InputLabel id="shoe-condition-label">Condition</InputLabel>
            <Select
              required
              labelId="shoe-condition-label"
              id="shoe-condition-select"
              value={condition}
              onChange={(e) => set_condition(e.target.value)}
              label="Condition"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"New"}>New</MenuItem>
              <MenuItem value={"Like New"}>Like New</MenuItem>
              <MenuItem value={"Used"}>Used</MenuItem>
            </Select>
          </FormControl>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12">
          <form onSubmit={handleUpdatePost}>
            <div className="">
              <FormControl component="fieldset">
                <FormLabel component="legend">Are you looking to: </FormLabel>
                <RadioGroup
                  className={classes.radioGroup}
                  aria-label="gender"
                  name="gender1"
                  value={post_action}
                  onChange={handleRadioSelect}
                >
                  <FormControlLabel
                    value="Trade"
                    control={<Radio size="small" color="default" />}
                    label="Trade"
                  />
                  <FormControlLabel
                    value="Sell"
                    control={<Radio size="small" color="default" />}
                    label="Sell"
                  />
                  <FormControlLabel
                    value="Share"
                    control={<Radio size="small" color="default" />}
                    label="Share Only"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="mb-3">
              <MultiSelect
                selectValue={color}
                handleMultiSelect={handleMultiSelect}
              />
            </div>
            <div className="mb-4">
              <FormControl fullWidth variant="outlined">
                <InputLabel id="shoe-brand-label">Brand</InputLabel>
                <Select
                  required
                  labelId="shoe-brand-label"
                  id="shoe-brand-select"
                  value={brand_name}
                  onChange={(e) => set_brand_name(e.target.value)}
                  label="Age"
                >
                  <MenuItem value="mb-4">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Nike"}>Nike</MenuItem>
                  <MenuItem value={"Adidas"}>Adidas</MenuItem>
                  <MenuItem value={"Jordan"}>Jordan</MenuItem>
                  <MenuItem value={"Vans"}>Vans</MenuItem>
                  <MenuItem value={"Under Armour"}>Under Armour</MenuItem>
                  <MenuItem value={"Converse"}>Converse</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="mb-4">
              <TextField
                required
                fullWidth
                id="shoe-model-input"
                label="Model"
                variant="outlined"
                value={shoe_model}
                onChange={(e) => set_shoe_model(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <TextField
                required
                fullWidth
                type="number"
                id="shoe-year-input"
                label="Year"
                variant="outlined"
                value={year}
                onChange={(e) => set_year(e.target.value)}
              />
            </div>
            {renderAskingPrice()}
            {renderShoeCondition()}
            {renderShoeSize()}

            <div className="mb-4">
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                variant="outlined"
                id="post-input"
                label="Description/Status"
                fullWidth
                placeholder="Write status here"
                multiline
                rows={2}
                rowsMax={4}
                inputProps={{ maxLength: 255 }}
                onKeyUp={(e) => countChars(e.target.value)}
              />
              <p id="charNum" className="centered-text"> {characterCount} characters remaining </p>
            </div>

            <div className="text-center" style={{ marginBottom: "60px" }}>
              <button type="submit" className="btn btn-light btn-block">
                Update Post
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-6 col-12">
          <div className={`d-flex justify-content-center mb-4`}>
            <div className={classes.shoePost}>
              <div className={classes.username}>{username}</div>
              <img
                alt={`${brand_name} ${shoe_model} ${year}`}
                style={{ height: "200px", width: "300px" }}
                src={imageUrl}
              />
              <div>Likes: 0</div>
              <div className={classes.italic}>{description}</div>
              <hr className={classes.seperator} />
              {post_action === "Trade" || post_action === "Sell" ? (
                <div>Status: For {post_action}</div>
              ) : null}
              <div>Brand: {brand_name}</div>
              <div>Model: {shoe_model}</div>
              <div>Year: {year}</div>
              {size && <div>Size: {size}</div>}
              {condition && <div>Condition: {condition}</div>}
              {price && <div>Price: ${price}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPostPage;
