import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import { techs } from '../data/portfolio';
import { mono } from '../theme';

const scroll = keyframes`from{transform:translateX(0)}to{transform:translateX(-50%)}`;

export default function TechMarquee() {
  const items = [...techs, ...techs];
  return (
    <Box
      aria-hidden="true"
      sx={{ bgcolor: 'text.primary', color: 'background.default', overflow: 'hidden', py: 2, mt: { xs: 9, md: 13 }, '&:hover .track': { animationPlayState: 'paused' } }}
    >
      <Box className="track" sx={{ display: 'flex', width: 'max-content', animation: `${scroll} 36s linear infinite` }}>
        {items.map((t, i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'center', fontFamily: mono, fontSize: 15, whiteSpace: 'nowrap' }}>
            <Box sx={{ px: 3.5 }}>{t}</Box>
            <Box sx={{ width: 6, height: 6, bgcolor: 'primary.main', transform: 'rotate(45deg)' }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
