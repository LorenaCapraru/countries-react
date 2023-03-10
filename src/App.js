import "./App.css";
import data from "./countriesAll.json";
import CountriesCards from "./CountriesCards";

function App() {
  return <CountriesCards data={data} />;
}

export default App;
