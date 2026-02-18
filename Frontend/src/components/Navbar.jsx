import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 backdrop-blur-sm bg-black/60 text-white z-50">
      {/* Logo */}
      <a href="/" className="text-3xl font-mono text-white">
        Wavy
      </a>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <a href="/" className="block hover:text-[#00A63E] transition-colors">
          Home
        </a>
        <a
          href="/release"
          className="block hover:text-[#00A63E] transition-colors"
        >
          New realse
        </a>
        <a
          href="songs"
          className="block hover:text-[#00A63E] transition-colors"
        >
          Songs
        </a>

        {/* Search Input */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-white/20 px-3 rounded-full bg-[#00A63E]/5">
          <input
            type="text"
            placeholder="Search tracks"
            className="py-1.5 w-full bg-transparent outline-none placeholder:text-white/40 text-white/60"
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#fff"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#fff"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Login Button */}
        <button
          onClick={() => navigate("/login")}
          className="cursor-pointer px-8 py-2 bg-[#00A63E] hover:bg-green-600 transition text-white rounded-full"
        >
          Login
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#fff" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#fff" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#fff" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-[60px] left-0 w-full bg-black/80 backdrop-blur-sm py-4 flex-col items-start gap-3 px-5 text-white sm:hidden z-40`}
      >
        <a href="/" className="block hover:text-[#00A63E] transition-colors">
          Home
        </a>
        <a
          href="/release"
          className="block hover:text-[#00A63E] transition-colors"
        >
          New Realse
        </a>
        <a
          href="songs"
          className="block hover:text-[#00A63E] transition-colors"
        >
          Songs
        </a>
        <button className="cursor-pointer px-6 py-2 mt-2 bg-[#00A63E] hover:bg-green-600 transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
