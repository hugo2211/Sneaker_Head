import React, { useState } from "react";
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import axios from "axios";

import FileUpload from "../inputs/FileUpload";
import RadioButtons from "../inputs/RadioButtons";
import MultiSelect from "../inputs/MultiSelect";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UserUploadPage = () => {
  const [error, setError] = useState("");
  const [brand_name, set_brand_name] = useState("");
  const [shoe_model, set_shoe_model] = useState("");
  const [color, set_color] = useState([]);
  const [year, set_year] = useState("");
  const [fileUpload, set_file_upload] = useState("");
  const [picture_info, set_picture_info] = useState([]);
  const [post_action, set_post_action] = useState();
  const [price, set_price] = useState('');
  const [condition, set_condition] = useState("");
  const [description, setDescription] = useState("");

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

  const handleUploadSubmit = (event) => {
    event.preventDefault();
    console.log(brand_name,
      shoe_model,
      color,
      year,
      post_action,
      price,
      condition);
    uploadPostInfo();
  };

  const uploadPostInfo = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.post(
        "/api/private/post",
        {
          web_id: localStorage.getItem("web_id"),
          image: fileUpload,
          brand_name,
          shoe_model,
          color,
          year,
          post_action,
          price,
          condition,
          description
        },
        config
      );

      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const renderAskingPrice = () => {
    if (post_action === "Sell") {
      return (
        <div className="col-lg-4 col-md-6 col-12 mb-5">
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
        <div className="col-lg-4 col-md-6 col-12 mb-5">
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
    <div>
      <div className="mt-4">
        <h2 className="text-center">New Post</h2>
        <form onSubmit={handleUploadSubmit}>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 mb-3">
                <RadioButtons
                  handleRadioSelect={handleRadioSelect}
                  postAction={post_action}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-3">
                <div>
                  <FileUpload handleFileUpload={handleFileUpload} />
                  <p>File: {picture_info.name}</p>
                  <p>Type: {picture_info.type}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-5">
                <MultiSelect
                  selectValue={color}
                  handleMultiSelect={handleMultiSelect}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-5">
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
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Nike"}>Nike</MenuItem>
                    <MenuItem value={"Adiddas"}>Adiddas</MenuItem>
                    <MenuItem value={"Jordan"}>Jordan</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-5">
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
              <div className="col-lg-4 col-md-6 col-12 mb-5">
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
            </div>

            <div className="row justify-content-md-center">
              <div className="col-lg-6 col-md-8 col-12 mb-5">
                <TextField
                  value={description}
                  onChange={e => setDescription(e.target.value)}
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
            </div>

            <div className="container-fluid text-center">
              <button type="submit" className="btn btn-light">
                Create Post
              </button>
            </div>

            {error && <span className="error-message">{error}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUploadPage;
