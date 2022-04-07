import StartPage from "./components/StartPage";
import "./styles/App.css"



function App() {

	const API_URL = `https://opentdb.com/api.php?amount=10`

  return (
    <div className="app">
     <StartPage />
    </div>
  );
}

export default App;
