import { useEffect, useState } from 'react';
import { Box, Button, Container, Drawer, IconButton } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { nav, profile } from '../data/portfolio';
import { colors } from '../theme';

const linkSx = {
  position: 'relative',
  fontSize: 15,
  py: 0.5,
  '&::after': {
    content: '""', position: 'absolute', left: 0, right: 0, bottom: 0, height: '1.5px',
    bgcolor: 'primary.main', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform .3s ease',
  },
  '&:hover::after': { transform: 'scaleX(1)' },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setScrolled(h.scrollTop > 20);
      setProgress((h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1)) * 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100,
        bgcolor: scrolled ? 'rgba(242,242,238,.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${scrolled ? colors.line : 'transparent'}`,
        transition: 'background-color .3s, border-color .3s',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <Box component="a" href="#top" sx={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.01em' }}>
          {profile.name}<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
        </Box>

        <Box component="nav" aria-label="Navigasi utama" sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {nav.map((n) => (
            <Box key={n.href} component="a" href={n.href} sx={linkSx}>{n.label}</Box>
          ))}
        </Box>

        <Button
          href="#kontak"
          variant="contained"
          sx={{ display: { xs: 'none', md: 'inline-flex' }, bgcolor: 'text.primary', color: 'background.default', px: 3, py: 1.25, '&:hover': { bgcolor: 'primary.main' } }}
        >
          Hubungi saya
        </Button>

        <IconButton aria-label="Buka menu" onClick={() => setOpen(true)} sx={{ display: { md: 'none' }, color: 'text.primary' }}>
          <Menu size={26} />
        </IconButton>
      </Container>

      <Box sx={{ position: 'absolute', left: 0, bottom: -1, height: 2, width: `${progress}%`, bgcolor: 'primary.main' }} />

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: '82%', maxWidth: 360, p: 3, bgcolor: 'background.default' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton aria-label="Tutup menu" onClick={() => setOpen(false)}><X size={26} /></IconButton>
        </Box>
        <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
          {[...nav, { label: 'Kontak', href: '#kontak' }].map((n) => (
            <Box
              key={n.href} component="a" href={n.href} onClick={() => setOpen(false)}
              sx={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em', py: 1.5, borderBottom: `1px solid ${colors.line}` }}
            >
              {n.label}
            </Box>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}
