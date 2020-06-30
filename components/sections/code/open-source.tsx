import SectionLayout from "components/layouts/section"
import { Button, Grid } from "theme-ui"
import StatusLinkCard, {
  StatusLinkCardProps
} from "components/primitives/cards/status-link"
import Divider from "components/primitives/divider"

const cards: StatusLinkCardProps[] = [
  {
    title: "Livepeer Media Server",
    description:
      "A golang developer library to enable video ingest, transcoding, streaming, and many other video related features.",
    link: {
      status: { label: "Go" },
      label: "/lms",
      href: "https://github.com/livepeer",
      isExternal: true
    }
  },
  {
    title: "Livepeer.js",
    description:
      "A suite of tools for Javascript developers to build video enabled applications, including SDKs for the Livepeer protocol, UI components, and more.",
    link: {
      status: { label: "JavaScript" },
      label: "/livepeerjs",
      href: "https://github.com/livepeer",
      isExternal: true
    }
  },
  {
    title: "Stream-tester",
    description:
      "Stream tester is a tool to measure performance and stability of Livepeer transcoding network",
    link: {
      status: { label: "Go" },
      label: "/stream-tester",
      href: "https://github.com/livepeer",
      isExternal: true
    }
  }
]

const OpenSourceSection = () => (
  <SectionLayout
    background="black"
    title="Open source projects by us"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    pushSx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      py: "160px"
    }}
    headingContainerPushSx={{ mb: 4 }}
  >
    <Button>View all</Button>
    <Divider isVertical isTransparent size={["56px", "72px"]} />
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
        <StatusLinkCard
          key={`card-${card.title}`}
          pushSx={{ height: ["300px", "342px"] }}
          isDark
          {...card}
        />
      ))}
    </Grid>
  </SectionLayout>
)

export default OpenSourceSection
