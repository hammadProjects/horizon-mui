import { Box, Typography } from "@mui/material";
import React from "react";
import { newsItems } from "../../../home/components/LatestNews/LatestNews";
import NewsPost from "@/_components/NewsPost/NewsPost";
import Grid from "@mui/material/Grid2";

const RelatedPosts = () => {
  return (
    <Box py={10}>
      <Typography textAlign={"center"} variant="h5" fontWeight={500}>
        RELATED POSTS
      </Typography>
      <Grid
        container
        py={10}
        px={{ xs: 2, md: 10 }}
        justifyContent={"space-between"}
        rowSpacing={5}
      >
        {newsItems.map((item) => (
          <Grid size={{ xs: 12, sm: 5.9, md: 3.9 }}>
            <NewsPost
              img={item.img}
              label={item.label}
              desc={item.desc}
              label2={item.label2}
              href={item.href}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedPosts;
