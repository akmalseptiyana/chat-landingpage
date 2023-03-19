import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { Menu } from "lucide-react";

import { PrimaryButton } from "../ui/button/primary-button";
import Logo from "@/assets/logo.png";
import Container from "@/components/ui/container";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Features", "Technology", "FAQ"];

export function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <img
          src={Logo}
          alt="logo"
          loading="lazy"
          style={{ width: "35px", height: "35px" }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            sx={{ fontFamily: "Source Sans Pro" }}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="relative"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          marginTop: "56px",
        }}
      >
        <Container
          sx={{
            height: "43px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <Menu size={24} color="#0C1B4D" />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img
              src={Logo}
              alt="logo"
              loading="lazy"
              style={{ width: "35px", height: "35px" }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "65px",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#0C1B4D",
                  fontFamily: "Source Sans Pro",
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <PrimaryButton
            variant="contained"
            sx={{
              height: "43px",
              padding: "10px 25px",
              boxShadow: "none",
            }}
          >
            Download
          </PrimaryButton>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
