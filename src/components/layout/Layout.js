import React from "react"
import "../css/main.min.css"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }){

    return (
        <>
            <Header />
                <div className="container pageContent d-flex align-items-center mt-3 mb-3">
                    <main>{ children }</main>
                </div>
            <Footer />
        </>
    )

}