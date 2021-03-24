import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import axios from "axios";

import FileUpload from "../inputs/FileUpload";
import RadioButtons from "../inputs/RadioButtons";
import MultiSelect from "../inputs/MultiSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  noLabel: {
    marginTop: theme.spacing(2),
  },
}));


const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UserUploadPage = () => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [brand_name, set_brand_name] = useState("");
  const [shoe_model, set_shoe_model] = useState("");
  const [color, set_color] = useState([]);
  const [year, set_year] = useState("");
  const [fileUpload, set_file_upload] = useState("");
  const [picture_info, set_picture_info] = useState([]);
  const [post_action, set_post_action] = useState("");

  const handleRadioSelect = (event) => {
    set_post_action(event.target.value);
  };

  const handleMultiSelect = (event) => {
    set_color(event.target.value);
  }

  const handleFileUpload = async (event) => {
    const base64Img = await toBase64(event.target.files[0]);
    set_file_upload(base64Img);
    set_picture_info(event.target.files[0]);
  };

  const handleUploadSubmit = (event) => {
    event.preventDefault();
    console.log(color, post_action);
    //uploadPostInfo();
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

  return (
    <div>
      <div className="mt-4">
        <h2 className="text-center">Upload</h2>
        <form onSubmit={handleUploadSubmit}>
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
                    value={brand_name}
                    onChange={(e) => set_brand_name(e.target.value)}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Nike'}>Nike</MenuItem>
                    <MenuItem value={'Adiddas'}>Adiddas</MenuItem>
                    <MenuItem value={'Jordan'}>Jordan</MenuItem>
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
                  value={shoe_model}
                  onChange={(e) => set_shoe_model(e.target.value)}
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
                  value={year}
                  onChange={(e) => set_year(e.target.value)}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <MultiSelect 
                  selectValue={color}
                  handleMultiSelect={handleMultiSelect}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <FileUpload handleFileUpload={handleFileUpload} />
                <p>File: {picture_info.name}</p>
                <p>Type: {picture_info.type}</p>
                {fileUpload && <img src={fileUpload} style={{ height: 200, width: 200 }} />}
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <RadioButtons 
                  handleRadioSelect={handleRadioSelect}
                  postAction={post_action}
                />
              </div>
              <div className="container-fluid text-center">
                <button type="submit" className="btn btn-light">
                  Create Post
                </button>
              </div>

              {error && <span className="error-message">{error}</span>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUploadPage;
