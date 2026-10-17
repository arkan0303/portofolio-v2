import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { profile } from '../data/portfolio';
import { colors, mono } from '../theme';

const fieldSx = {
  '& .MuiInputBase-root': { color: '#F2F2EE' },
  '& label': { color: colors.darkMuted },
  '& label.Mui-focused': { color: colors.accentOnDark },
  '& .MuiInput-underline:before': { borderBottomColor: colors.darkLine },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#F2F2EE' },
  '& .MuiInput-underline:after': { borderBottomColor: colors.accentOnDark },
};

const links = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MessageCircle, label: 'WhatsApp', value: `+${profile.whatsapp}`, href: `https://wa.me/${profile.whatsapp}` },
  { icon: Github, label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedin.replace('https://', ''), href: profile.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const text = `Halo Arkanul, saya ${form.nama || '[nama]'}.\n\n${form.pesan}\n\nEmail saya: ${form.email}`;

  const sendEmail = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Proyek baru dari ${form.nama}`)}&body=${encodeURIComponent(text)}`;
  };
  const sendWhatsApp = () => window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');

  return (
    <Section id="kontak" dark>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 10 } }}>
        <Reveal>
          <Typography sx={{ fontFamily: mono, fontSize: 14, color: colors.accentOnDark, mb: 2 }}>Punya proyek?</Typography>
          <Typography component="h2" sx={{ fontSize: { xs: 40, md: 58 }, lineHeight: 1.02, letterSpacing: '-0.03em', fontWeight: 500 }}>
            Ceritakan kebutuhan Anda, kita bahas bersama.
          </Typography>
          <Box sx={{ mt: 5 }}>
            {links.map(({ icon: Icon, label, value, href }) => (
              <Box
                key={label} component="a" href={href} target="_blank" rel="noopener noreferrer"
                sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 2, borderBottom: `1px solid ${colors.darkLine}`, '&:hover': { color: colors.accentOnDark }, '&:hover .arr': { transform: 'translate(4px,-4px)' } }}
              >
                <Icon size={20} />
                <Box sx={{ color: colors.darkMuted, width: 90 }}>{label}</Box>
                <Box sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</Box>
                <Box className="arr" sx={{ display: 'flex', transition: 'transform .25s' }}><ArrowUpRight size={18} /></Box>
              </Box>
            ))}
          </Box>
        </Reveal>

        <Reveal delay={140}>
          <Box component="form" onSubmit={sendEmail} sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
            <TextField required variant="standard" label="Nama" value={form.nama} onChange={set('nama')} sx={fieldSx} />
            <TextField required type="email" variant="standard" label="Email" value={form.email} onChange={set('email')} sx={fieldSx} />
            <TextField required multiline minRows={4} variant="standard" label="Ceritakan kebutuhan proyek Anda" value={form.pesan} onChange={set('pesan')} sx={fieldSx} />
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 1 }}>
              <Button type="submit" variant="contained" endIcon={<Send size={17} />} sx={{ px: 3.5, py: 1.8 }}>Kirim lewat email</Button>
              <Button
                onClick={sendWhatsApp} variant="outlined" startIcon={<MessageCircle size={17} />}
                sx={{ px: 3.5, py: 1.8, color: '#F2F2EE', borderColor: '#F2F2EE', borderWidth: 1.5, '&:hover': { borderWidth: 1.5, bgcolor: '#F2F2EE', color: colors.ink, borderColor: '#F2F2EE' } }}
              >
                Kirim lewat WhatsApp
              </Button>
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Section>
  );
}
