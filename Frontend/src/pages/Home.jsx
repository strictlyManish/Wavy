
function Home() {
  
  return (
   <main className="flex h-screen flex-col md:flex-row items-center max-md:text-center justify-between pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
        {/* Hero Text */}
        <div className="flex flex-col items-center md:items-start">
          <button
            className="mt-16 mb-6 flex items-center space-x-2 border border-green-500 text-green-500 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-green-700/20 transition"
            type="button"
          >
            <span>Discover New Music</span>
            <span className="flex items-center justify-center size-6 p-1 rounded-full bg-green-500">
              <svg
                width="14"
                height="11"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl max-w-xl">
            Your Daily Dose of
            <span className="text-green-500"> Music & Playlists</span>
          </h1>

          <p className="mt-4 text-gray-300 max-w-md text-sm sm:text-base leading-relaxed">
            Explore trending tracks, curated playlists, and your favorite
            artists all in one place.
          </p>

          <div className="flex flex-col md:flex-row items-center mt-8 gap-3">
            <button className="bg-green-500 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-green-600 transition">
              <span>Listen Now</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <a className="text-green-500 border border-green-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-green-500 hover:text-white transition" href="#">
              Browse Playlists
            </a>
          </div>
        </div>

        {/* Hero Images */}
        <div aria-label="Album covers" className="mt-12 grid grid-cols-2 gap-6 pb-6">
          {[
            "https://imgs.search.brave.com/E6SFfn728b4TWlufkOSikjTmh55KkKGPNfhXjqhonVI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvSkQyS0p5QWJP/TC9EMktKcUd2QWJP/L3NpemVfbS5qcGc",
            "https://imgs.search.brave.com/4YC3EsJNZ0HnF6oNr_kQjSNYbBW9Dwl94cMIdwsiLYY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTE5RXFBVy0ydUwu/anBn",
            "https://imgs.search.brave.com/mRLkC7bWpP_RkgqTdpVSz-d2-ZwCim6ETtuPuDP-1yA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFKam1PeGdYa0wu/anBn",
            "https://imgs.search.brave.com/FUeXRR8cZaYLkzdnzVKhl8HPJKFucJhxS0fyUokCJig/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFhc28tUE5IK0wu/anBn",
          ].map((src, idx) => (
            <img
              key={idx}
              alt={`Album ${idx + 1}`}
              className="w-36 h-44 rounded-lg hover:scale-105 transition duration-300 object-cover flex-shrink-0 shadow-lg"
              height="140"
              src={src}
              width="120"
            />
          ))}
        </div>
      </main>
  );
}

export default Home;