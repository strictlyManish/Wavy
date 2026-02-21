import {
  CircleUserRound,
  EllipsisVertical,
  Mic,
  Search,
  TextAlignJustify,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className="text-white bg-transparent backdrop-blur-3xl w-full flex items-center justify-between px-4 py-4 ">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        <TextAlignJustify className="cursor-pointer" />
        <img onClick={()=>navigate("/")} src="logo.png" alt="logo" className="w-24 sm:w-28 cursor-pointer" />
      </div>

      {/* CENTER SECTION (Hidden on small screens) */}
      <div className="hidden md:flex items-center gap-4 flex-1 max-w-2xl mx-6">
        <div className="flex flex-1 overflow-hidden items-center border border-gray-800 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 bg-transparent outline-none"
          />
          <button className="bg-[#222222] px-4 py-2 cursor-pointer">
            <Search />
          </button>
        </div>

        <button className="bg-[#222222] p-2 rounded-full">
          <Mic />
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        {/* Search icon for mobile */}
        <Search className="md:hidden cursor-pointer" />

        <EllipsisVertical className="cursor-pointer" />

        <button className="hidden sm:flex items-center gap-2 bg-[#222222] px-3 py-2 rounded-full">
          <CircleUserRound />
          <span>Sign in</span>
        </button>

        {/* Only icon on very small screens */}
        <CircleUserRound className="sm:hidden cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;