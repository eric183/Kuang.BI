module.exports = {
	siteMetadata: {
		title: "kuang.admin",
	},
	plugins: [{
			resolve: "gatsby-source-contentful",
			options: {
				accessToken: "43K5RKnyv6J95QNpbi933maDh4S1oyZcl9uaNndIfNE",
				spaceId: "9bg4qqqqg23b",
			},
		},
		"gatsby-plugin-styled-components",
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-transformer-sharp",
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true, // defaults to false
				jsxPragma: `jsx`, // defaults to "React"
				allExtensions: true, // defaults to false
			},
		},
	],
};