import Button, { ButtonProps } from "@mui/material/Button";

export function PrimaryButton({ children, sx, ...rest }: ButtonProps) {
  return (
    <Button
      sx={{
        color: "#F4F7FF",
        backgroundColor: "#4A72FF",
        fontFamily: "Source Sans Pro",
        fontSize: "18px",
        fontWeight: 600,
        textTransform: "capitalize",
        borderRadius: "6px",
        ":hover": {
          backgroundColor: "#4A72FF",
          boxShadow: "0 15px 60px rgba(74, 114, 255, .25)",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
