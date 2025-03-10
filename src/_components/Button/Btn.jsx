import { Button } from "@mui/material";

const Btn = ({
  label,
  bg,
  clr,
  customMargin = "0px",
  customWidth,
  customFontSize,
  v
}) => {
  return (
    <Button
      variant={v || "contained"}
      disableTouchRipple={true}
      sx={{
        backgroundColor: `${bg}`,
        color: `${clr}`,
        margin: `${customMargin}`,
        borderRadius: 0,
        width: `${customWidth}`,
        fontSize: `${customFontSize}`,
        boxShadow: 0
      }}
    >
      {label}
    </Button>
  );
};

export default Btn;
