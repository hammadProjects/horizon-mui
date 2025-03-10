import React from "react";
import Grid from "@mui/material/Grid2";
import {
  Autocomplete,
  Box,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Btn from "../Button/Btn";
import { CheckBox } from "@mui/icons-material";

const GetFreeCall = ({ bg }) => {
  return (
    <Grid
      spacing={3}
      px={{ xs: 2, md: 5 }}
      maxWidth={"1140px"}
      mx={"auto"}
      container
      color="#0E2A3F"
      py={10}
      bgcolor={bg || ""}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack>
          <Typography variant="subtitle1" fontWeight={700}>
            KNOW MORE
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            Get a free consultation NOW
          </Typography>
          <Typography variant="body2" maxWidth={"320px"} mt={4}>
            Answering your questions is the first step in supporting your
            journey to success. Let us show you how we can help.
          </Typography>
        </Stack>
        <Box mt={8}>
          <Btn label={"Review the process"} clr={"#0E2A3F"} bg={"#B69F71"} />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <CallBackForm />
      </Grid>
    </Grid>
  );
};

export default GetFreeCall;

const CallBackForm = () => {
  return (
    <Box bgcolor={"#0E2A3F"} py={3} maxWidth={"500px"}>
      <Typography
        variant="h6"
        color="#FFF"
        textAlign={"center"}
        fontWeight={700}
        mb={4}
      >
        Get a free call back
      </Typography>
      <Stack spacing={2} px={{ xs: 2, lg: 0 }}>
        <Stack
          spacing={{ xs: 3, lg: 0 }}
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-around"}
        >
          <Input placeholder={"First Name"} />
          <Input placeholder={"Last Name"} />
        </Stack>
        <Stack
          spacing={{ xs: 3, lg: 0 }}
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-around"}
        >
          <Input placeholder={"Your Number"} />
          <Input placeholder={"Email"} />
        </Stack>
        <Stack
          spacing={{ xs: 3, lg: 0 }}
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-around"}
        >
          <Input placeholder={"Your job tittle"} />
          <Input placeholder={"Nationality"} />
        </Stack>
        <Box>
          <Autocomplete
            sx={{
              maxWidth: "450px",
              bgcolor: "#FFF",
              mx: "auto",
              width: "100%",
              borderRadius: 0,
            }}
            disablePortal
            options={["Yes", "No"]}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Can you invest with a minimum of $80,000?"
              />
            )}
          />
        </Box>
        <TextField
          rows={4}
          placeholder={"Message"}
          multiline
          variant="filled"
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "white",
              borderRadius: "0",
              color: "#0E2A3F",
              fontSize: "14px",
              width: "100%",
              maxWidth: "450px",
              mx: "auto",
            },
          }}
        />

        {/* radio */}

        <Box maxWidth={"450px"}>
          <FormControlLabel
            sx={{ color: "white", mx: 3 }}
            control={<CheckBox sx={{ mr: 3 }} />}
            label={
              "I agree to subscribe to Horizon’s newsletters and promotional communications."
            }
          />
        </Box>

        <Box width={"100%"} textAlign={"center"}>
          <Btn label={"Send"} bg={"#5774A1"} clr={"#0E2A3F"} />
        </Box>
      </Stack>
    </Box>
  );
};

const Input = ({ placeholder, row }) => {
  return (
    <TextField
      rows={row || 1}
      placeholder={placeholder}
      variant="filled"
      sx={{
        "& .MuiFilledInput-root": {
          backgroundColor: "white",
          borderRadius: "0",
          color: "#0E2A3F",
          fontSize: "14px",
        },
      }}
    />
  );
};
