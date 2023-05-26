import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const { modelName } = props;

  const group = useRef();

  useGLTF.preload(`/models/${modelName}.glb`);
  const { nodes, materials, animations } = useGLTF(`/models/${modelName}.glb`);
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (actions) {
      const action = actions["Armature|mixamo.com|Layer0"];
      action.play();
    }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.15, 0.15, 0.15]}
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
              geometry={nodes.BOTmesh.geometry}
              material={materials["Black Cloth"]}
              skeleton={nodes.BOTmesh.skeleton}
            />
            <skinnedMesh
              name="BOTmesh_1"
              geometry={nodes.BOTmesh_1.geometry}
              material={materials["White Cloth"]}
              skeleton={nodes.BOTmesh_1.skeleton}
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
              geometry={nodes.eyesmesh.geometry}
              material={materials["eye pink"]}
              skeleton={nodes.eyesmesh.skeleton}
            />
            <skinnedMesh
              name="eyesmesh_1"
              geometry={nodes.eyesmesh_1.geometry}
              material={materials["eye black"]}
              skeleton={nodes.eyesmesh_1.skeleton}
            />
            <skinnedMesh
              name="eyesmesh_2"
              geometry={nodes.eyesmesh_2.geometry}
              material={materials["eye white"]}
              skeleton={nodes.eyesmesh_2.skeleton}
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
              geometry={nodes.shoesmesh.geometry}
              material={materials["Shoes White"]}
              skeleton={nodes.shoesmesh.skeleton}
            />
            <skinnedMesh
              name="shoesmesh_1"
              geometry={nodes.shoesmesh_1.geometry}
              material={materials["Shoes Black"]}
              skeleton={nodes.shoesmesh_1.skeleton}
            />
          </group>
          <group name="TOP">
            <skinnedMesh
              name="TOPmesh"
              geometry={nodes.TOPmesh.geometry}
              material={materials["White Cloth"]}
              skeleton={nodes.TOPmesh.skeleton}
            />
            <skinnedMesh
              name="TOPmesh_1"
              geometry={nodes.TOPmesh_1.geometry}
              material={materials["Black Cloth"]}
              skeleton={nodes.TOPmesh_1.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

// For test_model.glb

// export default function Model(props) {
//   const { modelName } = props;

// useGLTF.preload("/test_model.glb");
//   const { nodes, materials } = useGLTF(`/test_model.glb`);

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

// export default Model;
