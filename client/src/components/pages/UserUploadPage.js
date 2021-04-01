import React, { useState } from "react";
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import FileUpload from "../inputs/FileUpload";
import MultiSelect from "../inputs/MultiSelect";
import LoadingModal from "../modals/LoadingModal";

const useStyles = makeStyles(() => ({
  radioGroup: {
    flexDirection: "row",
  },
}));

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UserUploadPage = ({ history }) => {
  const classes = useStyles();

  const [error, setError] = useState("");
  const [brand_name, set_brand_name] = useState("");
  const [shoe_model, set_shoe_model] = useState("");
  const [color, set_color] = useState([]);
  const [year, set_year] = useState("");
  const [fileUpload, set_file_upload] = useState("");
  const [picture_info, set_picture_info] = useState([]);
  const [post_action, set_post_action] = useState("Trade");
  const [price, set_price] = useState("");
  const [condition, set_condition] = useState("");
  const [description, setDescription] = useState("");
  const [size, set_size] = useState("");
  const [characterCount, setCharacterCount] = useState(255);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const countChars = (val) => {
    let maxLength = 255;
    let strLength = val.length;
    let charRemain = (maxLength - strLength);
    setCharacterCount(charRemain)
  };

  const handleRadioSelect = (event) => {
    set_post_action(event.target.value);
  };

  const handleMultiSelect = (event) => {
    set_color(event.target.value);
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    console.log("this is it", file);
    const base64Img = await toBase64(file);
    set_file_upload(base64Img);
    set_picture_info(file);
  };

  const handleUploadSubmit = (event) => {
    event.preventDefault();
    setShowLoadingScreen(true);
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
          size,
          description,
        },
        config
      );

      if (data.success === true) {
        history.push("/profile");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setShowLoadingScreen(false);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const renderShoeSize = () => {
    if (post_action === "Sell" || post_action === "Trade") {
      return (
        <div className="col-lg-4 col-md-6 col-12 mb-4">
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
      );
    }
  };

  const renderAskingPrice = () => {
    if (post_action === "Sell") {
      return (
        <div className="col-lg-4 col-md-6 col-12 mb-4">
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
        <div className="col-lg-4 col-md-6 col-12 mb-4">
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
      <LoadingModal
        modalMessage="Uploading your post"
        showLoadingScreen={showLoadingScreen}
      />
        <h2 className="text-center">New Post</h2>
        <form onSubmit={handleUploadSubmit}>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-2">
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
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-2">
                <div>
                  <FileUpload
                    imageRequired
                    handleFileUpload={handleFileUpload}
                  />
                  <p>File: {picture_info.name}</p>
                  <p>Type: {picture_info.type}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <MultiSelect
                  selectValue={color}
                  handleMultiSelect={handleMultiSelect}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
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
                    <MenuItem value={"Adidas"}>Adidas</MenuItem>
                    <MenuItem value={"Jordan"}>Jordan</MenuItem>
                    <MenuItem value={"Vans"}>Vans</MenuItem>
                    <MenuItem value={"Under Armour"}>Under Armour</MenuItem>
                    <MenuItem value={"Converse"}>Converse</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
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
              <div className="col-lg-4 col-md-6 col-12 mb-4">
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
            </div>

            <div className="row justify-content-md-center">
              <div className="col-lg-6 col-md-8 col-12 mb-4">
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
                  rows={1}
                  rowsMax={2}
                  inputProps={{ maxLength: 255 }}
                  onKeyUp={(e) => countChars(e.target.value)}
                />
                <p id="charNum" className="centered-text"> {characterCount} characters remaining </p>
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
