import { Box } from "@mui/material";
import logoImg from "../../assets/Logo.svg";
import Image from "next/image";

const Logo = ({ customMargin = "0px", customWidth }) => {
  return (
    <Box m={customMargin}>
      <Image
        alt="horizon"
        src={logoImg}
        width={customWidth}
      />
    </Box>
  );
};

export default Logo;
