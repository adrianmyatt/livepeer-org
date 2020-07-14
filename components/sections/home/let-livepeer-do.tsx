import SectionLayout from "components/layouts/section"
import { Grid } from "theme-ui"
import IconCard, { IconCardProps } from "components/primitives/cards/icon"
import { FiUserCheck, FiCode, FiBriefcase } from "react-icons/fi"

const cards: IconCardProps[] = [
  {
    icon: <FiUserCheck />,
    title: "Participants",
    description:
      "Join thousands of participants and LPT tokenholders enabling affordable video streaming at scale in exchange for fees.  Provide GPU hardware infrastructure, contribute code, or delegate work with LPT.",
    linkProps: { link: { label: "/participants", href: "/participants" } },
    isClickable: true
  },
  {
    icon: <FiCode />,
    title: "Video Devs",
    description:
      "Discover APIs, guides, resources, and tools for adding live or on-demand video to your project using the Livepeer public network.",
    linkProps: { link: { label: "/developers", href: "/developers" } },
    isClickable: true
  },
  {
    icon: <FiBriefcase />,
    title: "Enterprise",
    description:
      "Get access to a hosted, enterprise-grade live and VOD video product offering instant, scaled and reliable access to the Livepeer network.",
    linkProps: {
      link: {
        label: "livepeer.com",
        href: "https://livepeer.com",
        isExternal: true
      }
    },
    isClickable: true
  }
]

const LetLivepeerDoSection = () => (
  <SectionLayout
    titleLabel="Get Started"
    title="What role will you play in the Livepeer network?"
    subtitle="Jump in by choosing the option that best describes your interest:"
    background="muted"
  >
    <Grid
      gap={4}
      sx={{
        gridTemplateColumns: [
          "sm",
          null,
          null,
          null,
          ({ sizes: { sm } }) => `repeat(3, ${sm})`
        ],
        mx: "auto",
        justifyContent: "center",
        position: "relative"
      }}
    >
      {cards.map((card) => (
        <IconCard key={`card-${card.title}`} {...card} />
      ))}
    </Grid>
  </SectionLayout>
)

export default LetLivepeerDoSection
