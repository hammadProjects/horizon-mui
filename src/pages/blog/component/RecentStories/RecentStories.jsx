import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import story1 from "../../../../assets/BlogPage/story.png";
import Grid from "@mui/material/Grid2";
import Input from "../Input/Input";

const RecentStories = () => {
  return (
    <Box color={"#0E2A3F"} py={10} px={{ xs: 3, md: 10 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ md: "space-between" }}
        spacing={2}
        mb={2}
      >
        <Typography variant="h5" fontWeight={600}>
          OUR BLOG: Recent stories
        </Typography>
        <Input />
      </Stack>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <StoryCard
            showDate="true"
            imageUrl={story1}
            w={"769px"}
            h={"500px"}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StoryCard imageUrl={story1} w={"360px"} h={"246px"} m={1} />
          <StoryCard imageUrl={story1} w={"360px"} h={"246px"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecentStories;

const StoryCard = ({ imageUrl, showDate = false, w, h, m = 0 }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imageUrl.src})`,
        // objectFit: "",
        width: "100%",
        maxWidth: w,
        height: h,
        color: "white",
        position: "relative",
        mb: m,
      }}
    >
      <Box
        bgcolor={"#0E2A3F"}
        width={"100%"}
        height={"100%"}
        sx={{ opacity: 0.3 }}
      />
      <Box sx={{ position: "absolute", bottom: "8%", left: "20px" }}>
        {" "}
        <Typography
          sx={{
            ":before": {
              content: '"|"',
              mr: "12px",
            },
          }}
          variant="body1"
        >
          Cityzenship
        </Typography>
        <Typography
          mt="11px"
          mb="19.5px"
          variant="h5"
          width={"100%"}
          maxWidth={"568px"}
        >
          Recommended for You:
          <br /> Investing in an existing company
        </Typography>
        {showDate ? (
          <Stack direction={"row"} spacing={"25px"}>
            <Typography variant="body1">Horizon press</Typography>
            <Typography variant="body1">January 10, 2025</Typography>
          </Stack>
        ) : (
          <></>
        )}
        <Box mt={"22px"}>
          <Button color="#FFF" variant="outlined" sx={{ borderRadius: 0 }}>
            Read more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
