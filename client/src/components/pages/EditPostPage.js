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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FileUpload from "../inputs/FileUpload";
import RadioButtons from "../inputs/RadioButtons";
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
    fontStyle: 'italic'
  }
}));

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const EditPostPage = () => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [brand_name, set_brand_name] = useState("");
  const [shoe_model, set_shoe_model] = useState("");
  const [color, set_color] = useState([]);
  const [year, set_year] = useState("");
  const [fileUpload, set_file_upload] = useState("");
  const [picture_info, set_picture_info] = useState([]);
  const [post_action, set_post_action] = useState();
  const [price, set_price] = useState("");
  const [condition, set_condition] = useState("");
  const [description, setDescription] = useState("");

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
      console.log(data.data[0][0]);
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

  const handleFileUpload = async (event) => {
    const base64Img = await toBase64(event.target.files[0]);
    set_file_upload(base64Img);
    set_picture_info(event.target.files[0]);
  };

  const handleUpdatePost = (event) => {
    event.preventDefault();
    console.log('post updated');
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
      {console.log(color)}
      <div className="row">
        <div className="col-md-6 col-12">
          <form onSubmit={handleUpdatePost}>
            <div className="">
              <RadioButtons
                handleRadioSelect={handleRadioSelect}
                postAction={post_action}
              />
            </div>
            <div className="mb-3">
              <div>
                <FileUpload handleFileUpload={handleFileUpload} />
                <p>File: {picture_info.name}</p>
                <p>Type: {picture_info.type}</p>
              </div>
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
                  <MenuItem value={"Adiddas"}>Adiddas</MenuItem>
                  <MenuItem value={"Jordan"}>Jordan</MenuItem>
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

            <div className="mb-5">
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
              />
            </div>

            <div className="container-fluid text-center">
              <button type="submit" className="btn btn-light">
                Update Post
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-6 col-12">
          <div
            className={`d-flex justify-content-center mb-4`}
          >
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
              {condition && (
                <div>Condition: {condition}</div>
              )}
              {price && <div>Price: ${price}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPostPage;
