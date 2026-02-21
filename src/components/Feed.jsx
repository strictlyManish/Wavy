import { BadgeCheck, Check } from "lucide-react";
import { Link } from "react-router-dom";

function Feed() {
  const data = [
    {
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      title: "Never Gonna Give You Up",
      channelName: "RickAstleyVEVO",
      views: "1.4B views",
      uploadTime: "2days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
      title: "Gangnam Style",
      channelName: "officialpsy",
      views: "4.9B views",
      uploadTime: "5days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/3tmd-ClpJxA/hqdefault.jpg",
      title: "Shape of You",
      channelName: "EdSheeran",
      views: "6.1B views",
      uploadTime: "1days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/l482T0yNkeo/hqdefault.jpg",
      title: "Bohemian Rhapsody",
      channelName: "Queen Official",
      views: "1.8B views",
      uploadTime: "7days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
      title: "Smells Like Teen Spirit",
      channelName: "Nirvana",
      views: "1.6B views",
      uploadTime: "3days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
      title: "Despacito",
      channelName: "LuisFonsiVEVO",
      views: "8.2B views",
      uploadTime: "6days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg",
      title: "Perfect",
      channelName: "EdSheeran",
      views: "3.5B views",
      uploadTime: "4days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg",
      title: "Uptown Funk",
      channelName: "MarkRonsonVEVO",
      views: "5.0B views",
      uploadTime: "9days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/YQHsXMglC9A/hqdefault.jpg",
      title: "Hello",
      channelName: "Adele",
      views: "3.1B views",
      uploadTime: "8days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/CevxZvSJLk8/hqdefault.jpg",
      title: "Roar",
      channelName: "KatyPerryVEVO",
      views: "3.9B views",
      uploadTime: "2days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/60ItHLz5WEA/hqdefault.jpg",
      title: "Faded",
      channelName: "AlanWalker",
      views: "3.6B views",
      uploadTime: "10days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/hT_nvWreIhg/hqdefault.jpg",
      title: "Counting Stars",
      channelName: "OneRepublic",
      views: "4.2B views",
      uploadTime: "11days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/09R8_2nJtjg/hqdefault.jpg",
      title: "Sugar",
      channelName: "Maroon5VEVO",
      views: "3.8B views",
      uploadTime: "12days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/RgKAFK5djSk/hqdefault.jpg",
      title: "See You Again",
      channelName: "WizKhalifa",
      views: "5.9B views",
      uploadTime: "13days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/pRpeEdMmmQ0/hqdefault.jpg",
      title: "Waka Waka",
      channelName: "ShakiraVEVO",
      views: "3.7B views",
      uploadTime: "14days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg",
      title: "Numb",
      channelName: "LinkinPark",
      views: "2.5B views",
      uploadTime: "15days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/e-ORhEE9VVg/hqdefault.jpg",
      title: "Blank Space",
      channelName: "TaylorSwiftVEVO",
      views: "3.4B views",
      uploadTime: "16days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/uelHwf8o7_U/hqdefault.jpg",
      title: "Love The Way You Lie",
      channelName: "EminemVEVO",
      views: "2.7B views",
      uploadTime: "17days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
      title: "Thinking Out Loud",
      channelName: "EdSheeran",
      views: "3.9B views",
      uploadTime: "18days",
    },
    {
      thumbnail: "https://img.youtube.com/vi/34Na4j8AVgA/hqdefault.jpg",
      title: "Lean On",
      channelName: "MajorLazerOfficial",
      views: "3.6B views",
      uploadTime: "19days",
    },
  ];

  return (
    <div className="text-white px-4 mt-5">
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
        {data.map((obj, idx) => (
          <Link
          to={`/video/:categoryId/:${idx}`}
            key={idx}
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
