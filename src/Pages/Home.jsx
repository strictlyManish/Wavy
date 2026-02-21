import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar"
function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Feed/>
    </div>
  );
}

export default Home;
