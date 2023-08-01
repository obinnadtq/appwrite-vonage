/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PROJECT_ID: process.env.PROJECT_ID,
        ENDPOINT: process.env.ENDPOINT
    }
}

module.exports = nextConfig
