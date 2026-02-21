import {
  ArrowDownToLine,
  Bookmark,
  EllipsisVertical,
  Share,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function PlayVideo() {
  const { categoryId, videoId } = useParams();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const data = [
    {
      id: 1,
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      title: "Never Gonna Give You Up",
      channelName: "RickAstleyVEVO",
      views: "1.4B views",
      uploadTime: "2days",
    },
    {
      id: 2,
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
      title: "Gangnam Style",
      channelName: "officialpsy",
      views: "4.9B views",
      uploadTime: "5days",
    },
    {
      id: 3,
      thumbnail: "https://img.youtube.com/vi/3tmd-ClpJxA/hqdefault.jpg",
      title: "Shape of You",
      channelName: "EdSheeran",
      views: "6.1B views",
      uploadTime: "1days",
    },
    {
      id: 4,
      thumbnail: "https://img.youtube.com/vi/l482T0yNkeo/hqdefault.jpg",
      title: "Bohemian Rhapsody",
      channelName: "Queen Official",
      views: "1.8B views",
      uploadTime: "7days",
    },
    {
      id: 5,
      thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
      title: "Smells Like Teen Spirit",
      channelName: "Nirvana",
      views: "1.6B views",
      uploadTime: "3days",
    },
    {
      id: 6,
      thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
      title: "Despacito",
      channelName: "LuisFonsiVEVO",
      views: "8.2B views",
      uploadTime: "6days",
    },
    {
      id: 7,
      thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg",
      title: "Perfect",
      channelName: "EdSheeran",
      views: "3.5B views",
      uploadTime: "4days",
    },
    {
      id: 8,
      thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg",
      title: "Uptown Funk",
      channelName: "MarkRonsonVEVO",
      views: "5.0B views",
      uploadTime: "9days",
    },
    {
      id: 9,
      thumbnail: "https://img.youtube.com/vi/YQHsXMglC9A/hqdefault.jpg",
      title: "Hello",
      channelName: "Adele",
      views: "3.1B views",
      uploadTime: "8days",
    },
  ];

  const arr = data.find((obj) => obj.id == videoId) || data[0];

  const handleComment = () => {
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="max-w-[1700px] mx-auto px-4 md:px-6 lg:px-10 bg-[#0F0F0F] text-white min-h-screen pt-4">
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section (Video + Details) */}
        <div className="flex-1 min-w-0">
          {/* Video Container */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
            <img
              src={arr.thumbnail}
              alt={arr.title}
              className="w-full h-full object-cover"
            />
            {/* If this were a real video, the iframe/player would go here */}
          </div>

          {/* Title */}
          <h1 className="text-xl md:text-2xl font-extrabold mt-4 line-clamp-2 tracking-tight">
            {arr.title}
          </h1>

          {/* Channel + Buttons Bar */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mt-4">
            {/* Channel Info */}
            <div className="flex items-center justify-between sm:justify-start gap-4">
              <div className="flex items-center gap-3 cursor-pointer group">
                <img
                  src={arr.thumbnail}
                  alt="Channel Avatar"
                  className="h-11 w-11 object-cover rounded-full ring-2 ring-transparent group-hover:ring-zinc-700 transition-all"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-[16px] leading-tight hover:text-zinc-300">
                    {arr.channelName}
                  </span>
                  <span className="text-zinc-400 text-xs">
                    19.1M subscribers
                  </span>
                </div>
              </div>
              <button className="bg-white hover:bg-zinc-200 text-black px-5 py-2 rounded-full text-sm font-bold transition-all ml-2 active:scale-95">
                Subscribe
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <div className="flex items-center bg-zinc-800/80 hover:bg-zinc-700 rounded-full transition-colors">
                <button className="flex items-center gap-2 px-4 py-2 border-r border-zinc-600 hover:bg-zinc-600 rounded-l-full">
                  <ThumbsUp size={18} />
                  <span className="text-sm font-semibold">6K</span>
                </button>
                <button className="px-4 py-2 hover:bg-zinc-600 rounded-r-full">
                  <ThumbsDown size={18} />
                </button>
              </div>

              <button className="bg-zinc-800/80 hover:bg-zinc-700 flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap font-semibold text-sm">
                <Share size={18} /> Share
              </button>

              <button className="bg-zinc-800/80 hover:bg-zinc-700 flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap font-semibold text-sm hidden sm:flex">
                <ArrowDownToLine size={18} /> Download
              </button>

              <button className="bg-zinc-800/80 hover:bg-zinc-700 p-2.5 rounded-full transition-all active:bg-zinc-600">
                <EllipsisVertical size={18} />
              </button>
            </div>
          </div>

          {/* Description Box */}
          <div className="bg-zinc-800/40 hover:bg-zinc-800/60 transition-all rounded-xl p-4 mt-4 text-sm group cursor-pointer">
            <div className="font-bold flex gap-3 mb-1 text-zinc-100">
              <span>{arr.views} views</span>
              <span>{arr.uploadTime}</span>
            </div>
            <p className="text-zinc-200 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              rerum eaque placeat? Inventore, autem maiores optio.
              <span className="font-bold text-zinc-100 ml-2 block sm:inline group-hover:underline">
                ...more
              </span>
            </p>
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-6">
              {comments.length} Comments
            </h3>

            {/* Add Comment Input */}
            <div className="flex gap-4 items-start mb-10">
              <div className="h-10 w-10 rounded-full bg-zinc-700 shrink-0" />
              <div className="flex-1 group">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-transparent border-b border-zinc-700 focus:border-white outline-none pb-1 transition-all placeholder:text-zinc-500"
                />
                {comment && (
                  <div className="flex justify-end gap-3 mt-3 animate-in fade-in slide-in-from-top-1">
                    <button
                      onClick={() => setComment("")}
                      className="px-4 py-2 text-sm font-semibold hover:bg-zinc-800 rounded-full"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleComment}
                      className="bg-[#3EA6FF] hover:bg-[#65B8FF] text-black px-4 py-2 rounded-full text-sm font-bold transition-colors"
                    >
                      Comment
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Comment List */}
            <div className="space-y-8">
              {comments.map((c, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 shrink-0 overflow-hidden">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${index}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-zinc-100">
                        @user_{index}
                      </span>
                      <span className="text-xs text-zinc-400">2 hours ago</span>
                    </div>
                    <p className="text-sm text-zinc-200 leading-snug">{c}</p>
                    <div className="flex items-center gap-4 mt-3 text-zinc-400">
                      <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                        <ThumbsUp size={14} />
                        <span className="text-xs">12</span>
                      </div>
                      <ThumbsDown
                        size={14}
                        className="cursor-pointer hover:text-white transition-colors"
                      />
                      <span className="text-xs font-bold cursor-pointer hover:text-white transition-colors">
                        Reply
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Suggested Videos) */}
        <div className="w-full lg:w-[350px] xl:w-[420px] shrink-0">
          <div className="flex flex-col gap-3">
            {data.map((video) => (
              <Link
                to={`/video/${video.categoryId}/${video.id}`}
                key={video.id}
                className="flex gap-3 group"
              >
                <div className="relative shrink-0 w-44 h-24 overflow-hidden rounded-xl bg-zinc-900 shadow-md">
                  <img
                    src={video.thumbnail}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-1 py-1">
                  <p className="text-sm font-bold line-clamp-2 leading-tight group-hover:text-zinc-300 transition-colors">
                    {video.title}
                  </p>
                  <div className="text-zinc-400 text-[12px]">
                    <p className="hover:text-white transition-colors flex items-center gap-1">
                      {video.channelName}
                    </p>
                    <p>
                      {video.views} • {video.uploadTime || "1 day ago"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
