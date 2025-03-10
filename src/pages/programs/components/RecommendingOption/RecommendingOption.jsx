import { Box, IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";
import RecommendImg from "../../../../assets/ProgramsPage/ProgramsRecommend.png";
import AddIcon from "@mui/icons-material/Add";
import Btn from "@/_components/Button/Btn";

const RecommendingOption = ({ option }) => {
  return (
    <Box p={{ xs: 3, sm: 5, md: 10 }}>
      <Typography variant="subtitle1" color="#5774A1">
        OPOION {option}
      </Typography>
      <Typography variant="h6" lineHeight={1}>
        <span style={{ fontWeight: 700 }}>Recommended for You:</span>
        <br /> Investing in an existing company
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ md: 7 }} position={"relative"}>
          <Typography variant="body2" color="#5774A1" my={2}>
            What you invest: $150,000
          </Typography>
          {/*  */}
          <Stack direction={"column"}>
            <Stack direction={"row"} alignItems={"center"} mx={2} mb={4}>
              <Typography variant="body2" fontWeight={600} maxWidth={"360px"}>
                Submission of Public Deed Confirming Capital Increase in an
                Existing Company
              </Typography>
              <IconButton>
                <AddIcon sx={{ color: "#0E2A3F" }} />
              </IconButton>
            </Stack>
            {/*  */}
            <Stack direction={"row"} alignItems={"center"} mx={2} mb={4}>
              <Typography variant="body2" fontWeight={600} maxWidth={"360px"}>
                Submission of Public Deed Confirming Capital Increase in an
                Existing Company
              </Typography>
              <IconButton>
                <AddIcon sx={{ color: "#0E2A3F" }} />
              </IconButton>
            </Stack>
          </Stack>

          {/*  */}
          <Box sx={{ position: "absolute", bottom: 2, right: "10%" }}>
            <Btn label={"Process"} clr={"#FFF"} bg={"#0E2A3F"} />
          </Box>
        </Grid>
        <Grid size={{ md: 4 }}>
          <Image
            src={RecommendImg}
            alt="RecommendImg"
            style={{
              minWidth: "300px",
              width: "100%",
              maxWidth: "500px",
            }}
            layout="responsive"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecommendingOption;
