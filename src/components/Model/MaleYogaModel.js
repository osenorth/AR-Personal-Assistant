import React, { useState, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function FemaleYogaModel(props) {
  const { modelName, scaleMul } = props;
  const group = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [matRotated, setMatRotated] = useState(false);

  useGLTF.preload(`/models/male/${modelName}.glb`);
  const { nodes, materials } = useGLTF(`/models/male/${modelName}.glb`);

  useEffect(() => {
    if (modelName === "utkatasana") {
      setPosition([0, 0, 1]);
    } else if (modelName === "bhujangasana") {
      setPosition([0, -3, -0.4]);
      setRotation([Math.PI / 2, 0, 0]);
    } else if (modelName === "adhomukhasvanasana") {
      setRotation([Math.PI / 4.4, 0, 0]);
      setPosition([0, -2, -0.1]);
    } else if (modelName === "sarvangasana") {
      setPosition([0, 0, -5.6]);
      setRotation([Math.PI, 0, Math.PI]);
    } else if (modelName === "trikonasana") {
      setPosition([0, 0, 0.75]);
      setMatRotated(true);
    } else if (modelName === "virabhadrasana3") {
      setPosition([0, 0, 0.15]);
      setRotation([0, 0, -Math.PI / 8]);
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, -2, 0.25]}
        rotation={[Math.PI / 2, 0, -Math.PI / 8]}
        scale={scaleMul * 7}
      >
        <group
          {...props}
          dispose={null}
          position={position}
          rotation={rotation}
        >
          <primitive object={nodes.mixamorigHips} />
          <mesh
            geometry={nodes.tshirtmesh.geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes.tshirtmesh_1.geometry}
            material={materials["shirt black"]}
          />
          <mesh
            geometry={nodes.tshirtmesh_2.geometry}
            material={materials.tshirt}
          />
          <mesh
            geometry={nodes.tshirtmesh_3.geometry}
            material={materials.hands}
          />
          <mesh
            geometry={nodes.tshirtmesh_4.geometry}
            material={materials.face}
          />
          <mesh
            geometry={nodes.tshirtmesh_5.geometry}
            material={materials["Hair Black.001"]}
          />
          <mesh
            geometry={nodes.tshirtmesh_6.geometry}
            material={materials["Eye.001"]}
          />
          <mesh
            geometry={nodes.tshirtmesh_7.geometry}
            material={materials["eye black.001"]}
          />
          <mesh
            geometry={nodes.tshirtmesh_8.geometry}
            material={materials["eye pinnk.001"]}
          />
          <mesh
            geometry={nodes.tshirtmesh_9.geometry}
            material={materials["ShoeLace left"]}
          />
          <mesh
            geometry={nodes.tshirtmesh_10.geometry}
            material={materials.Shoes}
          />
          {nodes?.tshirtmesh_11 && (
            <mesh
              geometry={nodes.tshirtmesh_11.geometry}
              material={materials["Shoes feet"]}
            />
          )}
        </group>
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials["Material.001"]}
          scale={[1, 2, 3.75]}
          rotation={[Math.PI / 2, matRotated ? Math.PI / 2 : 0, 0]}
        />
        {nodes?.Cube001 && modelName === "sarvangasana" && (
          <mesh
            geometry={nodes.Cube001.geometry}
            material={materials["Material.002"]}
            position={[0, -1, -0.5]}
            rotation={[0, 0, 0]}
            scale={[0.75, 0.75, 0.5]}
          />
        )}
      </group>
    </group>
  );
}
