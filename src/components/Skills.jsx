import { Box, Typography } from '@mui/material';
import {
  LayoutDashboard,
  Globe,
  Smartphone,
  Server,
  Code2,
} from 'lucide-react';
import Section from './Section';
import SectionHead from './SectionHead';
import Reveal from './Reveal';
import { skillGroups } from '../data/portfolio';
import { colors, mono } from '../theme';

// Metadata ikon SVG resmi & tag peran untuk setiap teknologi
const techMeta = {
  // Frontend
  'React JS': {
    icon: '/icons/react.svg',
    tag: 'UI Library & Component',
  },
  'React': {
    icon: '/icons/react.svg',
    tag: 'UI Library & Component',
  },
  'Next.js': {
    icon: '/icons/nextjs.svg',
    tag: 'App Router, SSR & SSG',
  },
  'TypeScript': {
    icon: '/icons/typescript.svg',
    tag: 'Type Safety & Scale',
  },
  'JavaScript': {
    icon: '/icons/javascript.svg',
    tag: 'Modern ES6+ Logic',
  },
  'Material UI': {
    icon: '/icons/materialui.svg',
    tag: 'Design System & UI Kit',
  },
  'Bootstrap': {
    icon: '/icons/bootstrap.svg',
    tag: 'Responsive Grid System',
  },
  'Tailwind CSS': {
    icon: '/icons/tailwindcss.svg',
    tag: 'Utility-first Styling',
  },

  // Backend
  'Express': {
    icon: '/icons/express.svg',
    tag: 'Node.js REST Services',
  },
  'Golang': {
    icon: '/icons/golang.svg',
    tag: 'High Concurrency & API',
  },
  'PHP': {
    icon: '/icons/php.svg',
    tag: 'Server-side Scripting',
  },
  'Laravel': {
    icon: '/icons/laravel.svg',
    tag: 'Full MVC & Artisan',
  },
  'Node.js': {
    icon: '/icons/nodejs.svg',
    tag: 'V8 Runtime Engine',
  },

  // Database & Storage
  'Prisma': {
    icon: '/icons/prisma.svg',
    tag: 'Type-safe Schema ORM',
  },
  'Supabase': {
    icon: '/icons/supabase.svg',
    tag: 'BaaS, Auth & Realtime',
  },
  'MySQL': {
    icon: '/icons/mysql.svg',
    tag: 'Relational DB Engine',
  },
  'PostgreSQL': {
    icon: '/icons/postgresql.svg',
    tag: 'Advanced Enterprise SQL',
  },

  // Yang saya bangun (Deliverables / Solusi)
  'Sistem informasi': {
    lucide: LayoutDashboard,
    tag: 'Dashboard, ERP & Admin Portal',
  },
  'Aplikasi web': {
    lucide: Globe,
    tag: 'SaaS, Web Apps & Portal Klien',
  },
  'Aplikasi mobile': {
    lucide: Smartphone,
    tag: 'Cross-platform Android & iOS',
  },
  'REST API': {
    lucide: Server,
    tag: 'Clean Architecture & Microservices',
  },
};

const categoryMeta = {
  Frontend: {
    code: '01 / CLIENT-SIDE',
    desc: 'Antarmuka cepat, interaktif, & responsif',
    status: 'Reactive UI & State Management',
  },
  Backend: {
    code: '02 / SERVER & API',
    desc: 'Logika bisnis terstruktur & efisien',
    status: 'High Performance & Clean Code',
  },
  Database: {
    code: '03 / DATA & STORAGE',
    desc: 'Manajemen data aman & konsisten',
    status: 'ACID, Relational & Real-time',
  },
  'Yang saya bangun': {
    code: '04 / DELIVERABLES',
    desc: 'Solusi siap rilis untuk kebutuhan bisnis',
    status: 'Production Ready & Scalable',
  },
};

export default function Skills() {
  return (
    <Section id="keahlian">
      <SectionHead
        title="Keahlian & Teknologi"
        aside="Stack teruji dan kapabilitas menyeluruh untuk membangun produk siap pakai"
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: { xs: 3, md: 3.5 },
          alignItems: 'stretch',
        }}
      >
        {skillGroups.map((g, i) => {
          const cat = categoryMeta[g.title] || {
            code: `0${i + 1} / STACK`,
            desc: 'Teknologi dan alat pengembangan',
            status: 'Production Ready',
          };

          return (
            <Reveal
              key={g.title}
              delay={i * 90}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Box
                sx={{
                  bgcolor: '#FFFFFF',
                  border: '1.5px solid',
                  borderColor: 'text.primary',
                  boxShadow: '4px 4px 0px #111214',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
                  '&:hover': {
                    transform: 'translate(-3px, -3px)',
                    boxShadow: '7px 7px 0px #2438E8',
                    borderColor: 'primary.main',
                  },
                }}
              >
                {/* Header Kartu Kategori */}
                <Box
                  sx={{
                    p: { xs: 2.25, md: 2.5 },
                    pb: 2,
                    borderBottom: '1.5px solid',
                    borderColor: 'text.primary',
                    bgcolor: colors.paper,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        fontFamily: mono,
                        fontSize: 11,
                        fontWeight: 600,
                        color: 'primary.main',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {cat.code}
                    </Box>
                    <Box
                      sx={{
                        fontFamily: mono,
                        fontSize: 11,
                        px: 1,
                        py: 0.25,
                        bgcolor: '#FFFFFF',
                        border: '1px solid',
                        borderColor: 'text.primary',
                        fontWeight: 500,
                      }}
                    >
                      {g.items.length} item
                    </Box>
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      fontSize: { xs: 22, md: 24 },
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      color: 'text.primary',
                    }}
                  >
                    {g.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12.5,
                      color: 'text.secondary',
                      mt: 0.5,
                      lineHeight: 1.4,
                    }}
                  >
                    {cat.desc}
                  </Typography>
                </Box>

                {/* Daftar Item / Teknologi */}
                <Box
                  sx={{
                    p: { xs: 2, md: 2.25 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.25,
                    flex: 1,
                  }}
                >
                  {g.items.map((it) => {
                    const meta = techMeta[it] || { tag: 'Teknologi Teruji' };
                    const LucideIcon = meta.lucide;

                    return (
                      <Box
                        key={it}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 1.25,
                          border: '1px solid',
                          borderColor: colors.line,
                          bgcolor: '#FFFFFF',
                          transition: 'all .22s ease',
                          cursor: 'default',
                          '&:hover': {
                            borderColor: 'primary.main',
                            bgcolor: 'rgba(36, 56, 232, 0.04)',
                            transform: 'translateX(4px)',
                            '& .tech-icon-box': {
                              borderColor: 'primary.main',
                              transform: 'scale(1.08)',
                            },
                          },
                        }}
                      >
                        {/* Box Ikon */}
                        <Box
                          className="tech-icon-box"
                          sx={{
                            width: 38,
                            height: 38,
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: LucideIcon ? 'primary.main' : '#F9F9F7',
                            color: LucideIcon ? '#FFFFFF' : 'inherit',
                            border: '1px solid',
                            borderColor: colors.line,
                            transition: 'all .22s ease',
                          }}
                        >
                          {LucideIcon ? (
                            <LucideIcon size={19} strokeWidth={2} />
                          ) : meta.icon ? (
                            <Box
                              component="img"
                              src={meta.icon}
                              alt={it}
                              loading="lazy"
                              sx={{
                                width: 22,
                                height: 22,
                                objectFit: 'contain',
                              }}
                            />
                          ) : (
                            <Code2 size={19} strokeWidth={2} />
                          )}
                        </Box>

                        {/* Nama & Tag */}
                        <Box sx={{ minWidth: 0, flex: 1 }}>
                          <Typography
                            sx={{
                              fontSize: 15,
                              fontWeight: 600,
                              lineHeight: 1.25,
                              color: 'text.primary',
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {it}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: mono,
                              fontSize: 11,
                              color: 'text.secondary',
                              mt: 0.25,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {meta.tag}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>

                {/* Footer Kartu Kategori */}
                <Box
                  sx={{
                    px: 2.25,
                    py: 1.25,
                    borderTop: '1px solid',
                    borderColor: colors.line,
                    bgcolor: colors.paper,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: mono,
                      fontSize: 11,
                      color: 'text.secondary',
                    }}
                  >
                    {cat.status}
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          );
        })}
      </Box>
    </Section>
  );
}
