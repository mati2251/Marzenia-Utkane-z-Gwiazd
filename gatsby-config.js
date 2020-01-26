module.exports = {
	siteMetadata: {
		title: `Marzenia Utkane z Gwiazd`,
		description: `Simple website charity organization`,
	},
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: "gatsby-source-graphql",
			options: {
				typeName: "data",
				fieldName: "data",
				url: "https://api-euwest.graphcms.com/v1/ck5qidczi0gq401fla2bnh0t2/master",
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "Marzenia Utkane z Gwiazd",
				short_name: "Marzenia Utkane z Gwiazd",
				start_url: "/",
				background_color: "#ffffff",
				theme_color: "#d960a7",
				display: "standalone",
				icon: "src/resources/logo.png",
				crossOrigin: `use-credentials`,
			},
		},
	],
};
