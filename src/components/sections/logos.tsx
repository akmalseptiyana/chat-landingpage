import Stack from "@mui/material/Stack";

import Cnn from "@/assets/cnn.png";
import Tirto from "@/assets/tirto.png";
import Forbes from "@/assets/forbes.png";
import Google from "@/assets/google.png";
import NewYorkTimes from "@/assets/new-york-times.png";
import Container from "@/components/ui/container";

export function Logos() {
  return (
    <section>
      <Container
        disableGutters
        sx={{
          marginTop: "75px",
        }}
      >
        <Stack
          direction={{ xs: "column", lg: "row" }}
          alignItems="center"
          justifyContent="center"
          spacing="40px"
          sx={{
            paddingY: "60px",
            backgroundColor: "primary.light",
            borderRadius: { xs: 0, lg: "15px" },
          }}
        >
          <img
            src={Cnn}
            alt="cnn"
            style={{ width: "75.15px", height: "35px" }}
            loading="lazy"
          />
          <img
            src={Tirto}
            alt="tirto.id"
            style={{ width: "128.65px", height: "35px" }}
            loading="lazy"
          />
          <img
            src={Forbes}
            alt="forbes"
            style={{ width: "133.19px", height: "35px" }}
            loading="lazy"
          />
          <img
            src={Google}
            alt="google"
            style={{ width: "101.67px", height: "35px" }}
            loading="lazy"
          />
          <img
            src={NewYorkTimes}
            alt="new york times"
            style={{ width: "258.96px", height: "35px" }}
            loading="lazy"
          />
        </Stack>
      </Container>
    </section>
  );
}
