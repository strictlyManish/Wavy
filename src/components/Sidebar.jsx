import { CircleUserRound, Flag, Headset, History, House, MessageSquareText, Music, Settings, TvMinimal, Zap } from "lucide-react";

function Sidebar() {

  return (
    <div className="text-white w-65 px-5">
      <ul className="flex gap-2 flex-col">
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <House />
          <p className="font-bold">Home</p>
        </li>
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <Zap />
          <p>Shorts</p>
        </li>
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <TvMinimal />
          <p>Subscription</p>
        </li>
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <CircleUserRound />
          <p>You</p>
        </li>
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <History />
          <p>History</p>
        </li>
      </ul>
      <div className="py-5 mt-5 border-t border-b">
        <p>Sign in to like videos, comment, and subscribe.</p>
        <button className="flex items-center border border-blue-500 p-2 rounded-full">
          <CircleUserRound />
          <p>Sign in</p>
        </button>
      </div>
      <ul className="flex gap-2 flex-col mt-6 mb-8">
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <Headset />
          <p className="font-bold">Help</p>
        </li>
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <Settings />
          <p>Setting</p>
        </li>
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <MessageSquareText />
          <p>Feddback</p>
        </li>
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <Flag />
          <p>Report</p>
        </li>
        <li className="flex px-2 py-2 items-center gap-4 hover:bg-[#222222] rounded-md cursor-pointer">
          <Music />
          <p>Music</p>
        </li>
      </ul>
      <ul></ul>
    </div>
  );
}

export default Sidebar;
