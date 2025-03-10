const {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Link,
} = require("@mui/material");
const { default: Image } = require("next/image");
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const NewsPost = ({ img, label, desc, label2, href }) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: 0,
        maxWidth: "360px",
        maxHeight: "497px",
        bgcolor: "white",
      }}
    >
      <CardMedia>
        <Image
          src={img}
          alt={label}
          layout="responsive"
          style={{
            width: "100%",
            maxWidth: "358px",
            maxHeight: "241px",
            objectFit: "cover",
          }}
        />
      </CardMedia>
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <LocalOfferIcon sx={{ width: "12px", color: "gray" }} />
          <Typography color="#4C6275" variant="body2">
            {label}
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          fontWeight={600}
          my={{ xs: 2, sm: 0.25, lg: 2 }}
        >
          {label2}
        </Typography>
        <Typography variant="body2" mb={{ xs: 2, sm: 0.25, lg: 2 }}>
          {desc}
        </Typography>
        <Link href={href} style={{ color: "#5E5E5E" }}>
          See more <ArrowOutwardIcon sx={{ width: "12px" }} />
        </Link>
      </CardContent>
    </Card>
  );
};

export default NewsPost;
