
export default function Header() {

    return (
    <div>
    <header className="heder ">
        <h1>Lizard Global React Developer Assessment</h1>
    </header>

        <section className="landing">
            <div className="container">
                    <div className="text">
                        <h2>Welcome, To React World</h2>
                        <span>A JavaScript library for building user interfaces
                            Try out a preview of the React Docs!
                            <a href="https://reactjs.org/"> 👉 reactjs.org</a>
                        </span>
                    </div>

                        <div className="image">
                        <img  src={require("../img/landing-image.png")} alt="landing" />
                        </div>
            </div>
                <span  className="go-down">
                <i className="fas fa-angle-double-down fa-2x"></i>
                </span>
        </section>

</div>





)
}
        
        