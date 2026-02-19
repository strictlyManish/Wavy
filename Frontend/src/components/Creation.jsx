function Creation() {
    return (
        <>
            <h1 className="text-3xl font-semibold text-center mx-auto">Top Singer in These Days</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works -
                each piece crafted with intention, emotion, and style.</p>
            
            <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center rounded-md"
                        src="https://i.pinimg.com/1200x/85/a0/f6/85a0f6796cb3b0456ef6aed0f10d42ce.jpg"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Jubin Nautiyal</h1>
                        <p className="text-sm">Jubin Nautiyal (born 14 June 1989) is an Indian playback singer. In June 2022, he won the IIFA award for "Playback Singer </p>
            
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-right rounded-md"
                        src="https://i.pinimg.com/736x/2e/03/60/2e0360c4e696c21e1e936d41f023c805.jpg"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Arijit Singh</h1>
                        <p className="text-sm">Arijit Singh born 25 April 1987 is an Indian singer and music producer. A leading figure in Hindi and Bengali music</p>
            
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center rounded-md"
                        src="https://i.pinimg.com/736x/75/70/3a/75703ab63718adb283fe2fc052386975.jpg"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Yo Yo Honey Singh</h1>
                        <p className="text-sm">Yo Yo Honey Singh, is an Indian singer and music producer. He commenced his career as a hip-hop music</p>
            
                    </div>
                </div>
            </div>
        </>
    );
};

export default Creation