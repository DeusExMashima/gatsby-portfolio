import React from "react"
import "../css/main.css"
import Header from "./header"
import Footer from "./footer"
import { Container } from "react-bootstrap"

export default function Layout({ children }){

    return (
        <>
            <Header />
                <Container className="pageContent d-flex align-items-center mt-3 mb-3">
                    <main>{ children }</main>
                </Container>
            <Footer />
        </>
    )

}