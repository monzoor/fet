import { forwardRef } from "react";

const Video = forwardRef(({ detectVideoLoaded }, ref) => {
  return (
    <div>
      <video
        // style={{ display: "none" }}
        ref={ref}
        onLoadedData={(el) => {
          detectVideoLoaded();
        }}
        // src={formValues.videoSrc}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </div>
  );
});

export default Video;
