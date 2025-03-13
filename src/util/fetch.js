import fs from "fs";

export const getNote = async slug => {
  // const realSlug = slug.replace(/\)
  const noteFile = fs.readFileSync(`src/data/notes/${slug}.mdx`);
  return noteFile;
};
