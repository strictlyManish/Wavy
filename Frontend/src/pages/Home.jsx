import { LoaderCircle, LucideLoaderCircle } from "lucide-react";

function Home() {
  return (
    <div className="h-screen w-screen flex justify-center flex-col gap-5 items-center">
      <img src="logo.png" alt="logo" className="h-15 select-none" />
      <p className="font-black">
        <LucideLoaderCircle className="rotate-90 animate-spin h-6" />
      </p>
    </div>
  );
}

export default Home;
