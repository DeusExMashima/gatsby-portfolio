

exports.createPages = ({ actions: { createPage }}) => {
    const  data  = require("./src/data/portfolio.json")
    data.forEach(project => {
            createPage({
            path: `/${project.slug}/`,
            component: require.resolve("./src/components/subcomponents/ProjectTemplate.js"),
            context: {
                title: project.title,
                caption: project.caption,
                description: project.description,
                technology: project.technology,
                role: project.role,
                teamOrIndividual: project.teamOrIndividual,
                url: project.url,
                githubURL: project.githubURL,
                image: project.image,
                slug: project.slug
            }
        })
    })
}