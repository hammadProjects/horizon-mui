import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Input = () => {
  return (
    <TextField
      variant="outlined"
      placeholder={"Search"}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#0E2A3F" }} />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        "& .MuiInputBase-root": {
          height: "35px",
          borderRadius: 0,
        },
        maxWidth: "300px",
        width: "100%"
      }}
    />
  );
};

export default Input;
