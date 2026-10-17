import { Box, Typography } from '@mui/material';
import Section from './Section';
import SectionHead from './SectionHead';
import Reveal from './Reveal';
import { experience } from '../data/portfolio';
import { mono } from '../theme';

export default function Experience() {
  return (
    <Section id="pengalaman">
      <SectionHead
        title="Pengalaman"
        aside="Rekam jejak pengerjaan proyek dan pengembangan sistem sejak 2023"
      />
      {experience.map((e, i) => (
        <Reveal
          key={e.role}
          delay={i * 100}
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, gap: 3, py: 4, borderTop: '1.5px solid', borderColor: 'text.primary', ...(i === experience.length - 1 && { borderBottom: '1.5px solid' }) }}
        >
          <Box sx={{ fontFamily: mono, fontSize: 14, color: 'text.secondary' }}>{e.period}</Box>
          <Box>
            <Typography component="h3" sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 500, letterSpacing: '-0.02em' }}>{e.role}</Typography>
            <Box sx={{ color: 'primary.main', mt: 0.75, mb: 2 }}>{e.org}</Box>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: 'text.secondary', lineHeight: 1.7, maxWidth: 600 }}>
              {e.points.map((p) => (<li key={p}>{p}</li>))}
            </Box>
          </Box>
        </Reveal>
      ))}
    </Section>
  );
}
