import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Container from "@/components/ui/container";

export function Callout() {
  return (
    <section>
      <Container disableGutters sx={{ marginTop: "200px" }}>
        <Box
          sx={{
            position: "relative",
            height: "538px",
            display: "flex",
            alignItems: "center",
            padding: { xs: "0 40px", lg: "0 80px" },
            backgroundColor: "primary.main",
            borderRadius: { xs: 0, lg: "20px" },
          }}
        >
          <Box>
            <Typography variant="caption" color="#fff">
              DOWNLOAD OUR APP
            </Typography>
            <Typography
              variant="h2"
              color="#fff"
              sx={{ maxWidth: "418px", marginTop: "15px" }}
            >
              Download the Chat N&apos; Rechat application on the Play Store or
              App Store.
            </Typography>
            <List
              disablePadding
              sx={{ marginTop: "10px", paddingLeft: "25px" }}
            >
              <ListItem
                disablePadding
                sx={{
                  display: "list-item",
                  listStyleType: "initial",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                <ListItemText
                  disableTypography
                  sx={{
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "26px",
                  }}
                >
                  Android Version: 5.x+
                </ListItemText>
              </ListItem>
              <ListItem
                disablePadding
                sx={{
                  display: "list-item",
                  listStyleType: "initial",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                <ListItemText
                  disableTypography
                  sx={{
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "26px",
                  }}
                >
                  iOS Version: 5.x+
                </ListItemText>
              </ListItem>
            </List>
            <Stack
              direction="row"
              flexWrap="wrap"
              gap="15px"
              sx={{ marginTop: "45px" }}
            >
              <img
                src="/google-play.png"
                alt="google play"
                style={{ width: "150px", height: "46px" }}
              />
              <img
                src="/app-store.png"
                alt="app store"
                style={{ width: "150px", height: "46px" }}
              />
            </Stack>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: { xs: 0, lg: "88px" },
              display: { xs: "none", md: "block" },
            }}
          >
            <img src="/chatting.svg" alt="chatting" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}
