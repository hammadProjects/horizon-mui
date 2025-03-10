import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardImg from "../../../../assets/ContactUsPage/contact_card_1.png";
import Image from "next/image";

const ContactUs = () => {
  return (
    <Box py={7}>
      <Box mb={5}>
        <Typography mb={3} variant="h6" color="#B69F71" textAlign={"center"}>
          CONTACT US
        </Typography>
        <Typography
          px={{ xs: 3, sm: 0 }}
          variant="subtitle1"
          fontWeight={600}
          maxWidth={"520px"}
          mx={"auto"}
          textAlign={"center"}
        >
          If you have any questions, doubts or need more information about our
          services, do not hesitate to contact us. Our team will be happy to
          assist you promptly and professionally.
        </Typography>
      </Box>
      <Grid
        container
        justifyContent={{ md: "space-around" }}
        px={5}
        spacing={5}
      >
        <Grid size={{ xs: 12, sm: 5.6, md: 3.5 }}>
          <ContactCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 5.6, md: 3.5 }}>
          <ContactCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 5.6, md: 3.5 }}>
          <ContactCard />
        </Grid>
      </Grid>
    </Box>
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
      <CardMedia>
        <Image
          src={CardImg}
          alt={CardImg}
          layout="responsive"
          style={{
            width: "100%",
            maxWidth: "358px",
          }}
        />
      </CardMedia>
      <CardContent>
        <Typography
          variant="body1"
          fontWeight={"700"}
          sx={{
            ":before": {
              content: "''",
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
