/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Ensures the export process works
    // trailingSlash: true,  // Optional: Adds trailing slashes to the URLs (for directories)
    images: {unoptimized: true}
  };
  
  module.exports = nextConfig;
  