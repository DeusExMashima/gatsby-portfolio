import React from "react"
import "../css/main.css"
import Header from "./Header"
import Footer from "./Footer"
import { Container } from "react-bootstrap"

export default function Layout({ children }){

    return (
        <>
            <Header />
                <div className="container-xl pageContent d-flex align-items-center mt-3 mb-3">
                    <main>{ children }</main>
                </div>
            <Footer />
        </>
    )

}