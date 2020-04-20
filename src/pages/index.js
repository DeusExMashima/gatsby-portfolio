import React from "react"
import { Button } from "react-bootstrap"
import Layout from "../components/layout/Layout"
import SEO from "../components/layout/SEO"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="slider-text">
    <h1 className="text-primary">Hi, My name is Mashima Button</h1>
    <h4 style={{color: `gray`}}>I am a full-stack web developer / software engineer.</h4>
    <Button variant="primary" href="http://mashimabutton.com/portfolio" className="mr-3">View my projects</Button>
    <Button variant="warning" href="https://drive.google.com/open?id=1_9YOEawpPrxMU9jHFLsVarz7bcn5fK4S">See my Resume</Button>
    </div>
  </Layout>
)

export default IndexPage