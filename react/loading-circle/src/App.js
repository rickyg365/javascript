import "./App.css";
import Circle from "./components/circle-loader/Circle.js";
import TestCircle from "./components/Test_circle.js";

function App() {
    return (
        <div className="App">
            <TestCircle></TestCircle>
            <TestCircle></TestCircle>
            <TestCircle mode="random" debug></TestCircle>
        </div>
    );
}

export default App;
