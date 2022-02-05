import "./App.css";
import constructionLogo from "./caution_sign.svg";
// import NavItem from "./components/Item";
import NavBar from "./components/Navbar.js";
import Grid from "./components/Grid.js";

function App() {
    return (
        <div className="App">
            <div className="banner">
                <img src={constructionLogo} alt="Under Construction Logo" />
                <h1 className="banner-txt">Under Construction!</h1>
            </div>
            {/* <NavItem /> */}
            <NavBar></NavBar>
            <main>
                <section>
                    {/* <h1>Main Body</h1> */}
                    <div className="display">
                        <Grid
                            items={[
                                <div key="0">Item 1</div>,
                                <div key="1">Item 2</div>,
                                <div key="2">Item 3</div>,
                            ]}
                        />
                        {/* <h1>No Display</h1> */}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
