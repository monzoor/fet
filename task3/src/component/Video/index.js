import { forwardRef } from "react";

const Video = forwardRef(({ detectVideoLoaded }, ref) => {
  return (
    <div>
      <video
        ref={ref}
        onLoadedData={() => {
          detectVideoLoaded();
        }}
        data-testid="videoElement"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </div>
  );
});

export default Video;
