import "./App.css";
import ConditionalRendering from "./components/conditionalRendering";
import { ParentComponent } from "./components/props";
import { ArrayState, ObjectState, StringState } from "./components/states";

// JAVASCRIPT ES6/ 2015ES INTRODUCE ARROW FUNCTION

const App = () => {
  return (
    <div className="App">
      <ConditionalRendering />
    </div>
  );
};

export default App;
