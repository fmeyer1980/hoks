const groq = require('groq')
const client = require('../../utils/sanityClient.js')
module.exports =  async function() {
  return await client.fetch(groq`
  *[_type == "home"]{
    meta{
      title,
      description
    },
    intro{
      headline,
      text,
      image,
      logos[]
    },
    featuredServices{
      headline,
      list[]->{
        slug,
        mainImage,
        title,
        headline,
        summary,
        icon
      }
    },
    featuredCases[]->{
      slug,
      mainImage,
      name,
      headline,
      summary
  },
    }[0]
  `)
}
