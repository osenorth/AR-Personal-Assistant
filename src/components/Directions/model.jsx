import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCharacterAnimations } from "../../helpers/Animations";
const Model = async (props) => {
  const group = useRef();
  useGLTF.preload(`/models/left_female.glb/`);
  const { nodes, materials, animations } = useGLTF("/models/left_female.glb/");
  const { actions, names } = useAnimations(animations, group);
  console.log({ actions, names });
  const { setAnimations, animationIndex } = useCharacterAnimations();
  useEffect(() => {
    setAnimations(names);
  });

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();

    return () => {
      actions[names[animationIndex]]?.fadeOut(0.5);
    };
  });
  useFrame((state, delta) => {
    // If any autorotation is needed use it.
  });

  return (
    <group ref={group} position={props.position} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
          <skinnedMesh
            name="base"
            geometry={nodes.base.geometry}
            material={materials.skin}
            skeleton={nodes.base.skeleton}
          />
          <skinnedMesh
            name="brows"
            geometry={nodes.brows.geometry}
            material={materials["Eye brows"]}
            skeleton={nodes.brows.skeleton}
          />
          <group name="DMAD_cornea_l">
            <skinnedMesh
              name="DMAD_cornea_l002"
              geometry={nodes.DMAD_cornea_l002.geometry}
              material={materials.Material}
              skeleton={nodes.DMAD_cornea_l002.skeleton}
            />
            <skinnedMesh
              name="DMAD_cornea_l002_1"
              geometry={nodes.DMAD_cornea_l002_1.geometry}
              material={materials["eye black"]}
              skeleton={nodes.DMAD_cornea_l002_1.skeleton}
            />
            <skinnedMesh
              name="DMAD_cornea_l002_2"
              geometry={nodes.DMAD_cornea_l002_2.geometry}
              material={materials["eye pink"]}
              skeleton={nodes.DMAD_cornea_l002_2.skeleton}
            />
          </group>
          <skinnedMesh
            name="hoodie_ball"
            geometry={nodes.hoodie_ball.geometry}
            material={materials["hoodie ring"]}
            skeleton={nodes.hoodie_ball.skeleton}
          />
          <skinnedMesh
            name="hoodie_cap"
            geometry={nodes.hoodie_cap.geometry}
            material={materials.Top}
            skeleton={nodes.hoodie_cap.skeleton}
          />
          <skinnedMesh
            name="hoodie_ring"
            geometry={nodes.hoodie_ring.geometry}
            material={materials["hoodie ring"]}
            skeleton={nodes.hoodie_ring.skeleton}
          />
          <skinnedMesh
            name="hoodie_wire"
            geometry={nodes.hoodie_wire.geometry}
            material={materials.Top}
            skeleton={nodes.hoodie_wire.skeleton}
          />
          <skinnedMesh
            name="lash"
            geometry={nodes.lash.geometry}
            material={materials["Eye brows"]}
            skeleton={nodes.lash.skeleton}
          />
          <skinnedMesh
            name="Main"
            geometry={nodes.Main.geometry}
            material={materials.Hair}
            skeleton={nodes.Main.skeleton}
          />
          <group name="shoes">
            <skinnedMesh
              name="shoes002"
              geometry={nodes.shoes002.geometry}
              material={materials["shoes pink"]}
              skeleton={nodes.shoes002.skeleton}
            />
            <skinnedMesh
              name="shoes002_1"
              geometry={nodes.shoes002_1.geometry}
              material={materials["shoes white"]}
              skeleton={nodes.shoes002_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="skirt"
            geometry={nodes.skirt.geometry}
            material={materials.Bottom}
            skeleton={nodes.skirt.skeleton}
          />
          <skinnedMesh
            name="Tshirt"
            geometry={nodes.Tshirt.geometry}
            material={materials.Top}
            skeleton={nodes.Tshirt.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/left.glb");
export default Model;

// import { useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useRef } from "react";

// const Model = ({ position, id }) => {
//   const modelRef = useRef();
//   useFrame((state, delta) => {
//     modelRef.current.rotation.y += 0.01;
//   });
//   return (
//     <>
//       <OrbitControls />
//       <ambientLight />
//       <mesh ref={modelRef} position={position}>
//         <boxGeometry args={[0.5, 0.5, 0.5]} />
//         <meshStandardMaterial color={"green"} />
//       </mesh>
//     </>
//   );
// };

// export default Model;
