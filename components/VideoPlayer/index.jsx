
function VideoPlayer({ 
  video_id = "aNxHlK8hixQ",
  title = "Video",
  allowFullscren = true
}) {


  return (
    <div className="VideoPlayer">
      <iframe 
        className="YouTubeVideo" 
        src={`https://www.youtube.com/embed/${video_id}`} 
        title={title}
        onLoad={() => console.log("loaded iframe")}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen={allowFullscren}></iframe>
    </div>
  )
}

export default VideoPlayer;