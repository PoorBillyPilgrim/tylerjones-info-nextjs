import withMDX from "@next/mdx";

const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: isDev ? "" : "/tylerjones-info-nextjs"
  basePath: "",
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

if (isDev) {
  delete nextConfig.output;
  delete nextConfig.images.unoptimized;
}

export default withMDX()(nextConfig);
