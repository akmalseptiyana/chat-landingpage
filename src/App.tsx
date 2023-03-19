import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "./theme";
import { LayoutRoot } from "@/components/layout/layout-root";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Features } from "@/components/sections/features";
import { Technology } from "@/components/sections/technology";
import { Callout } from "@/components/sections/callout";
import { Faq } from "@/components/sections/faq";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutRoot>
        <Hero />
        <Logos />
        <Features />
        <Technology />
        <Callout />
        <Faq />
      </LayoutRoot>
    </ThemeProvider>
  );
}

export default App;
