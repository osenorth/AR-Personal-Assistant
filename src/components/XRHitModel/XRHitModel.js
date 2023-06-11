import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import WorkoutModel from "../Model/WorkoutModel";
import YogaModel from "../Model/YogaModel";

const XrHitModel = ({ modelName, zRotationMul, scaleMul, type }) => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);

  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 4;
    }
  });

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([{ position, id }]);
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => {
          if (type === "workout") {
            return (
              <WorkoutModel
                key={id}
                position={position}
                modelName={modelName}
                zRotationMul={zRotationMul}
                scaleMul={scaleMul / 2}
              />
            );
          }

          return (
            <YogaModel
              key={id}
              position={position}
              modelName={modelName}
              scaleMul={0.1}
            />
          );
        })}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting &&
        (type === "workout" ? (
          <WorkoutModel
            modelName={modelName}
            zRotationMul={zRotationMul}
            scaleMul={scaleMul}
          />
        ) : (
          <YogaModel modelName={modelName} scaleMul={0.25} />
        ))}
    </>
  );
};

export default XrHitModel;
