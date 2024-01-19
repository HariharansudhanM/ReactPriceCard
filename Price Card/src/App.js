import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
function App() {
  const features = [
    "Single User",
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Project",
    "Dedicated Phone Support",
    "Free subdomain",
    "Monthly Status report",
  ];

  return (
    <div className="App">
      <Card features={features} name="FREE" price="0" />
      <Card features={features} name="PLUS" price="9" />
      <Card features={features} name="PRO" price="49" />
    </div>
  );
}

export default App;
