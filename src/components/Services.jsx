import { Box, Typography } from '@mui/material';
import Section from './Section';
import SectionHead from './SectionHead';
import Reveal from './Reveal';
import { services } from '../data/portfolio';
import { colors } from '../theme';

export default function Services() {
  return (
    <Section id="layanan" dark>
      <SectionHead dark title="Layanan" aside="Yang bisa saya kerjakan untuk Anda" />
      <Reveal sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: '1px', bgcolor: colors.darkLine }}>
        {services.map(({ icon: Icon, title, desc }) => (
          <Box
            key={title}
            sx={{
              bgcolor: 'text.primary', p: { xs: 3.5, md: 5 }, minHeight: 240, transition: 'background-color .35s',
              '&:hover': { bgcolor: 'primary.main' },
              '&:hover .desc': { color: '#E6E8FF' },
              '&:hover svg': { transform: 'translateY(-4px)' },
              '&:hover .ico': { color: '#fff' },
            }}
          >
            <Box className="ico" sx={{ color: colors.accentOnDark, transition: 'color .35s', '& svg': { transition: 'transform .35s' } }}>
              <Icon size={36} strokeWidth={1.5} />
            </Box>
            <Typography component="h3" sx={{ mt: 4, mb: 1.5, fontSize: { xs: 24, md: 28 }, letterSpacing: '-0.02em', fontWeight: 500 }}>{title}</Typography>
            <Typography className="desc" sx={{ color: colors.darkMuted, lineHeight: 1.6, transition: 'color .35s' }}>{desc}</Typography>
          </Box>
        ))}
      </Reveal>
    </Section>
  );
}
