import { Box, Typography } from '@mui/material';
import Section from './Section';
import SectionHead from './SectionHead';
import Reveal from './Reveal';
import { process } from '../data/portfolio';

export default function Process() {
  return (
    <Section id="proses">
      <SectionHead title="Cara kerja" aside="Empat langkah dari ide sampai rilis" />
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4,1fr)' }, gap: 4 }}>
        {process.map((s, i) => (
          <Reveal key={s.title} delay={i * 130}>
            <Box sx={{ fontSize: 56, fontWeight: 500, color: 'primary.main', letterSpacing: '-0.03em', lineHeight: 1 }}>{i + 1}</Box>
            <Box sx={{ height: '1.5px', bgcolor: 'text.primary', my: 2 }} />
            <Typography component="h3" sx={{ fontSize: 22, fontWeight: 500, mb: 1.25 }}>{s.title}</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{s.desc}</Typography>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
