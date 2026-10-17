import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { ChevronDown } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { faqs } from '../data/portfolio';

export default function Faq() {
  return (
    <Section id="faq">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, gap: { xs: 4, md: 8 } }}>
        <Reveal>
          <Typography component="h2" sx={{ fontSize: { xs: 36, md: 48 }, lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 500 }}>Pertanyaan yang sering muncul</Typography>
          <Typography sx={{ mt: 2.5, color: 'text.secondary', fontSize: 16, lineHeight: 1.6, maxWidth: 320 }}>
            Transparansi alur kerja, ketentuan revisi, skema pembayaran, dan garansi pemeliharaan sistem.
          </Typography>
        </Reveal>
        <Reveal delay={120}>
          {faqs.map((f, i) => (
            <Accordion
              key={f.q} disableGutters square elevation={0}
              sx={{ bgcolor: 'transparent', '&::before': { display: 'none' }, borderTop: '1.5px solid', borderColor: 'text.primary', ...(i === faqs.length - 1 && { borderBottom: '1.5px solid' }) }}
            >
              <AccordionSummary
                expandIcon={<ChevronDown />}
                sx={{ px: 0, '& .MuiAccordionSummary-content': { my: 2.5 }, '& .MuiAccordionSummary-expandIconWrapper': { color: 'text.primary' }, '&:hover': { color: 'primary.main' } }}
              >
                <Typography sx={{ fontSize: { xs: 18, md: 22 }, fontWeight: 500 }}>{f.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pt: 0, pb: 3, color: 'text.secondary', lineHeight: 1.7, maxWidth: 640 }}>{f.a}</AccordionDetails>
            </Accordion>
          ))}
        </Reveal>
      </Box>
    </Section>
  );
}
