/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import GitHubIcon from '@mui/icons-material/GitHub';

const SearchBar = ({ onSearch }) => {
  const [orgName, setOrgName] = useState("");

  const handleInputChange = (e) => {
    setOrgName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/orgs/${orgName}/repos`
      );
      onSearch(response.data, orgName);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1} alignItems="flex-end">
        <GitHubIcon sx={{m:"5px 0"}}/>
        <Grid item xs={10}>
          <TextField
            id="orgName"
            label="Organization Name"
            variant="standard"
            value={orgName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
