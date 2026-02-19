import Creation from "./components/Creation";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

function App() {



  return (
    <div className="text-white">
      <Navbar />
      <Mainroutes />
      <Creation/>
    </div>
  );
}

export default App;
