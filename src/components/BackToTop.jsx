import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 700);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  return (
    <Box
      component="button"
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      sx={{
        position: 'fixed', right: 24, bottom: 24, zIndex: 1000, width: 52, height: 52, border: 0, cursor: 'pointer',
        bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center',
        opacity: show ? 1 : 0, pointerEvents: show ? 'auto' : 'none', transform: show ? 'none' : 'translateY(16px)',
        transition: 'opacity .3s, transform .3s, background-color .2s', '&:hover': { bgcolor: 'text.primary' },
      }}
    >
      <ArrowUp size={22} />
    </Box>
  );
}
