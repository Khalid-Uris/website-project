import "./App.css";
import Services from "./component/Services/Services";
import TopBanner from "./component/TopBanner/TopBanner";
import TopNavigation from "./component/TopNavigation/TopNavigation";

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <TopBanner />
      <Services />
    </div>
  );
}

export default App;
