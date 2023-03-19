import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ArrowRightCircle, Download, User } from "lucide-react";

import { PrimaryButton } from "../ui/button/primary-button";
import { SecondaryButton } from "../ui/button/secondary-button";
import Container from "@/components/ui/container";

export function Hero() {
  return (
    <section>
      <Container>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          rowGap="160px"
          sx={{
            marginTop: "170px",
          }}
        >
          <Box sx={{ maxWidth: "497px" }}>
            <Typography variant="caption" color="primary">
              CHAT N’ RECHAT
            </Typography>
            <Typography
              variant="h1"
              color="primary.dark"
              sx={{
                fontSize: "34px",
                fontFamily: "DM Sans",
                marginTop: "15px",
              }}
            >
              Stay Connected with Friends and Family with Our Chatting App
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", lineHeight: "30px", marginTop: "15px" }}
            >
              Whether you are looking to chat with friends or family members who
              live far away or just want to stay connected with people in your
              community, our chatting app is a great way to do it. With our app,
              you can stay connected no matter where you are in the world.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing="16px"
              sx={{ marginTop: "30px" }}
            >
              <PrimaryButton
                variant="contained"
                sx={{
                  height: "53px",
                  padding: "15px 45px",
                  columnGap: "15px",
                  boxShadow: "0 15px 60px rgba(74, 114, 255, .25)",
                }}
              >
                Register
                <ArrowRightCircle size={20} />
              </PrimaryButton>
              <SecondaryButton
                variant="contained"
                sx={{
                  height: "53px",
                  padding: "15px 45px",
                  boxShadow: "none",
                }}
              >
                Learn More
              </SecondaryButton>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              divider={<Divider orientation="vertical" flexItem />}
              spacing="42px"
              sx={{ marginTop: "70px" }}
            >
              <Box sx={{ display: "flex", columnGap: "34px" }}>
                <Download size={24} color="#0C1B4D99" />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#0C1B4D99",
                      fontSize: "12px",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      letterSpacing: "1.6px",
                    }}
                  >
                    TOTAL DOWNLOAD
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "primary.dark",
                      fontSize: "24px",
                      fontFamily: "Inter",
                      fontWeight: 600,
                      marginTop: "8px",
                    }}
                  >
                    1,501,234
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", columnGap: "34px" }}>
                <User size={24} color="#0C1B4D99" />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#0C1B4D99",
                      fontSize: "12px",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      letterSpacing: "1.6px",
                    }}
                  >
                    TOTAL USERS
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "primary.dark",
                      fontSize: "24px",
                      fontFamily: "Inter",
                      fontWeight: 600,
                      marginTop: "8px",
                    }}
                  >
                    1,318,829
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Box>
            <img
              src="/hero-illustration.png"
              alt="chatting app"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              loading="lazy"
            />
          </Box>
        </Stack>
      </Container>
    </section>
  );
}
