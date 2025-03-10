import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
// import card1 from "../../../assets/contact_card_1.png"

const ContactUs = () => {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography
        sx={{
          ":after": {
            content: '""',
            width: "15px",
            height: "15px",
            transform: "translate(45deg)",
            backgroundColor: "#B69F71",
            display: "block",
            marginLeft: "50%",
            transform: "rotate(45deg)",
          },
          marginBottom: "20px",
        }}
        variant="h6"
        color="#B69F71"
      >
        Contact US
      </Typography>
      <Typography
        variant="body1"
        fontWeight={"500"}
        width={"645px"}
        mt={"22px"}
        mx={"auto"}
      >
        If you have any questions, doubts or need more information about our
        services, do not hesitate to contact us. Our team will be happy to
        assist you promptly and professionally.
      </Typography>
      <ContactCard />
    </Container>
  );
};

export default ContactUs;

const ContactCard = () => {
  return (
    <Card
      sx={{
        maxWidth: "360px",
        padding: "20px",
        boxSizing: "border-box",
        textAlign: "left",
      }}
    >
      {/* <CardMedia sx={{ height: "210px", objectFit: "contain" }} image={card1} /> */}
      <CardContent>
        <Typography
          variant="body1"
          fontWeight={"700"}
          sx={{
            ":before": {
              content: "'",
              width: "25px",
            },
          }}
        >
          LIMA, PERU
        </Typography>
        <Typography>SAN BORJA OFFICE</Typography>
        <Typography>+ 51 000 000 000</Typography>
        <Typography>Mail@mail.com</Typography>
        <Typography>San Borja, Lima.</Typography>
      </CardContent>
    </Card>
  );
};
