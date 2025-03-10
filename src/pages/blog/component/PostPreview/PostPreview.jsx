import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Image from "next/image";
import Img from "../../../../assets/BlogPage/BlogPreview.png";
import Btn from "@/_components/Button/Btn";

const PostPreview = () => {
  return (
    <Grid
      container
      py={10}
      mx={{ xs: 2, md: 8 }}
      mb={5}
      sx={{
        position: "relative",
        ":after": {
          content: "''",
          display: "block",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "#0E2A3F",
          height: 2,
        },
      }}
    >
      <Grid size={{ sm: 12, md: 4 }}>
        <Stack direction={"row"} alignItems={"center"} spacing={0}>
          <IconButton disableTouchRipple>
            <ChevronLeftIcon sx={{ color: "#0E2A3F" }} />
          </IconButton>
          <Typography variant="h5">BLOG</Typography>
        </Stack>
        <Image
          src={Img}
          alt="Night"
          layout="responsive"
          style={{
            minWidth: "320px",
            width: "100%",
            maxWidth: "570px",
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }} py={{ xs: 0, lg: 8 }} px={{ md: 20 }}>
        <Box mb={5}>
          <Btn label={"4 min read"} clr={"#0E2A3F"} bg={"#7e96af"} />
        </Box>
        <Typography
          variant="h4"
          fontFamily={"Montserrat"}
          fontWeight={700}
          maxWidth={"540px"}
          width={"100%"}
          minWidth={"300px"}
        >
          Why Peru is the ideal destination for Citizenship by Investment
        </Typography>
        <Typography variant="body1" mt={{ md: "10px", lg: "33px" }}>
          By: Horizon press
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PostPreview;
