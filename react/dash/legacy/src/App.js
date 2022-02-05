import "./App.css";
import constructionLogo from "./construction_logo_rect.svg";
// import NavItem from "./components/Item";
import NavBar from "./components/Navbar.js";

function App() {
    return (
        <div className="App">
            <div className="banner">
                <img src={constructionLogo} alt="Under Construction Logo" />
                <h1 className="banner-txt">Check back Soon!</h1>
            </div>
            {/* <NavItem /> */}
            <NavBar></NavBar>
            <main>
                <section>
                    {/* <h1>Main Body</h1> */}
                    <div className="display">
                        <h1>No Display</h1>
                        {/* <img
                            src={constructionLogo}
                            alt="Under Construction Logo"
                        ></img> */}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
