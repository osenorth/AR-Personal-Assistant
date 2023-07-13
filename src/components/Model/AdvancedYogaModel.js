import React from "react";
import { getParamsForYoga } from "../../helpers/Utils";

const AdvancedYogaModel = ({
  modelName,
  scaleMul,
  nodes,
  materials,
  group,
  props,
}) => {
  const params = getParamsForYoga(modelName);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          rotation={[0, Math.PI * 0.125, 0]}
          scale={[scaleMul, scaleMul, scaleMul]}
          position={[0, -1, 0]}
        >
          <group
            {...props}
            dispose={null}
            position={params.body.position}
            rotation={params.body.rotation}
          >
            <mesh
              geometry={nodes.hair.geometry}
              material={materials.Hair}
              position={params.hair.position}
              rotation={params.hair.rotation}
            />
            <mesh
              geometry={nodes.brows001.geometry}
              material={materials["Eye Hairs"]}
              position={params.brows001.position}
              rotation={params.brows001.rotation}
            />
            <mesh
              geometry={nodes.lash001.geometry}
              material={materials["Eye Hairs"]}
              position={params.lash001.position}
              rotation={params.lash001.rotation}
            />
            <group
              position={params.eyes.position}
              rotation={params.eyes.rotation}
              scale={params.eyes.scale}
            >
              <mesh
                geometry={nodes.eyes_1.geometry}
                material={materials["eye white"]}
              />
              <mesh
                geometry={nodes.eyes_2.geometry}
                material={materials["eye pink"]}
              />
              <mesh
                geometry={nodes.eyes_3.geometry}
                material={materials["eye black"]}
              />
            </group>
            <mesh
              geometry={nodes.base.geometry}
              material={materials.Skin}
              position={params.base.position}
              rotation={params.base.rotation}
              scale={params.base.scale}
            />
            <group
              position={params.tops.position}
              rotation={params.tops.rotation}
              scale={params.tops.scale}
            >
              <mesh
                geometry={nodes.TOP_1.geometry}
                material={materials["White Cloth"]}
              />
              <mesh
                geometry={nodes.TOP_2.geometry}
                material={materials["Black Cloth"]}
              />
            </group>
            <group
              position={params.bottoms.position}
              rotation={params.bottoms.rotation}
              scale={params.bottoms.scale}
            >
              <mesh
                geometry={nodes.BOT_1.geometry}
                material={materials["Black Cloth"]}
              />
              <mesh
                geometry={nodes.BOT_2.geometry}
                material={materials["White Cloth"]}
              />
            </group>
            <group
              position={params.shoes.position}
              rotation={params.shoes.rotation}
              scale={params.shoes.scale}
            >
              <mesh
                geometry={nodes.shoes_1.geometry}
                material={materials["Shoes White"]}
              />
              <mesh
                geometry={nodes.shoes_2.geometry}
                material={materials["Shoes Black"]}
              />
            </group>
          </group>
          <mesh
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            position={params.cube.position}
            rotation={params.cube.rotation}
            scale={params.cube.scale}
          />
        </group>
      </group>
    </group>
  );
};

export default AdvancedYogaModel;
