import { Box, Typography } from '@mui/material';
import Reveal from './Reveal';
import { colors, mono } from '../theme';

export default function SectionHead({ title, aside, dark = false }) {
  return (
    <Reveal
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        gap: 1.5,
        mb: { xs: 4, md: 6 },
      }}
    >
      <Typography component="h2" sx={{ fontSize: { xs: 36, md: 48 }, letterSpacing: '-0.025em', fontWeight: 500, lineHeight: 1.05 }}>
        {title}
      </Typography>
      {aside && (
        <Box component="span" sx={{ fontFamily: mono, fontSize: 13, color: dark ? colors.darkMuted : 'text.secondary' }}>
          {aside}
        </Box>
      )}
    </Reveal>
  );
}
