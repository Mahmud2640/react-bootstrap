import "./App.css";
import AlertDismissibleExample from "./components/Alert/Alert";
import AlertDismissible from "./components/Alert/Alert2";
import Accodian from "./components/Accodian/Accodian";
import Accordion2 from "./components/Accodian/Accordion2";

function App() {
  return (
    <div className="App">
      <h1>This Is Alert</h1>
      <AlertDismissibleExample></AlertDismissibleExample>
      <AlertDismissible></AlertDismissible>
      <h1>This is Accordion</h1>
      <Accodian></Accodian> 
      
    </div>
  );
}

export default App;
