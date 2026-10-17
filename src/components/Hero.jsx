import { Box, Button, Container, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { ArrowUpRight, Download } from "lucide-react";
import { hero, profile } from "../data/portfolio";
import { colors, mono } from "../theme";

const rise = keyframes`from{transform:translateY(112%)}to{transform:translateY(0)}`;
const fadeUp = keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}`;
const draw = keyframes`from{background-size:0% .16em}to{background-size:100% .16em}`;
const ping = keyframes`0%{transform:scale(1);opacity:.6}100%{transform:scale(2.8);opacity:0}`;
const float = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}`;
const slideIn = keyframes`from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0 0 0 0)}`;

const ease = "cubic-bezier(.2,.7,.2,1)";

export default function Hero() {
  const words = hero.headline.split(" ");

  return (
    <Box id="top" component="section" sx={{ pt: { xs: 13, md: 17 } }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.15fr .85fr" },
          gap: { xs: 7, md: 9 },
          alignItems: "end",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              mb: 4,
              fontFamily: mono,
              fontSize: 13,
              color: "text.secondary",
              animation: `${fadeUp} .7s ${ease} both`,
            }}
          >
            <Box sx={{ position: "relative", width: 9, height: 9 }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  bgcolor: "#1F9D55",
                  animation: `${ping} 2s ease-out infinite`,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  bgcolor: "#1F9D55",
                }}
              />
            </Box>
            {hero.status}
          </Box>

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: 46, sm: 64, md: 78 },
              lineHeight: 1,
              letterSpacing: "-0.035em",
              fontWeight: 500,
            }}
          >
            {words.map((w, i) => {
              const hl = hero.highlight.includes(w);
              return (
                <Box
                  key={i}
                  component="span"
                  sx={{
                    display: "inline-block",
                    overflow: "hidden",
                    verticalAlign: "top",
                    pb: "0.1em",
                    mr: "0.24em",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      animation: `${rise} .95s ${ease} ${0.1 + i * 0.07}s both`,
                      ...(hl && {
                        color: "primary.main",
                        backgroundImage: `linear-gradient(${colors.accentSoft},${colors.accentSoft})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "0 94%",
                        backgroundSize: "100% .16em",
                        animation: `${rise} .95s ${ease} ${0.1 + i * 0.07}s both, ${draw} .9s ${ease} 1.2s both`,
                      }),
                    }}
                  >
                    {w}
                  </Box>
                </Box>
              );
            })}
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontSize: { xs: 17, md: 19 },
              lineHeight: 1.6,
              color: "text.secondary",
              maxWidth: 520,
              animation: `${fadeUp} .8s ${ease} 1s both`,
            }}
          >
            {hero.intro}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 5,
              flexWrap: "wrap",
              animation: `${fadeUp} .8s ${ease} 1.15s both`,
            }}
          >
            <Button
              href="#proyek"
              variant="contained"
              endIcon={<ArrowUpRight size={18} />}
              sx={{
                px: 3.5,
                py: 1.9,
                "& svg": { transition: "transform .25s" },
                "&:hover svg": { transform: "translate(3px,-3px)" },
              }}
            >
              Lihat proyek
            </Button>
            <Button
              href={profile.cv}
              variant="outlined"
              startIcon={<Download size={18} />}
              sx={{
                px: 3.5,
                py: 1.9,
                color: "text.primary",
                borderColor: "text.primary",
                borderWidth: 1.5,
                "&:hover": {
                  borderWidth: 1.5,
                  bgcolor: "text.primary",
                  color: "background.default",
                  borderColor: "text.primary",
                },
              }}
            >
              Unduh CV
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            mr: { xs: 2, md: 0 },
            animation: `${fadeUp} 1s ${ease} .3s both`,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              transform: "translate(16px,16px)",
              bgcolor: "primary.main",
            }}
          />
          <Box
            sx={{
              position: "relative",
              aspectRatio: "4/5",
              maxHeight: 560,
              width: "100%",
              overflow: "hidden",
              bgcolor: colors.block,
              animation: `${slideIn} 1.2s ${ease} .4s both`,
              "&:hover img": { filter: "none", transform: "scale(1.04)" },
            }}
          >
            <Box
              component="img"
              src={profile.photo}
              alt={`Foto ${profile.name}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(1) contrast(1.05)",
                transition: "filter .6s, transform .8s",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 20,
              right: -12,
              bgcolor: "text.primary",
              color: "background.default",
              p: "14px 18px",
              fontSize: 14,
              lineHeight: 1.5,
              maxWidth: 210,
              zIndex: 2,
              animation: `${float} 5s ease-in-out infinite`,
            }}
          >
            <Box
              sx={{
                fontFamily: mono,
                fontSize: 12,
                color: colors.accentOnDark,
                mb: 0.5,
              }}
            >
              Stack utama
            </Box>
            React · Next.js · Golang · Laravel
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: -14,
              bottom: 28,
              bgcolor: "background.default",
              border: "1.5px solid",
              borderColor: "text.primary",
              p: "10px 16px",
              fontSize: 14,
              fontWeight: 500,
              zIndex: 2,
              animation: `${float} 6s ease-in-out 1s infinite`,
            }}
          >
            3+ tahun pengalaman
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
