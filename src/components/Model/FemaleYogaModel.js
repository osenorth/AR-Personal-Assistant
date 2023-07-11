import React, { useState, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import AdvancedYogaModel from "./AdvancedYogaModel";

export default function FemaleYogaModel(props) {
  const { modelName, scaleMul } = props;
  const group = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useGLTF.preload(`/models/female/${modelName}.glb`);
  const { nodes, materials } = useGLTF(`/models/female/${modelName}.glb`);

  useEffect(() => {
    if (modelName === "bhujangasana") {
      setPosition([0, -7, 0]);
    } else if (modelName === "adhomukhasvanasana") {
      setPosition([0, -3.5, 0]);
    } else if (modelName === "sarvangasana") {
      setPosition([0, 13, 1]);
      setRotation([Math.PI, Math.PI, 0]);
    }
  }, []);

  if (modelName === "trikonasana" || modelName === "virabhadrasana3")
    return (
      <AdvancedYogaModel
        modelName={modelName}
        scaleMul={scaleMul}
        nodes={nodes}
        materials={materials}
        group={group}
        props={props}
      />
    );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          rotation={[0, Math.PI * 0.125, 0]}
          scale={scaleMul}
          position={[0, -0.75, 0]}
        >
          <group
            {...props}
            dispose={null}
            position={position}
            rotation={rotation}
          >
            <mesh
              geometry={nodes.hair.geometry}
              material={materials.Hair}
              position={[0, 0.55, -0.2]}
            />
            <mesh
              geometry={nodes.brows001.geometry}
              material={materials["Eye Hairs"]}
              position={[0, 0.4, 0.77]}
            />
            <mesh
              geometry={nodes.lash001.geometry}
              material={materials["Eye Hairs"]}
              position={[0, 0.25, 0.63]}
              rotation={[0, 0, -0.02]}
            />
            <group
              position={[-0.01, 0.2, 0.4]}
              rotation={[1.7, 0, -0.05]}
              scale={0.85}
            >
              <mesh
                geometry={nodes.eyes_1?.geometry || nodes.Sphere001.geometry}
                material={materials["eye white"]}
              />
              <mesh
                geometry={nodes.eyes_2?.geometry || nodes.Sphere001_1.geometry}
                material={materials["eye pink"]}
              />
              <mesh
                geometry={nodes.eyes_3?.geometry || nodes.Sphere001_2.geometry}
                material={materials["eye black"]}
              />
            </group>
            <mesh
              geometry={nodes.base.geometry}
              material={materials.Skin}
              position={[0, -4.95, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.15}
            />
            <group
              position={[0, -4.95, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.15}
            >
              {nodes?.TOP && (
                <mesh
                  geometry={nodes.TOP.geometry}
                  material={materials["White Cloth"]}
                />
              )}
              {(nodes?.TOP_1 || nodes?.Mesh003) && (
                <mesh
                  geometry={nodes.TOP_1?.geometry || nodes.Mesh003.geometry}
                  material={materials["White Cloth"]}
                />
              )}
              {(nodes?.TOP_2 || nodes?.Mesh003_1) && (
                <mesh
                  geometry={nodes.TOP_2?.geometry || nodes.Mesh003_1.geometry}
                  material={materials["Black Cloth"]}
                />
              )}
            </group>
            <group
              position={[0, -4.95, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.15}
            >
              <mesh
                geometry={nodes.BOT_1?.geometry || nodes?.Mesh006.geometry}
                material={materials["Black Cloth"]}
              />
              <mesh
                geometry={nodes.BOT_2?.geometry || nodes?.Mesh006_1.geometry}
                material={materials["White Cloth"]}
              />
            </group>
            <group
              position={[0, -11.31, -0.01]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.15}
            >
              <mesh
                geometry={nodes.shoes_1?.geometry || nodes.Mesh009.geometry}
                material={materials["Shoes White"]}
              />
              <mesh
                geometry={nodes.shoes_2?.geometry || nodes.Mesh009_1.geometry}
                material={materials["Shoes Black"]}
              />
            </group>
          </group>
          {nodes?.Cube001 && (
            <mesh
              geometry={nodes.Cube001.geometry}
              material={materials["Material.001"]}
              position={[0, 1.25, -1.25]}
              scale={[1.47, 1.25, 1.98]}
            />
          )}
          <mesh
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            position={[0, 0.02, 0.68]}
            scale={[2.47, 5.98, 7.98]}
          />
        </group>
      </group>
    </group>
  );
}
