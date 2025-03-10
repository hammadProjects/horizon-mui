import { Container } from "@mui/material";
import HeroTitle from "./HeroTitle";

const HeroSection = ({label, bgImg}) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${bgImg})`,
        height: "500px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeroTitle label={label} />
    </Container>
  );
};

export default HeroSection;
