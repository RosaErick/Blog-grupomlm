import React from "react";
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="column">
    <div className="content has-text-centered">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/h5CXw2dV9kk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div className="content has-text-centered ">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YdSKq9FvQ2Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div className="content has-text-centered">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/aPxZ5wxYAKE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
);
export default Video;
