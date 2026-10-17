import { Box } from '@mui/material';
import useInView from '../hooks/useInView';

// Muncul halus saat di-scroll. Dipakai hemat: hanya untuk blok utama.
export default function Reveal({ children, delay = 0, y = 24, sx, ...rest }) {
  const [ref, inView] = useInView();
  const ease = 'cubic-bezier(.2,.7,.2,1)';
  return (
    <Box
      ref={ref}
      {...rest}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : `translateY(${y}px)`,
        transition: `opacity .7s ${ease} ${delay}ms, transform .7s ${ease} ${delay}ms`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
