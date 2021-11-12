import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
    <div className="" ><iframe
      src={"https://www.youtube.com/watch?v=YdSKq9FvQ2Y"}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="25"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
        /></div>
           <div ><iframe
      src={"https://www.youtube.com/watch?v=h5CXw2dV9kk"}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
        /></div> 
        

        <div><iframe
      src={"https://www.youtube.com/watch?v=aPxZ5wxYAKE"}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
</div> 

  </div>
)
export default Video