const VideoTitle = ({title,overview})=>{
    return (
        <div className="pt-36 px-12">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="">
                <button className="bg-gray-500 text-white px-16 text-lg py-4 rounded-lg mr-4 bg-opacity-50">⏯️ Play</button>
                <button className="bg-gray-500 text-white px-16 text-lg py-4 rounded-lg bg-opacity-50">ℹ️ More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;
