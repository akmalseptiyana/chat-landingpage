import Container, { ContainerProps } from "@mui/material/Container";

export default function CustomContainer({
  sx,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1072px",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Container>
  );
}
