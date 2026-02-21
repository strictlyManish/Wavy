import {
  CircleUserRound,
  Flag,
  Headset,
  History,
  House,
  MessageSquareText,
  Music,
  Settings,
  TvMinimal,
  Zap,
} from "lucide-react";

function Sidebar() {
  return (
    <div
      className="
        text-white 
        w-0 sm:w-20 md:w-56 lg:w-64 
        px-0 sm:px-2 md:px-4 lg:px-5 
        overflow-hidden sm:overflow-visible
        transition-all duration-300
      "
    >
      <ul className="flex gap-2 flex-col">
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <House />
          <p className="hidden md:block font-bold">Home</p>
        </li>

        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <Zap />
          <p className="hidden md:block">Shorts</p>
        </li>

        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <TvMinimal />
          <p className="hidden md:block">Subscription</p>
        </li>

        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <CircleUserRound />
          <p className="hidden md:block">You</p>
        </li>

        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <History />
          <p className="hidden md:block">History</p>
        </li>
      </ul>

      <div className="py-5 mt-5 border-t border-b hidden md:block">
        <p className="text-sm">
          Sign in to like videos, comment, and subscribe.
        </p>
        <button className="flex items-center border border-blue-500 p-2 rounded-full mt-3">
          <CircleUserRound />
          <p className="ml-2">Sign in</p>
        </button>
      </div>

      <ul className="flex gap-2 flex-col mt-6 mb-8">
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <Headset />
          <p className="hidden md:block font-bold">Help</p>
        </li>

        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <Settings />
          <p className="hidden md:block">Setting</p>
        </li>

        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <MessageSquareText />
          <p className="hidden md:block">Feedback</p>
        </li>

        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <Flag />
          <p className="hidden md:block">Report</p>
        </li>

        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <Music />
          <p className="hidden md:block">Music</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;