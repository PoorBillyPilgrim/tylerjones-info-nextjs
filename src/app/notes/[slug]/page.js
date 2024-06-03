import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import Head from "next/head";
import Notes from "@/layouts/layout";
import { getNote } from "@/util/fetch";
import Header from "@/components/notes/Header";

// export async function generateStaticParams() {
//   const posts = await getAllArticles();

//   return posts.map((post) => ({
//       slug: post.slug,
//   }));
// }

export default async function NotePage({ params }) {
  const file = await getNote(params.slug);
  const { frontmatter, content } = await compileMDX({
    source: file,
    options: { parseFrontmatter: true },
  });
  return (
    <Notes>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Header title={frontmatter.title} />
      {content}
    </Notes>
  );
}
