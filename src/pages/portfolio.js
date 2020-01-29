import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/layout/SEO"
import Projects from "../components/subcomponents/Projects"

export default function Portfolio() {
    return (

        <Layout>
            <SEO title="Portfolio" />
            <h2>Portfolio</h2>
            <p>These are the highlights of projects utilizing the skills I have learned since the beginning of my journey.</p>
            <Projects />
        </Layout>

    )
}
