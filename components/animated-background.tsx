import React from "react";
import styled from "styled-components";
import FirefliesGraphics from "../graphics/class-fireflies-graphics";

const Canvas = styled.canvas`
  left: 0;
  position: fixed;
  top: 0;
`;

const AnimatedBackground: React.FC = () => {
  const canvasRef = React.useRef();
  React.useEffect(() => {
    const graphics = new FirefliesGraphics(
      15,
      "/images/firefly.png",
      canvasRef.current
    );
    graphics.init();
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default AnimatedBackground;
