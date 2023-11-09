import React from "react";

const LiveSession = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <div className="ml-10 py-6 sm:m-10 h-2/3 w-1/2 aspect-square">
          <iframe
            src="https://www.youtube.com/embed/ydOmxCmdJmw"
            frameborder="0"
            allow="autoplay; picture-in-picture"
            allowfullscreen
            loading="lazy"
            title="Youtube"></iframe>
        </div>
        <div className="ml-10 sm:m-10 w-1/2 aspect-square">
          <iframe
            src="https://www.youtube.com/embed/xS68diftULI"
            frameborder="0"
            allow="autoplay; picture-in-picture"
            allowfullscreen
            loading="lazy"
            title="Youtube"></iframe>
        </div>
      </div>
    </div>
  );
};

export default LiveSession;
