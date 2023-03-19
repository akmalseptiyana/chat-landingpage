import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Container from "@/components/ui/container";

export function Features() {
  return (
    <section>
      <Container sx={{ marginTop: "100px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption" color="primary.dark">
            FEATURES
          </Typography>
          <Typography
            variant="h2"
            color="primary.dark"
            sx={{ marginTop: "15px" }}
          >
            Why Should You Use Chat N&apos; Rechat?
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "493px", marginX: "auto", marginTop: "10px" }}
          >
            Our chatting app lets you send messages with all the features of a
            modern messenger.
          </Typography>
        </Box>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          columnGap="30px"
          rowGap="80px"
          sx={{ marginTop: "100px" }}
        >
          <Box sx={{ textAlign: "center", maxWidth: "321px" }}>
            <img
              src="/feature-1.png"
              alt="groups to keep in touch"
              style={{ width: "170px", height: "170px" }}
              loading="lazy"
            />
            <Typography
              variant="h3"
              color="primary.dark"
              sx={{
                fontFamily: "DM Sans",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "26px",
                marginTop: "40px",
              }}
            >
              Groups to keep in touch
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              Keep in touch with the groups of people that matter the most, like
              your family or coworkers. With group chats, you can share
              messages, photos, and videos.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", maxWidth: "321px" }}>
            <img
              src="/feature-2.png"
              alt="simple reliable messaging"
              style={{ width: "250.95px", height: "170px" }}
              loading="lazy"
            />
            <Typography
              variant="h3"
              color="primary.dark"
              sx={{
                fontFamily: "DM Sans",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "26px",
                marginTop: "40px",
              }}
            >
              Simple, Reliable Messaging
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              Message your friends and family for free*. WhatsApp uses your
              phone&apos;s Internet connection to send messages so you can avoid
              SMS fees.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", maxWidth: "321px" }}>
            <img
              src="/feature-3.png"
              alt="speak freely"
              style={{ width: "170px", height: "170px" }}
              loading="lazy"
            />
            <Typography
              variant="h3"
              color="primary.dark"
              sx={{
                fontFamily: "DM Sans",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "26px",
                marginTop: "40px",
              }}
            >
              Speak Freely
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              With voice calls, you can talk to your friends and family for
              free*, even if they&apos;re in another country. And with free*
              video calls, you can have face-to-face conversations.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </section>
  );
}
