import { Container, IconButton, Stack, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const items = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Process", href: "/process" },
];

const Footer = () => {
  return (
    <Grid
      container
      bgcolor={"#0E2A3F"}
      color={"white"}
      alignItems={"center"}
      px={1}
    >
      <Grid
        size={{ xs: 6, sm: 4, md: 3 }}
        textAlign={{ xs: "left", sm: "center" }}
      >
        <Logo customWidth={"156px"} customMargin="25px 0px 42px 0px" />
      </Grid>
      <Grid size={{ xs: 6, sm: 4, md: 3 }}>
        <Typography fontSize={"12px"} textAlign={{ xs: "right", sm: "center" }}>
          All rights reserved | Privacy policy
        </Typography>
      </Grid>
      <Grid size={{ xs: 6, sm: 4, md: 3 }}>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              sx={{ color: "white", textDecoration: "none", fontSize: "12px" }}
            >
              {item.name}
            </Link>
          ))}
        </Stack>
      </Grid>
      <Grid size={{ xs: 6, sm: 4, md: 3 }}>
        <SocialLinks />
      </Grid>
    </Grid>
  );
};

export default Footer;

export const SocialLinks = ({ clr }) => {
  return (
    <Stack direction="row" spacing={0} justifyContent={"center"}>
      <IconButton disableRipple>
        <FacebookIcon sx={{ width: "20px", color: clr || "white" }} />
      </IconButton>
      <IconButton disableRipple>
        <InstagramIcon sx={{ width: "20px", color: clr || "white" }} />
      </IconButton>
      <IconButton disableRipple>
        <XIcon sx={{ width: "20px", color: clr || "white" }} />
      </IconButton>
      <IconButton disableRipple>
        <LinkedInIcon sx={{ width: "20px", color: clr || "white" }} />
      </IconButton>
    </Stack>
  );
};
