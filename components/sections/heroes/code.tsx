/** @jsx jsx */
import { jsx, Container, Heading, Box } from "theme-ui"
import { Divider } from "components/primitives/divider"

const HeroCode = () => (
  <Box sx={{ color: "background", bg: "text", position: "relative" }}>
    <img
      sx={{
        position: "absolute",
        top: 4,
        width: "1440px",
        left: "50%",
        transform: "translateX(-50%)",
        bg: "text",
        opacity: 0.2
      }}
      src="/images/contributors.png"
    />
    <Container
      variant="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 6
      }}
    >
      <Box
        sx={{
          maxWidth: "2xl",
          mb: ["32px", "40px"]
        }}
      >
        <Heading variant="heading.1">
          Livepeer <span sx={{ color: "primary" }}>❤</span> open source
        </Heading>
        <Divider isTransparent isVertical size={["12px", "16px", "24px"]} />
        <Heading variant="section.subtitle">
          We believe in open components for an open video infrastructure and an
          open web.
        </Heading>
      </Box>
    </Container>
  </Box>
)

export default HeroCode
