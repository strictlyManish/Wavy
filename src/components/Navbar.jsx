import {
  CircleUserRound,
  EllipsisVertical,
  Mic,
  Search,
  TextAlignJustify,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { searchData } from "../api/api.config";



function Navbar() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (!data.search) return;

    searchData(data.search);
    reset();
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between px-4 py-3 text-white">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">
          <TextAlignJustify className="cursor-pointer hover:text-gray-300 transition" />
          <img
            onClick={() => navigate("/")}
            src="logo.png"
            alt="logo"
            className="w-24 sm:w-28 cursor-pointer"
          />
        </div>

        {/* CENTER SECTION */}
        <div className="hidden md:flex items-center gap-4 flex-1 max-w-2xl mx-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-1 items-center border border-gray-700 rounded-full overflow-hidden bg-[#121212]"
          >
            <input
              type="text"
              placeholder="Search"
              {...register("search")}
              className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
            />

            <button
              type="submit"
              className="bg-[#222222] hover:bg-[#2f2f2f] px-5 py-2 transition"
            >
              <Search size={18} />
            </button>
          </form>

          <button className="bg-[#222222] hover:bg-[#2f2f2f] p-2 rounded-full transition">
            <Mic size={18} />
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* Mobile Search Icon */}
          <Search className="md:hidden cursor-pointer hover:text-gray-300 transition" />

          <EllipsisVertical className="cursor-pointer hover:text-gray-300 transition" />

          <button className="hidden sm:flex items-center gap-2 bg-[#222222] hover:bg-[#2f2f2f] px-4 py-2 rounded-full transition">
            <CircleUserRound size={18} />
            <span className="text-sm">Sign in</span>
          </button>

          {/* Only icon on very small screens */}
          <CircleUserRound className="sm:hidden cursor-pointer hover:text-gray-300 transition" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
