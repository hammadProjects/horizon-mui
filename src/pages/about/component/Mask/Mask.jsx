import { Box } from "@mui/material";
import image from "../assets/Mask.svg";
const Mask = ({ customWidth, customTop, customLeft, customHeight }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        position: "absolute",
        width: `${customWidth}`,
        height: `${customHeight}`,
        top: `${customTop}`,
        left: `${customLeft}`,
      }}
    />
  );
};

export default Mask;
