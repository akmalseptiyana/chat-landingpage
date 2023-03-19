import * as React from "react";
import { styled } from "@mui/material/styles";
import Accordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import AccordionDetails, {
  AccordionDetailsProps,
} from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ChevronDown } from "lucide-react";

const AccordionCustom = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(() => ({
  padding: "0px",
  background: "transparent",
  "&:not(:last-child)": {
    marginBottom: "15px",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummaryCustom = styled((props: AccordionSummaryProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <AccordionSummary
      expandIcon={
        <ChevronDown size={24} color={`${expanded ? "#fff" : "#0C1B4D"}`} />
      }
      onClick={handleExpand}
      sx={{
        backgroundColor: `${expanded ? "primary.main" : "transparent"}`,
        borderBottom: `1px solid ${expanded ? "#ffffff1a" : "#0C1B4D1A"}`,
      }}
      {...props}
    >
      <Typography
        variant="subtitle1"
        color={`${expanded ? "#fff" : "primary.dark"}`}
      >
        {props.children}
      </Typography>
    </AccordionSummary>
  );
})(() => ({
  padding: "20px 30px",
  borderRadius: "6px 6px 0 0",
}));

const AccordionDetailsCustom = styled((props: AccordionDetailsProps) => (
  <AccordionDetails {...props}>
    <Typography variant="body1" color="#fff">
      {props.children}
    </Typography>
  </AccordionDetails>
))(({ theme }) => ({
  padding: "20px 30px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "0 0 6px 6px",
}));

export { AccordionCustom, AccordionSummaryCustom, AccordionDetailsCustom };
