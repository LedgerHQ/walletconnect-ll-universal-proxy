/**
 * @dev The query parameters present in the source URL is automatically
 *      added to the destination url.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      // if the source and query are matched, this redirect will be applied
      {
        source: "/wc",
        has: [{ type: "query", key: "uri" }],
        permanent: true,
        destination:
          "https://r354.adj.st/wc?adj_t=r1guxhk&adj_campaign=ledgerconnect",
      },
    ];
  },
};

module.exports = nextConfig;
