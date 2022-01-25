import "./App.css";
import List from "./components/List";
// import blank from "./components/Blank.js"
// import logo from "./logo.svg";

function App(props) {
    return (
        <div className="App">
            <header>
                <h1>Header</h1>
            </header>
            <div className="display">
                <List title="List 1"></List>
                <List title="List 2"></List>
                <List title="List 3"></List>
            </div>
        </div>
    );
}

export default App;
