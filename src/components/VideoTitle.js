const VideoTitle = ({title,overview})=>{
    return (
        <div className="w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div>
                <button className="bg-white font-bold hover:bg-opacity-80 text-black px-16 text-lg py-4 rounded-lg mr-4 ">⏯️ Play</button>
                <button className="bg-gray-500 text-white px-16 text-lg py-4 rounded-lg bg-opacity-50">ℹ️ More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;
