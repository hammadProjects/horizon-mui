import { Stack, Typography } from "@mui/material";

const HeroTitle = ({ label }) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        width: "80%",
        maxWidth: "500px",
        height: "150px",
        backgroundColor: "#0E2A3F",
        color: "white",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          position: "relative",
          ":before": {
            content: "''",
            width: "40px",
            borderBottom: "solid 1px #fff",
            backgroundColor: "white",
            position: "absolute",
            left: "50%",
            top: 0,
          },
        }}
        fontSize={{ xs: "45px", md: "60px" }}
        fontFamily={"TabacG1-Bold"}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export default HeroTitle;
