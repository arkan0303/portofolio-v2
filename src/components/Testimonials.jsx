import { Box, Typography } from '@mui/material';
import { Quote } from 'lucide-react';
import Section from './Section';
import SectionHead from './SectionHead';
import Reveal from './Reveal';
import { testimonials } from '../data/portfolio';
import { colors } from '../theme';

export default function Testimonials() {
  return (
    <Section id="testimoni">
      <SectionHead
        title="Kata klien"
        aside="Ulasan dan kepuasan dari rekanan serta pemilik bisnis"
      />
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
        {testimonials.map((t, i) => (
          <Reveal
            key={i}
            delay={i * 120}
            sx={{
              bgcolor: '#FFFFFF',
              border: '1.5px solid',
              borderColor: 'text.primary',
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 4,
              minHeight: 280,
              boxShadow: '3px 3px 0px #111214',
              transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
              '&:hover': {
                transform: 'translate(-3px, -3px)',
                boxShadow: '6px 6px 0px #2438E8',
                borderColor: 'primary.main',
              },
            }}
          >
            <Box>
              <Box sx={{ color: 'primary.main', mb: 2 }}><Quote size={30} strokeWidth={1.5} /></Box>
              <Typography sx={{ fontSize: 21, lineHeight: 1.4, letterSpacing: '-0.01em' }}>{t.quote}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 44, height: 44, bgcolor: colors.block, display: 'grid', placeItems: 'center', fontWeight: 700 }}>{t.name.replace(/[\[\]]/g, '').charAt(0)}</Box>
              <Box sx={{ fontSize: 15 }}>
                <Box sx={{ fontWeight: 700 }}>{t.name}</Box>
                <Box sx={{ color: 'text.secondary' }}>{t.role}</Box>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
