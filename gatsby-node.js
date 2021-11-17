//gatsby-node.js

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

//pokemon API

const axios = require("axios")
const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)
const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`)
      return { ...pokemon }
    })
  )

exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(["mew", "ditto", "squirtle", "charmander"])
  createPage({
    path: `/pokemon`,
    component: require.resolve("./src/templates/all-pokemon.js"),
    context: { allPokemon },
  })
  
}