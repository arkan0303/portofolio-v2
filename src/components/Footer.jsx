import { Box, Container } from '@mui/material';
import { profile } from '../data/portfolio';
import { colors, mono } from '../theme';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'text.primary', color: colors.darkMuted, borderTop: `1px solid ${colors.darkLine}`, py: 4, fontFamily: mono, fontSize: 13 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1.5 }}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Dibangun dengan Next.js, Material UI, dan Lucide</span>
      </Container>
    </Box>
  );
}
