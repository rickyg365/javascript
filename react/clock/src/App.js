import "./App.css";
import Clock from "./components/clock.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">Header</header>
            <main>
                <div className="clock-grid">
                    <Clock></Clock>
                    <Clock></Clock>
                    <Clock></Clock>
                    <Clock></Clock>
                    <Clock></Clock>
                    <Clock></Clock>
                </div>
            </main>
        </div>
    );
}

export default App;
