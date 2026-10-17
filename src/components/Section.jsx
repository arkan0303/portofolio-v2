import { Box, Container } from '@mui/material';

export default function Section({ id, dark = false, children, sx }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        pt: { xs: 10, md: 14 },
        ...(dark && {
          bgcolor: 'text.primary',
          color: 'background.default',
          mt: { xs: 10, md: 14 },
          pb: { xs: 10, md: 14 },
        }),
        ...sx,
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
