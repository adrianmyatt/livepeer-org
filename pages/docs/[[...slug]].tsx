/** @jsx jsx */

import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import globby from "globby";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import * as z from "zod";
import DocsNav from "components/sections/docs/docs-nav";
import DocsCard from "components/sections/docs/docs-card";
import { jsx, useColorMode } from "theme-ui";

type Params = { slug?: string[] };

const Docs = ({
  mdx,
  meta,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const content = hydrate(mdx, { components: { DocsCard } });
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div sx={{ width: "100vw", backgroundColor: "docs.background" }}>
      <DocsNav setColorMode={setColorMode} colorMode={colorMode} />
      <div
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          px: "80px",
          my: "60px",
        }}>
        <div
          sx={{
            height: "100vh",
            width: "218px",
            backgroundColor: "docs.text",
            display: ["none", null, null, "flex"],
          }}>
          menu
        </div>
        <div sx={{ width: "100%", maxWidth: "730px", color: "docs.text" }}>
          {content}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const filePaths = await globby("docs/**/*");

  const paths = filePaths.map((g) => {
    const clean = g
      .replace("docs/", "")
      .replace(".mdx", "")
      .split("/")
      .filter((p) => p !== "index");
    return { params: { slug: clean } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<Params>) => {
  const filePaths = await globby("docs/**/*");

  const fullSlug = `docs/${params?.slug?.join("/") ?? "index"}.mdx`;
  const fullSlugWithIndexEnding = `docs/${params?.slug?.join("/")}/index.mdx`;

  const filePath = filePaths.find(
    (filePath) => filePath === fullSlug || filePath === fullSlugWithIndexEnding
  );

  if (!filePath) {
    return { notFound: true };
  }

  const source = fs.readFileSync(path.join(process.cwd(), filePath));
  const { content, data } = matter(source);

  // Runtime validation to make sure we have the correct front matter data in our .mdx files
  const dataSchema = z.object({
    title: z.string(),
  });
  const parsedData = dataSchema.parse(data);

  const mdxSource = await renderToString(content, {
    components: {},
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      mdx: mdxSource,
      meta: parsedData,
    },
    revalidate: 1,
  };
};

export default Docs;
