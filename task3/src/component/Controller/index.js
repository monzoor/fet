import { useEffect, useState } from "react";
import ControllerStyle from "./Controller.module.scss";

const Controller = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const media = video.current;

  useEffect(() => {
    isPlaying ? media.play() : !media.paused && media.pause();
  }, [isPlaying, media]);

  const videoPlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const interval = 1;

  const videoForward = () => {
    if (media.currentTime >= media.duration - interval) {
      setIsPlaying(false);
    } else {
      media.currentTime += interval;
    }
  };

  const videoBackward = () => {
    if (media.currentTime <= interval) {
      setIsPlaying(false);
    } else {
      media.currentTime -= interval;
    }
  };
  return (
    <div className={ControllerStyle.container}>
      <button onClick={videoBackward}>Rewind</button>
      <button onClick={videoPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={videoForward}>Forward</button>
    </div>
  );
};

export default Controller;
