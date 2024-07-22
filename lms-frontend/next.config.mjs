/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "utfs.io"
        ]
    },
    async rewrites() {
        return [
            {
                source: '/server/api',
                destination: 'https://skilltechindia.net/server/api'
            }
        ]
    }
};

export default nextConfig;
