import { INTERVAL } from "constant";

export const videoForward = ({ media, videoPlayPause }) => {
  if (media.currentTime >= media.duration - INTERVAL) {
    videoPlayPause({ value: false });
  } else {
    media.currentTime += INTERVAL;
  }
};

export const videoBackward = ({ media, videoPlayPause }) => {
  if (media.currentTime <= INTERVAL) {
    videoPlayPause({ value: false });
  } else {
    media.currentTime -= INTERVAL;
  }
};
