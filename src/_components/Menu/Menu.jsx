import { Link, Stack, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Menu = ({ items, isActive }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => {
    setOpen(isOpen);
  };
  return (
    <>
      {/* mobile */}
      <IconButton
        onClick={() => toggleDrawer(true)}
        sx={{
          display: { xs: "block", md: "none" },
          color: "white",
          mx: "auto",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <DrawerList items={items} isActive={isActive} />
      </Drawer>
      {/* desktop */}
      <Stack
        direction={"row"}
        spacing={3}
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
          display: { xs: "none", md: "flex" },
        }}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            variant="body2"
            sx={{
              color: isActive(item.href) ? "#B69F71" : "white",
              textDecoration: "none",
            }}
          >
            {item.name}
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default Menu;

const DrawerList = ({ items, isActive }) => {
  return (
    <Stack height={"100%"} bgcolor={"#0E2A3F"} width={"150px"}>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          variant="body2"
          padding={"10px 8px"}
          sx={{
            color: isActive(item.href) ? "#B69F71" : "white",
            textDecoration: "none",
          }}
        >
          {item.name}
        </Link>
      ))}
    </Stack>
  );
};
