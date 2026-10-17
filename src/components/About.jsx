import { Box, Typography } from '@mui/material';
import Section from './Section';
import Reveal from './Reveal';
import { about } from '../data/portfolio';

export default function About() {
  return (
    <>
      <Section id="tentang">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 8 } }}>
          <Reveal>
            <Typography component="h2" sx={{ fontSize: { xs: 36, md: 48 }, lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 500 }}>
              {about.title}
            </Typography>
          </Reveal>
          <Reveal delay={120}>
            <Typography sx={{ fontSize: { xs: 18, md: 20 }, lineHeight: 1.6, color: 'text.secondary', mb: 2.5 }}>{about.paragraphs[0]}</Typography>
            <Typography sx={{ fontSize: 17, lineHeight: 1.6, color: 'text.secondary', mb: 4 }}>{about.paragraphs[1]}</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3,1fr)' }, gap: 2 }}>
              {about.principles.map((p) => (
                <Box key={p} sx={{ borderTop: '1.5px solid', borderColor: 'text.primary', pt: 1.5, fontWeight: 500 }}>{p}</Box>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Section>

      <Reveal sx={{ mt: { xs: 8, md: 10 } }}>
        <Box
          sx={{
            position: 'relative', height: { xs: 280, md: 400 }, backgroundImage: `url(${about.band})`,
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: { xs: 'scroll', md: 'fixed' },
            display: 'flex', alignItems: 'flex-end',
          }}
        >
          <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(17,18,20,.58)' }} />
          <Typography sx={{ position: 'relative', color: '#F2F2EE', p: { xs: 3, md: 6 }, fontSize: { xs: 26, md: 40 }, letterSpacing: '-0.02em', maxWidth: 720, lineHeight: 1.15, fontWeight: 500 }}>
            {about.quote}
          </Typography>
        </Box>
      </Reveal>
    </>
  );
}
