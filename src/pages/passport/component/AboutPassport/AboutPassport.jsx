import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import React from "react";

const AboutPassport = () => {
  const sections = [
    {
      title: "About Passport Classification",
      content: [
        "Horizon offers a comprehensive passport index tool, allowing users to view and compare the rankings of international passports. This classification includes passports from 227 destinations worldwide.",
        "Through the Horizon website, you can explore and filter passports by geographical region or country, gaining insights into their ranking.",
        "The tool highlights the strength of your passport by showing its level of freedom of movement, determined by the number of destinations it grants visa-free or visa-on-arrival access compared to other passports.",
      ],
    },
    {
      title: "Methodology",
      content: [
        "Horizon Passport Index is based on documented data and information that is constantly improved and updated.",
        "The index includes 227 different destinations distributed around the world, and this index is classified among passports based on the points it scores, as these points represent the number of destinations allowed to visit by passport holders without a visa, and the passport with the highest number of points is considered the strongest among other passports.",
        "When you enter the passport index of Horizon website, you can choose the desired destination within a geographical map that appears in front of you.",
        "Where you can choose from the continent of Asia, Africa, the Middle East, or the European Union, and you will later see all the information related to the destination passport, where you will be given the order of this passport that shows the number of destinations allowed to be visited without a visa, and those that need a visa on arrival.",
        "The site also allows you to compare the strength of the passport to others, where you can find out the differences between them in the number of destinations that allow visits and whether you will need a visa or not.",
      ],
    },
  ];
  return (
    <Box
      pb={10}
      bgcolor={"#D1D9E8"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      px={{ xs: 2 }}
      pt={2}
    >
      {sections.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
    </Box>
  );
};

export default AboutPassport;

const Section = ({ title, content }) => {
  return (
    <Paper
      variant="outlined"
      style={{
        borderRadius: 0,
        borderColor: "#0E2A3F",
        backgroundColor: "#E6ECF2",
        maxWidth: "1140px",
        width: "100%",
        padding: "20px",
      }}
    >
      <Typography variant="subtitle1" fontWeight={700} mb={5}>
        {title}
      </Typography>
      <Box borderTop={4} borderColor="#1A3B59" paddingTop={2}>
        {content.map((paragraph, index) => (
          <Typography
            key={index}
            variant="body2"
            maxWidth="759px"
            width={"100%"}
            fontWeight={500}
            gutterBottom
            mb={2}
          >
            {paragraph}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};
