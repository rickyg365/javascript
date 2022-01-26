import "./App.css";
// import NavItem from "./components/Item";
import NavBar from "./components/Navbar.js";

function App() {
    return (
        <div className="App">
            {/* <NavItem /> */}
            <NavBar></NavBar>
            <main>
                <h1>Main Body</h1>
            </main>
        </div>
    );
}

export default App;
