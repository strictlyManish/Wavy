import { BadgeCheck, Check } from "lucide-react";
import { Link } from "react-router-dom";

function Feed() {
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

  return (
    <div className="text-white px-5 mt-5 h-screen">
      <div
        className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-4 
        2xl:grid-cols-6 
        gap-2"
      >
        {data.map((obj) => (
          <Link
            to={`/video/:categoryId/${obj.id}`}
            key={obj.id}
            className="hover:bg-gray-800 p-1 rounded-2xl transition"
          >
            {/* Thumbnail */}
            <div className="w-full aspect-video overflow-hidden rounded-xl">
              <img
                src={obj.thumbnail}
                alt={obj.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex gap-3 mt-3">
              <img
                src={obj.thumbnail}
                alt={obj.channelName}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <p className="font-medium line-clamp-2 text-sm md:text-base">
                  {obj.title}
                </p>

                <p className="flex items-center gap-2 text-gray-400 text-sm">
                  {obj.channelName}
                  <Check className="w-4 h-4 p-1 bg-gray-400 text-black rounded-full" />
                </p>

                <p className="text-gray-400 text-xs md:text-sm">
                  {obj.views} • {obj.uploadTime}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Feed;
