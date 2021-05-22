import React from "react";
import styled, { css } from "styled-components";
import media from "../utils/media-queries";
import { calculateOptimalPathBetweenDigits } from "../utils/dodecahedron";

// "facePositions" array describes the position for each face of the 3d figure
// calculated in rotation angles for axis x and turns for axes, y and z
// respectively
const facePositions = [
  [270, 0, 0],
  [333.435, 0.1, 0],
  [333.435, 0.3, 0],
  [333.435, 0.5, 0],
  [333.435, 0.7, 0],
  [333.435, 0.9, 0],
  [26.565, 0, 0.5],
  [26.565, 0.2, 0.5],
  [26.565, 0.4, 0.5],
  [26.565, 0.6, 0.5],
  [26.565, 0.8, 0.5],
  [90, 0, 0],
];

const Label = styled.span`
  font-size: 0.5em;
  text-align: center;
`;
const Face = styled.div`
  --edge: 4em;
  align-items: center;
  background: radial-gradient(circle at 70% 70%, #f3c546, #ff803d);
  clip-path: polygon(
    50% 0%,
    2.4472% 34.5492%,
    20.6107% 90.4509%,
    79.3893% 90.4509%,
    97.5528% 34.5492%
  );
  cursor: pointer;
  display: flex;
  height: var(--edge);
  justify-content: center;
  margin: calc(var(--edge) / -2);
  position: absolute;
  transition: all 0.3s;
  width: var(--edge);
  :nth-child(n + 7):nth-child(-n + 11) {
    ${Label} {
      transform: rotateZ(180deg);
    }
  }

  // The following function call is used to position each face
  // of the dodecahedron reducing css verbosity
  ${facePositions.map(
    ([x, y, z], i) => css`
      :nth-child(${i + 1}) {
        transform: rotateY(${y}turn) rotateX(${x}deg) rotateZ(${z}turn)
          translateZ(2.61em);
      }
    `
  )}
`;
const Polyhedron = styled.div<{
  rotateX: number;
  rotateY: number;
}>`
  box-shadow: 0 0 2px 5px crimson;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: rotateX(-${({ rotateX }) => rotateX.toFixed(4)}turn)
    rotateY(-${({ rotateY }) => rotateY.toFixed(4)}turn);
  transform-style: preserve-3d;
  transition: all 1s;
`;
const Scene = styled.div`
  --size: 7em;
  font-size: 10vmin;
  min-height: var(--size);
  min-width: var(--size);
  position: relative;
  ${media("medium")`
    font-size: 8vmin;
  `}
  ${media("large")`
    font-size: 10vmin;
  `}
`;

interface DodecahedronProps {
  activeLabelIndex?: number;
  labels?: string[];
  onFaceClick?: (index: number) => void;
}
const Dodecahedron: React.FC<DodecahedronProps> = ({
  activeLabelIndex = 0,
  labels = [],
  onFaceClick = () => null,
}) => {
  // Initialize "rotationRef" with 108 turns to avoid passing unsupported
  // negative values to "calculateRotation"
  const rotationRef = React.useRef([108, 108]);

  function renderFaces() {
    const faces = [];
    for (let i = 0; i < 12; i++) {
      faces.push(
        <Face key={i} onClick={() => onFaceClick(i)}>
          {labels[i] && <Label>{labels[i]}</Label>}
        </Face>
      );
    }

    return faces;
  }
  // TODO: add support for negative values on "calculateRotation" function
  function calculateRotation() {
    const rotation = rotationRef.current;
    const [xFaceRotationDeg, yFaceRotation] = facePositions[activeLabelIndex];
    const xFaceRotation = xFaceRotationDeg / 360;

    let x =
      rotation[0] +
      calculateOptimalPathBetweenDigits(rotation[0] % 1, xFaceRotation);
    // Add small inclination when the figure is at 90° to avoid loosing the
    // click surface
    if (!(xFaceRotation % 0.25)) x += 0.001;

    const y =
      rotation[1] +
      calculateOptimalPathBetweenDigits(rotation[1] % 1, yFaceRotation);

    return [x, y];
  }

  const rotation = React.useMemo(calculateRotation, [activeLabelIndex]);
  rotationRef.current = rotation;

  return (
    <Scene>
      <Polyhedron rotateX={rotation[0]} rotateY={rotation[1]}>
        {renderFaces()}
      </Polyhedron>
    </Scene>
  );
};

export default Dodecahedron;
