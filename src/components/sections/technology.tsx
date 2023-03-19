import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import SocketIo from "@/assets/socket-io.svg";
import Postgresql from "@/assets/postgresql.svg";
import Express from "@/assets/express.svg";
import Container from "@/components/ui/container";

export function Technology() {
  return (
    <section>
      <Container sx={{ marginTop: "200px" }}>
        <Stack direction={{ xs: "column", lg: "row" }} spacing="30px">
          <Box>
            <img
              src="/chatting-app.png"
              alt="chatting app"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              loading="lazy"
            />
          </Box>
          <Box sx={{ flex: "auto", maxWidth: "528px" }}>
            <Typography variant="caption" color="primary.dark">
              TECHNOLOGY USED
            </Typography>
            <Typography
              variant="h2"
              color="primary.dark"
              sx={{ marginTop: "15px" }}
            >
              The Technology We Use In This Application
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              Our chat application uses various technologies to enable real-time
              communication between users. Some of the technologies used in chat
              applications include:
            </Typography>
            <List
              disablePadding
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "30px",
                marginTop: "40px",
              }}
            >
              <ListItem
                disablePadding
                alignItems="flex-start"
                sx={{ columnGap: "25px" }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "6px",
                    backgroundColor: "#0C1B4D1A",
                  }}
                >
                  <img
                    src={SocketIo}
                    alt="angry"
                    style={{ width: "32px", height: "32px" }}
                    loading="lazy"
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Socket.IO</Typography>
                  <Typography variant="body1">
                    In most cases, the connection will be established with
                    WebSocket, providing a low-overhead communication channel
                    between the server and the client.
                  </Typography>
                </Box>
              </ListItem>
              <ListItem
                disablePadding
                alignItems="flex-start"
                sx={{ columnGap: "25px" }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "6px",
                    backgroundColor: "#0C1B4D1A",
                  }}
                >
                  <img
                    src={Postgresql}
                    alt="koala bears"
                    style={{ width: "32px", height: "32px" }}
                    loading="lazy"
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle1">PostgreSQL</Typography>
                  <Typography variant="body1">
                    PostgreSQL is a powerful, open source object-relational
                    database system with over 35 years of active development
                    that has earned it a strong reputation for reliability,
                    feature robustness, and performance.
                  </Typography>
                </Box>
              </ListItem>
              <ListItem
                disablePadding
                alignItems="flex-start"
                sx={{ columnGap: "25px" }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "6px",
                    backgroundColor: "#0C1B4D1A",
                  }}
                >
                  <img
                    src={Express}
                    alt="sleepy"
                    style={{ width: "50px", height: "50px" }}
                    loading="lazy"
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle1">Express</Typography>
                  <Typography variant="body1">
                    Express is a minimal and flexible Node.js web application
                    framework that provides a robust set of features for web and
                    mobile applications.
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Container>
    </section>
  );
}
