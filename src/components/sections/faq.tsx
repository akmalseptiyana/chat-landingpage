import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Container from "@/components/ui/container";
import {
  AccordionCustom,
  AccordionSummaryCustom,
  AccordionDetailsCustom,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section>
      <Container sx={{ marginTop: "200px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption" color="primary.dark">
            Ask Chat N&apos; Rechat
          </Typography>
          <Typography
            variant="h2"
            color="primary.dark"
            sx={{ marginTop: "15px" }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "493px", marginX: "auto", marginTop: "10px" }}
          >
            Do you have a specific question about Chat and Rechat Apps?
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "673px", marginTop: "100px", marginX: "auto" }}>
          {FAQ.map(({ question, answer }, index) => (
            <AccordionCustom key={index}>
              <AccordionSummaryCustom
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                {question}
              </AccordionSummaryCustom>
              <AccordionDetailsCustom>{answer}</AccordionDetailsCustom>
            </AccordionCustom>
          ))}
        </Box>
      </Container>
    </section>
  );
}

const FAQ = [
  {
    question: "What is your refund policy?",
    answer:
      "You can cancel your account at any time without any additional costs. However, credit from already processed payments will be lost and will not be refunded. Read more about our subscription policy.",
  },
  {
    question: "What limitations do trial accounts have?",
    answer:
      "Features available in the trial are parallel to those of the Team plan. You can add up to 100 agents. If you want to trial Chat N&apos; Rechat in another plan, simply start a chat with us and we’ll make it happen!",
  },
  {
    question: "Where can I download Chat N&apos; Rechat?",
    answer:
      "You can download Chat N&apos; Rechat desktop apps from our Product page. We have apps available for Mac and Windows. If you need an application for a mobile device, you can download them either from the App Store or Google Play. We have apps for iPhone and Android.",
  },
];
