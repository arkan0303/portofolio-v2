import { Box, Chip, Typography } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";
import { colors, mono } from "../theme";

export default function Projects() {
  return (
    <Section id="proyek">
      <SectionHead
        title="Proyek pilihan"
        aside="Sebagian sistem dan website yang saya bangun dengan berbagai stack dan kebutuhan klien."
      />
      {projects.map((p, i) => (
        <Reveal
          key={p.title}
          component="a"
          href={p.link}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: 6 },
            py: 4,
            borderTop: "1.5px solid",
            borderColor: "text.primary",
            ...(i === projects.length - 1 && { borderBottom: "1.5px solid" }),
            "&:hover .shot img": { transform: "scale(1.06)" },
            "&:hover .go": {
              bgcolor: "primary.main",
              color: "#fff",
              transform: "rotate(45deg)",
            },
          }}
        >
          <Box
            className="shot"
            sx={{
              position: "relative",
              overflow: "hidden",
              height: { xs: 240, md: 350 },
              bgcolor: colors.block,
              order: { md: i % 2 ? 2 : 1 },
            }}
          >
            <Box
              component="img"
              src={p.image}
              alt={`Tampilan ${p.title}`}
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform .8s cubic-bezier(.2,.7,.2,1)",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 3,
              order: { md: i % 2 ? 1 : 2 },
            }}
          >
            <Box>
              <Box
                sx={{ fontFamily: mono, fontSize: 13, color: "primary.main" }}
              >
                {p.type} · {p.year}
              </Box>
              <Typography
                component="h3"
                sx={{
                  mt: 1.5,
                  fontSize: { xs: 30, md: 38 },
                  letterSpacing: "-0.02em",
                  fontWeight: 500,
                  lineHeight: 1.1,
                }}
              >
                {p.title}
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  color: "text.secondary",
                  lineHeight: 1.6,
                  fontSize: 17,
                  maxWidth: 460,
                }}
              >
                {p.desc}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {p.stack.map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    variant="outlined"
                    size="small"
                    sx={{
                      fontFamily: mono,
                      borderColor: "text.primary",
                      fontSize: 13,
                    }}
                  />
                ))}
              </Box>
              <Box
                className="go"
                sx={{
                  width: 48,
                  height: 48,
                  flexShrink: 0,
                  border: "1.5px solid",
                  borderColor: "text.primary",
                  display: "grid",
                  placeItems: "center",
                  transition: "all .35s",
                }}
              >
                <ArrowUpRight size={22} />
              </Box>
            </Box>
          </Box>
        </Reveal>
      ))}
    </Section>
  );
}
