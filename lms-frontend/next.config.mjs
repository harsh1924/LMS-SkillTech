/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "utfs.io"
        ]
    },
    basePath: process.env.NODE_ENV === 'production' ? 'https://skilltechindia.net' : '',
};

export default nextConfig;
