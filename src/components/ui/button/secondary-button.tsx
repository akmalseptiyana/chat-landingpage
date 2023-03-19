import Button, { ButtonProps } from "@mui/material/Button";

export function SecondaryButton({ children, sx, ...rest }: ButtonProps) {
  return (
    <Button
      sx={{
        color: "#4A72FF",
        backgroundColor: "#4A72FF0D",
        fontFamily: "Source Sans Pro",
        fontSize: "18px",
        fontWeight: 600,
        textTransform: "capitalize",
        borderRadius: "6px",
        ":hover": { backgroundColor: "#4A72FF0D", boxShadow: "none" },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
