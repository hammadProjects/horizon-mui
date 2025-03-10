import { Container } from "@mui/material";

const Divider = ({color = "#B69F71"}) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: color,
        paddingY: "4px",
      }}
    ></Container>
  );
};

export default Divider;
