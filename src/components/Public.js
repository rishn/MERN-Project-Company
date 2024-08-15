import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Website for <span className="nowrap">Business Company</span></h1>
            </header>
            <main className="public__main">
                <p>MERN Stack web-app for Company Management using React for front-end and Express for back-end with MongoDB</p>
                <p>Developed for education purposes, not in operation by any company or organization, however functional</p>
                <address className="public__addr">
                    Rishaan Jacob Kuriakose<br />
                    Vellore Institute of Technology<br />
                    Chennai, India<br />
                </address>
                <br />
                <p>Owner: Rishaan Jacob Kuriakose</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}

export default Public