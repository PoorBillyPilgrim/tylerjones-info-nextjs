import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { compileMDX } from "next-mdx-remote/rsc";

export const getNote = async slug => {
  // const realSlug = slug.replace(/\)
  const noteFile = fs.readFileSync(`src/data/notes/${slug}.mdx`);
  return noteFile;
  //   const { frontmatter, content } = await compileMDX({
  //     source: noteFile,
  //     options: { parseFrontmatter: true },
  //   });

  //   return { meta: { ...frontmatter, slug }, content };
};
