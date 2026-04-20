/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // define here
  // url: https://i.ibb.co.com/tM9q4PCL/sakkkkkib.jpg
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        
      },

    ],
  },

  
};

export default nextConfig;

