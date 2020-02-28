import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/layout/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="slider-text">
    <h1 className="text-primary">Hi, My name is Mashima Button</h1>
    <h4 style={{color: `gray`}}>I am a full-stack web developer / software engineer.</h4>
    </div>
  </Layout>
)

export default IndexPage