import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Onbord from "./components/Onbord";

function App() {
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAuth(true);
    }, 2000); // 5 seconds baad login page

    return () => clearTimeout(timer);
  }, []);

  return <>{showAuth ? <Onbord /> : <Home />}</>;
}

export default App;
