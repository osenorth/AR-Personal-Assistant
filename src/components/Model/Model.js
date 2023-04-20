import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
// import testModel from "../../assets/models/test_model.glb";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/test_model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh.geometry}
        material={materials.SpacePirate_M}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  );
}

useGLTF.preload("/test_model.glb");

// import { useLoader } from "@react-three/fiber";
// import { Suspense } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const Model = ({ position }) => {
//   const gltf = useLoader(GLTFLoader, "/test_model.glb");
//   return (
//     <Suspense fallback={null}>
//       <primitive position={position} object={gltf.scene} />
//     </Suspense>
//   );
// };

// export default Model;
