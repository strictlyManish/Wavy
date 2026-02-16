import { useEffect, useState } from "react";

function Onbord() {
  const texts = [
    "User friendly mp3 music player for your device",
    "Listen your favourite songs anytime",
    "Create playlists and enjoy music",
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % texts.length);
  };

  useEffect(() => {
  setTimeout(() => {
      nextSlide();
    }, 2000);
  }, []);

  return (
    <div className="h-screen bg-[#0F172A] flex flex-col">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/modelgirl.png"
          alt="model"
          className="h-full object-contain"
        />
      </div>

      {/* Bottom Card */}
      <div className="bg-[#1E293B] rounded-t-[40px] px-8 py-10 text-center h-1/2 flex flex-col justify-around">
        {/* Text */}
        <p className="text-white text-4xl font-semibold leading-snug">
          {texts[index]}
        </p>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {texts.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-orange-500 w-6" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Button */}
        <button className=" w-full  bg-orange-500 text-white py-4 rounded-full font-semibold text-lg">
          Next
        </button>
      </div>
    </div>
  );
}

export default Onbord;
