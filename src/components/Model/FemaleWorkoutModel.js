import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function FemaleWorkoutModel(props) {
  const { modelName, zRotationMul, scaleMul } = props;

  const group = useRef();

  useGLTF.preload(`/models/female/${modelName}.glb`);
  const { nodes, materials, animations } = useGLTF(
    `/models/female/${modelName}.glb`
  );
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (actions) {
      const action =
        (modelName === "lungs" &&
          actions["Armature|lunge animation|Anima_Layer"]) ||
        (modelName === "bicepcurls" &&
          actions["Armature|both hands|Anima_Layer"]) ||
        (modelName === "pullups" && actions["Armature|pull up|Anima_Layer"]) ||
        actions["Armature|mixamo.com|Layer0"];
      action?.play();
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          rotation={[Math.PI / 2, 0, -Math.PI * zRotationMul]}
          scale={scaleMul}
          position={[0, -1.5, 0]}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="base"
            geometry={nodes.base.geometry}
            material={materials.Skin}
            skeleton={nodes.base.skeleton}
          />
          <group name="BOT">
            <skinnedMesh
              name="BOTmesh"
              geometry={nodes.BOTmesh?.geometry || nodes.BOT_1.geometry}
              material={materials["Black Cloth"]}
              skeleton={nodes.BOTmesh?.skeleton || nodes.BOT_1.skeleton}
            />
            <skinnedMesh
              name="BOTmesh_1"
              geometry={nodes.BOTmesh_1?.geometry || nodes.BOT_2.geometry}
              material={materials["White Cloth"]}
              skeleton={nodes.BOTmesh_1?.skeleton || nodes.BOT_2.skeleton}
            />
          </group>
          <skinnedMesh
            name="brows001"
            geometry={nodes.brows001.geometry}
            material={materials["Eye Hairs"]}
            skeleton={nodes.brows001.skeleton}
          />
          <group name="eyes">
            <skinnedMesh
              name="eyesmesh"
              geometry={nodes.eyesmesh?.geometry || nodes.eyes_2.geometry}
              material={
                modelName === "pullups"
                  ? materials["eye black"]
                  : materials["eye pink"]
              }
              skeleton={nodes.eyesmesh?.skeleton || nodes.eyes_2.skeleton}
            />
            <skinnedMesh
              name="eyesmesh_1"
              geometry={nodes.eyesmesh_1?.geometry || nodes.eyes_3.geometry}
              material={
                modelName === "pullups"
                  ? materials.Material
                  : materials["eye black"]
              }
              skeleton={nodes.eyesmesh_1?.skeleton || nodes.eyes_3.skeleton}
            />
            <skinnedMesh
              name="eyesmesh_2"
              geometry={nodes.eyesmesh_2?.geometry || nodes.eyes_1.geometry}
              material={
                modelName === "pullups"
                  ? materials["eye pink"]
                  : materials.Material || materials["eye white"]
              }
              skeleton={nodes.eyesmesh_2?.skeleton || nodes.eyes_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="hair"
            geometry={nodes.hair.geometry}
            material={materials.Hair}
            skeleton={nodes.hair.skeleton}
          />
          <skinnedMesh
            name="lash001"
            geometry={nodes.lash001.geometry}
            material={materials["Eye Hairs"]}
            skeleton={nodes.lash001.skeleton}
          />
          <group name="shoes">
            <skinnedMesh
              name="shoesmesh"
              geometry={
                nodes.shoesmesh?.geometry ||
                nodes.shoes_1?.geometry ||
                nodes.shoes?.geometry
              }
              material={materials["Shoes White"] || materials.entity_1}
              skeleton={
                nodes.shoesmesh?.skeleton ||
                nodes.shoes_1?.skeleton ||
                nodes.shoes?.skeleton
              }
            />
            {(nodes?.shoesmesh_1 || nodes?.shoes_2) && (
              <skinnedMesh
                name="shoesmesh_1"
                geometry={
                  nodes.shoesmesh_1?.geometry || nodes.shoes_2?.geometry
                }
                material={materials["Shoes Black"]}
                skeleton={
                  nodes.shoesmesh_1?.skeleton || nodes.shoes_2?.skeleton
                }
              />
            )}
          </group>
          <group name="TOP">
            <skinnedMesh
              name="TOPmesh"
              geometry={nodes.TOPmesh?.geometry || nodes.TOP_1.geometry}
              material={
                modelName === "squats"
                  ? materials["Black Cloth"]
                  : materials["White Cloth"]
              }
              skeleton={nodes.TOPmesh?.skeleton || nodes.TOP_1.skeleton}
            />
            <skinnedMesh
              name="TOPmesh_1"
              geometry={nodes.TOPmesh_1?.geometry || nodes.TOP_2.geometry}
              material={
                modelName === "squats"
                  ? materials["White Cloth"]
                  : materials["Black Cloth"]
              }
              skeleton={nodes.TOPmesh_1?.skeleton || nodes.TOP_2.skeleton}
            />
          </group>
        </group>
        {nodes?.Pull_Up_Bar && (
          <mesh
            name="Pull_Up_Bar"
            geometry={nodes.Pull_Up_Bar.geometry}
            material={materials.set26}
            scale={[scaleMul * 10, scaleMul * 7.5, scaleMul * 7.5]}
            position={[0, -1.5, scaleMul * -105]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        )}
      </group>
    </group>
  );
}

// For test_model.glb

// export default function Model(props) {
//   useGLTF.preload("/models/test_model.glb");
//   const { nodes, materials } = useGLTF(`/models/female/test_model.glb`);

//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Mesh.geometry}
//         material={materials.SpacePirate_M}
//         scale={[0.01, 0.01, 0.01]}
//       />
//     </group>
//   );
// }
