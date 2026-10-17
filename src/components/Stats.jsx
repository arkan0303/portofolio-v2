import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import useInView from '../hooks/useInView';
import Reveal from './Reveal';
import { stats } from '../data/portfolio';

function Count({ to, suffix }) {
  const [ref, inView] = useInView();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1300, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Stats() {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 8 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4,1fr)' }, borderTop: '1.5px solid', borderColor: 'text.primary' }}>
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 90} sx={{ py: 3.5, pr: 2 }}>
            <Box sx={{ fontSize: { xs: 38, md: 52 }, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {s.text ? s.text : (<><Count to={s.value} suffix={s.suffix} /> <Box component="span" sx={{ fontSize: { xs: 16, md: 20 }, color: 'text.secondary', fontWeight: 400 }}>{s.unit}</Box></>)}
            </Box>
            <Box sx={{ color: 'text.secondary', mt: 0.75, fontSize: 15 }}>{s.label}</Box>
          </Reveal>
        ))}
      </Box>
    </Container>
  );
}
