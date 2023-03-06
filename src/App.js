import "./App.css";
import Navbar from "./components/navbar";
import Routing from "./components/routing";
import Header from "./components/header";
import Content from "./components/about";

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Content/>
      <Routing />

    </div>
  );
}

export default App;
