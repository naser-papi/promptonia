/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		externalDir:true,
		appDir: true,
		serverComponentsExternalPackages: ["mongoose"],
	},
	images: {
		domains: ['lh3.googleusercontent.com','media.licdn.com'],
	},
	webpack(config) {
		config.experiments = {
			...config.experiments,
			topLevelAwait: true,
		}
		return config
	}
}

module.exports = nextConfig
