import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Instagram, Facebook, Twitter } from "lucide-react";

import Container from "@/components/ui/container";
import Logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer>
      <Container
        disableGutters
        sx={{
          marginTop: "100px",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap="30px"
          sx={{
            paddingY: "80px",
            paddingX: { xs: "40px", md: "80px" },
            backgroundColor: "primary.light",
            borderRadius: "6px 6px 0 0",
          }}
        >
          <Box>
            <Stack direction="row" spacing="10px">
              <img
                src={Logo}
                alt="logo"
                style={{ width: "30px", height: "30px" }}
              />
              <Typography variant="subtitle1">Chat N&apos; Rechat</Typography>
            </Stack>
            <Typography
              variant="body1"
              sx={{ maxWidth: "432px", marginTop: "20px" }}
            >
              Our app is easy to use and has a simple, intuitive interface that
              makes it easy to stay in touch with your loved ones.
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#0C1B4D99", marginTop: "20px" }}
            >
              COPYRIGHT (C) {new Date().getFullYear()}. BY Chat N&apos; Rechat
            </Typography>
          </Box>
          <Box sx={{ width: "186px" }}>
            <Typography variant="subtitle1">Sitemap</Typography>
            <List disablePadding sx={{ marginTop: "20px" }}>
              <ListItem
                disableGutters
                disablePadding
                sx={{ paddingBottom: "10px" }}
              >
                <ListItemText
                  disableTypography
                  sx={{
                    color: "#0C1B4D99",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Home
                </ListItemText>
              </ListItem>
              <ListItem
                disableGutters
                disablePadding
                sx={{ paddingBottom: "10px" }}
              >
                <ListItemText
                  disableTypography
                  sx={{
                    color: "#0C1B4D99",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Features
                </ListItemText>
              </ListItem>
              <ListItem
                disableGutters
                disablePadding
                sx={{ paddingBottom: "10px" }}
              >
                <ListItemText
                  disableTypography
                  sx={{
                    color: "#0C1B4D99",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Technology
                </ListItemText>
              </ListItem>
              <ListItem
                disableGutters
                disablePadding
                sx={{ paddingBottom: "10px" }}
              >
                <ListItemText
                  disableTypography
                  sx={{
                    color: "#0C1B4D99",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  FAQ
                </ListItemText>
              </ListItem>
              <ListItem
                disableGutters
                disablePadding
                sx={{ paddingBottom: "10px" }}
              >
                <ListItemText
                  disableTypography
                  sx={{
                    color: "#0C1B4D99",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Download
                </ListItemText>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography variant="subtitle1">Tetep Terhubung</Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: "186px", marginTop: "20px" }}
            >
              Check us out on social media below:
            </Typography>
            <Stack direction="row" spacing="10px" sx={{ marginTop: "20px" }}>
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#0C1B4D1A",
                  borderRadius: "6px",
                }}
              >
                <Instagram size={24} color="#0C1B4D" />
              </Box>
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#0C1B4D1A",
                  borderRadius: "6px",
                }}
              >
                <Facebook size={24} color="#0C1B4D" />
              </Box>
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#0C1B4D1A",
                  borderRadius: "6px",
                }}
              >
                <Twitter size={24} color="#0C1B4D" />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </footer>
  );
}
