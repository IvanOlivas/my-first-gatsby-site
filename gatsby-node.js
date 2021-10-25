const fetch = require('node-fetch');
require('dotenv').config();

async function getData() {
	const data = JSON.stringify({
		query: `{
			allWpPost {
				edges {
					node {
						id
						slug
					}
				}
			}
		}`,
	});
  
	const postTemplate = path.resolve(`./src/templates/post.js`)
	result.data.allWpPost.edges.forEach(edge => {
		createPage({
			path: edge.node.slug,
			component: slash(postTemplate),
			context: {
				id: edge.node.id,
			},
		})
}	)
}