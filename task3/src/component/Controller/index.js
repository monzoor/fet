import { useEffect, useState } from "react";

import { videoForward, videoBackward } from "utils/controller";
import ControllerStyle from "./Controller.module.scss";

const Controller = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const media = video.current;

  useEffect(() => {
    isPlaying ? media.play() : !media.paused && media.pause();
  }, [isPlaying, media]);

  const videoPlayPause = ({ value }) => {
    setIsPlaying(value || !isPlaying);
  };

  return (
    <div className={ControllerStyle.container}>
      <button
        data-testid="rewind"
        onClick={() => videoBackward({ media, videoPlayPause })}
      >
        Rewind
      </button>
      <button data-testid="playPause" onClick={videoPlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button
        data-testid="forward"
        onClick={() => videoForward({ media, videoPlayPause })}
      >
        Forward
      </button>
    </div>
  );
};

export default Controller;
