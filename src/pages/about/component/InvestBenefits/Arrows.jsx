import { Box } from "@mui/material";
import leftArrow from "../../assets/Arrow 1.svg";
import rightArrow from "../../assets/Arrow 2.svg";

const SingleArrow = ({ bg = "#0E2A3F", img }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        width: "100px",
        padding: "1px 0px",
        backgroundColor: `${bg}`,
      }}
    />
  );
};

const Arrows = ({ bg }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "50px",
        justifyContent: "center", 
        alignItems: "center",
      }}
    >
      {[leftArrow, rightArrow].map((arrow, i) => (
        <SingleArrow bg={bg} img={arrow} key={i} />
      ))}
    </Box>
  );
};

export default Arrows;
