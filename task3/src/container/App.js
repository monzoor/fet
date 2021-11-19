import { useRef, useState } from "react";

import { Layout, Video, Controller } from "component";

const App = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const detectVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <Layout>
      <Video ref={videoRef} detectVideoLoaded={detectVideoLoaded} />
      {isVideoLoaded ? <Controller video={videoRef} /> : <p>Loading</p>}
    </Layout>
  );
};

export default App;
