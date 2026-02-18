import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";


function App() {
  return <div className="h-screen w-screen text-white">
    <Navbar/>
    <Home/>
    <Mainroutes/>
  </div>;
}

export default App;
