import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="bottom-contact">
                    <a href="https://www.linkedin.com/in/mashimabutton/"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/zimashima"><i class="fab fa-github"></i></a>
                    <a href="https://twitter.com/_zimashima"><i class="fab fa-twitter"></i></a>
                </div>
                    <p>Copyrights {new Date().getFullYear()} © <a href="/">Mashima Button</a></p>
                    <p>Built with
                    <a href="https://www.gatsbyjs.org"> Gatsby</a> | Styled with <a href="https://react-bootstrap.github.io/">React-Bootstrap</a> &amp; <a href="https://getbootstrap.com/">Bootstrap</a></p>
            </footer>
        </>
    )
}