import { useState } from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar"
function Home() {

  const [category,setCategory] = useState(0);

  return (
    <div className="flex">
      <Sidebar category={category} setCategory={setCategory} />
      <Feed category={category} setCategory={setCategory}  />
    </div>
  );
}

export default Home;
