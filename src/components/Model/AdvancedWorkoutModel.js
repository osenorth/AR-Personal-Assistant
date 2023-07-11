import React from "react";

const AdvancedWorkoutModel = ({
  modelName,
  scaleMul,
  zRotationMul,
  nodes,
  materials,
  group,
  props,
}) => {
  const objects = [{ name: "shirt black", numbers: [34] }]; // An example to reduce the number of tags below

  if (modelName === "lungs")
    return (
      <group
        ref={group}
        {...props}
        dispose={null}
        rotation={[0, Math.PI * zRotationMul, 0]}
        position={[0, -4, 0]}
        scale={scaleMul * 950}
      >
        <group name="Scene">
          <group name="Armature">
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh
              name="tshirt"
              geometry={nodes.tshirt.geometry}
              material={materials.tshirt}
              skeleton={nodes.tshirt.skeleton}
            />
            <skinnedMesh
              name="tshirt003"
              geometry={nodes.tshirt003.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt003.skeleton}
            />
            <skinnedMesh
              name="tshirt004"
              geometry={nodes.tshirt004.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt004.skeleton}
            />
            <skinnedMesh
              name="tshirt005"
              geometry={nodes.tshirt005.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt005.skeleton}
            />
            <skinnedMesh
              name="tshirt006"
              geometry={nodes.tshirt006.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt006.skeleton}
            />
            <skinnedMesh
              name="tshirt007"
              geometry={nodes.tshirt007.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt007.skeleton}
            />
            <skinnedMesh
              name="tshirt009"
              geometry={nodes.tshirt009.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt009.skeleton}
            />
            <group name="tshirt011">
              <skinnedMesh
                name="tshirt010"
                geometry={nodes.tshirt010.geometry}
                material={materials["Eye.001"]}
                skeleton={nodes.tshirt010.skeleton}
              />
              <skinnedMesh
                name="tshirt010_1"
                geometry={nodes.tshirt010_1.geometry}
                material={materials["eye pinnk.001"]}
                skeleton={nodes.tshirt010_1.skeleton}
              />
              <skinnedMesh
                name="tshirt010_2"
                geometry={nodes.tshirt010_2.geometry}
                material={materials["eye black.001"]}
                skeleton={nodes.tshirt010_2.skeleton}
              />
            </group>
            <skinnedMesh
              name="tshirt012"
              geometry={nodes.tshirt012.geometry}
              material={materials.face}
              skeleton={nodes.tshirt012.skeleton}
            />
            <skinnedMesh
              name="tshirt013"
              geometry={nodes.tshirt013.geometry}
              material={materials.hands}
              skeleton={nodes.tshirt013.skeleton}
            />
            <skinnedMesh
              name="tshirt014"
              geometry={nodes.tshirt014.geometry}
              material={materials.hands}
              skeleton={nodes.tshirt014.skeleton}
            />
            <skinnedMesh
              name="tshirt015"
              geometry={nodes.tshirt015.geometry}
              material={materials.legs}
              skeleton={nodes.tshirt015.skeleton}
            />
            <skinnedMesh
              name="tshirt016"
              geometry={nodes.tshirt016.geometry}
              material={materials.legs}
              skeleton={nodes.tshirt016.skeleton}
            />
            <skinnedMesh
              name="tshirt017"
              geometry={nodes.tshirt017.geometry}
              material={nodes.tshirt017.material}
              skeleton={nodes.tshirt017.skeleton}
            />
            <skinnedMesh
              name="tshirt018"
              geometry={nodes.tshirt018.geometry}
              material={nodes.tshirt018.material}
              skeleton={nodes.tshirt018.skeleton}
            />
            <skinnedMesh
              name="tshirt019"
              geometry={nodes.tshirt019.geometry}
              material={materials.Jeans}
              skeleton={nodes.tshirt019.skeleton}
            />
            <skinnedMesh
              name="tshirt020"
              geometry={nodes.tshirt020.geometry}
              material={materials["ShoeLace right.001"]}
              skeleton={nodes.tshirt020.skeleton}
            />
            <skinnedMesh
              name="tshirt021"
              geometry={nodes.tshirt021.geometry}
              material={nodes.tshirt021.material}
              skeleton={nodes.tshirt021.skeleton}
            />
            <skinnedMesh
              name="tshirt022"
              geometry={nodes.tshirt022.geometry}
              material={nodes.tshirt022.material}
              skeleton={nodes.tshirt022.skeleton}
            />
            <skinnedMesh
              name="tshirt023"
              geometry={nodes.tshirt023.geometry}
              material={nodes.tshirt023.material}
              skeleton={nodes.tshirt023.skeleton}
            />
            <skinnedMesh
              name="tshirt024"
              geometry={nodes.tshirt024.geometry}
              material={nodes.tshirt024.material}
              skeleton={nodes.tshirt024.skeleton}
            />
            <skinnedMesh
              name="tshirt025"
              geometry={nodes.tshirt025.geometry}
              material={nodes.tshirt025.material}
              skeleton={nodes.tshirt025.skeleton}
            />
            <skinnedMesh
              name="tshirt026"
              geometry={nodes.tshirt026.geometry}
              material={nodes.tshirt026.material}
              skeleton={nodes.tshirt026.skeleton}
            />
            <skinnedMesh
              name="tshirt027"
              geometry={nodes.tshirt027.geometry}
              material={materials["Shoes feet.001"]}
              skeleton={nodes.tshirt027.skeleton}
            />
            <skinnedMesh
              name="tshirt028"
              geometry={nodes.tshirt028.geometry}
              material={nodes.tshirt028.material}
              skeleton={nodes.tshirt028.skeleton}
            />
            <skinnedMesh
              name="tshirt029"
              geometry={nodes.tshirt029.geometry}
              material={materials["Shoes feet.001"]}
              skeleton={nodes.tshirt029.skeleton}
            />
            <skinnedMesh
              name="tshirt030"
              geometry={nodes.tshirt030.geometry}
              material={nodes.tshirt030.material}
              skeleton={nodes.tshirt030.skeleton}
            />
            <skinnedMesh
              name="tshirt032"
              geometry={nodes.tshirt032.geometry}
              material={materials["ShoeLace right.001"]}
              skeleton={nodes.tshirt032.skeleton}
            />
            {objects.map((obj) =>
              obj.numbers.map((no) => {
                return (
                  <skinnedMesh
                    name={`tshirt0${no}`}
                    geometry={nodes[`tshirt0${no}`].geometry}
                    material={materials[obj.name]}
                    skeleton={nodes[`tshirt0${no}`].skeleton}
                  />
                );
              })
            )}
            <skinnedMesh
              name="tshirt035"
              geometry={nodes.tshirt035.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt035.skeleton}
            />
            <skinnedMesh
              name="tshirt037"
              geometry={nodes.tshirt037.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt037.skeleton}
            />
            <skinnedMesh
              name="tshirt038"
              geometry={nodes.tshirt038.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt038.skeleton}
            />
            <skinnedMesh
              name="tshirt040"
              geometry={nodes.tshirt040.geometry}
              material={nodes.tshirt040.material}
              skeleton={nodes.tshirt040.skeleton}
            />
            <skinnedMesh
              name="tshirt041"
              geometry={nodes.tshirt041.geometry}
              material={nodes.tshirt041.material}
              skeleton={nodes.tshirt041.skeleton}
            />
            <skinnedMesh
              name="tshirt042"
              geometry={nodes.tshirt042.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt042.skeleton}
            />
            <skinnedMesh
              name="tshirt043"
              geometry={nodes.tshirt043.geometry}
              material={nodes.tshirt043.material}
              skeleton={nodes.tshirt043.skeleton}
            />
            <skinnedMesh
              name="tshirt044"
              geometry={nodes.tshirt044.geometry}
              material={nodes.tshirt044.material}
              skeleton={nodes.tshirt044.skeleton}
            />
            <skinnedMesh
              name="tshirt045"
              geometry={nodes.tshirt045.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt045.skeleton}
            />
            <skinnedMesh
              name="tshirt046"
              geometry={nodes.tshirt046.geometry}
              material={nodes.tshirt046.material}
              skeleton={nodes.tshirt046.skeleton}
            />
            <skinnedMesh
              name="tshirt047"
              geometry={nodes.tshirt047.geometry}
              material={nodes.tshirt047.material}
              skeleton={nodes.tshirt047.skeleton}
            />
            <skinnedMesh
              name="tshirt049"
              geometry={nodes.tshirt049.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt049.skeleton}
            />
            <skinnedMesh
              name="tshirt050"
              geometry={nodes.tshirt050.geometry}
              material={nodes.tshirt050.material}
              skeleton={nodes.tshirt050.skeleton}
            />
            <skinnedMesh
              name="tshirt052"
              geometry={nodes.tshirt052.geometry}
              material={nodes.tshirt052.material}
              skeleton={nodes.tshirt052.skeleton}
            />
            <skinnedMesh
              name="tshirt053"
              geometry={nodes.tshirt053.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt053.skeleton}
            />
            <skinnedMesh
              name="tshirt098"
              geometry={nodes.tshirt098.geometry}
              material={nodes.tshirt098.material}
              skeleton={nodes.tshirt098.skeleton}
            />
            <skinnedMesh
              name="tshirt099"
              geometry={nodes.tshirt099.geometry}
              material={nodes.tshirt099.material}
              skeleton={nodes.tshirt099.skeleton}
            />
            <skinnedMesh
              name="tshirt100"
              geometry={nodes.tshirt100.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt100.skeleton}
            />
            <skinnedMesh
              name="tshirt101"
              geometry={nodes.tshirt101.geometry}
              material={nodes.tshirt101.material}
              skeleton={nodes.tshirt101.skeleton}
            />
            <skinnedMesh
              name="tshirt102"
              geometry={nodes.tshirt102.geometry}
              material={nodes.tshirt102.material}
              skeleton={nodes.tshirt102.skeleton}
            />
            <skinnedMesh
              name="tshirt103"
              geometry={nodes.tshirt103.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt103.skeleton}
            />
            <skinnedMesh
              name="tshirt104"
              geometry={nodes.tshirt104.geometry}
              material={nodes.tshirt104.material}
              skeleton={nodes.tshirt104.skeleton}
            />
            <skinnedMesh
              name="tshirt105"
              geometry={nodes.tshirt105.geometry}
              material={nodes.tshirt105.material}
              skeleton={nodes.tshirt105.skeleton}
            />
            <skinnedMesh
              name="tshirt106"
              geometry={nodes.tshirt106.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt106.skeleton}
            />
          </group>
        </group>
      </group>
    );

  if (modelName === "pullups") {
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene" position={[0, -4, 0]} scale={scaleMul * 1000}>
          <group name="Armature">
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh
              name="tshirt"
              geometry={nodes.tshirt.geometry}
              material={materials.tshirt}
              skeleton={nodes.tshirt.skeleton}
            />
            <skinnedMesh
              name="tshirt001"
              geometry={nodes.tshirt001.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt001.skeleton}
            />
            <skinnedMesh
              name="tshirt002"
              geometry={nodes.tshirt002.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt002.skeleton}
            />
            <skinnedMesh
              name="tshirt003"
              geometry={nodes.tshirt003.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt003.skeleton}
            />
            <skinnedMesh
              name="tshirt005"
              geometry={nodes.tshirt005.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt005.skeleton}
            />
            <skinnedMesh
              name="tshirt006"
              geometry={nodes.tshirt006.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt006.skeleton}
            />
            <group name="tshirt008">
              <skinnedMesh
                name="tshirt008_1"
                geometry={nodes.tshirt008_1.geometry}
                material={materials["Eye.001"]}
                skeleton={nodes.tshirt008_1.skeleton}
              />
              <skinnedMesh
                name="tshirt008_2"
                geometry={nodes.tshirt008_2.geometry}
                material={materials["eye pinnk.001"]}
                skeleton={nodes.tshirt008_2.skeleton}
              />
              <skinnedMesh
                name="tshirt008_3"
                geometry={nodes.tshirt008_3.geometry}
                material={materials["eye black.001"]}
                skeleton={nodes.tshirt008_3.skeleton}
              />
            </group>
            <skinnedMesh
              name="tshirt009"
              geometry={nodes.tshirt009.geometry}
              material={materials.face}
              skeleton={nodes.tshirt009.skeleton}
            />
            <skinnedMesh
              name="tshirt010"
              geometry={nodes.tshirt010.geometry}
              material={materials.hands}
              skeleton={nodes.tshirt010.skeleton}
            />
            <skinnedMesh
              name="tshirt011"
              geometry={nodes.tshirt011.geometry}
              material={materials.hands}
              skeleton={nodes.tshirt011.skeleton}
            />
            <skinnedMesh
              name="tshirt012"
              geometry={nodes.tshirt012.geometry}
              material={materials.legs}
              skeleton={nodes.tshirt012.skeleton}
            />
            <skinnedMesh
              name="tshirt013"
              geometry={nodes.tshirt013.geometry}
              material={materials.legs}
              skeleton={nodes.tshirt013.skeleton}
            />
            <skinnedMesh
              name="tshirt014"
              geometry={nodes.tshirt014.geometry}
              material={nodes.tshirt014.material}
              skeleton={nodes.tshirt014.skeleton}
            />
            <skinnedMesh
              name="tshirt015"
              geometry={nodes.tshirt015.geometry}
              material={nodes.tshirt015.material}
              skeleton={nodes.tshirt015.skeleton}
            />
            <skinnedMesh
              name="tshirt016"
              geometry={nodes.tshirt016.geometry}
              material={materials.Jeans}
              skeleton={nodes.tshirt016.skeleton}
            />
            <skinnedMesh
              name="tshirt017"
              geometry={nodes.tshirt017.geometry}
              material={materials["ShoeLace left"]}
              skeleton={nodes.tshirt017.skeleton}
            />
            <skinnedMesh
              name="tshirt018"
              geometry={nodes.tshirt018.geometry}
              material={materials.Shoes}
              skeleton={nodes.tshirt018.skeleton}
            />
            <skinnedMesh
              name="tshirt019"
              geometry={nodes.tshirt019.geometry}
              material={materials.Shoes}
              skeleton={nodes.tshirt019.skeleton}
            />
            <skinnedMesh
              name="tshirt020"
              geometry={nodes.tshirt020.geometry}
              material={nodes.tshirt020.material}
              skeleton={nodes.tshirt020.skeleton}
            />
            <skinnedMesh
              name="tshirt021"
              geometry={nodes.tshirt021.geometry}
              material={materials.Shoes}
              skeleton={nodes.tshirt021.skeleton}
            />
            <skinnedMesh
              name="tshirt022"
              geometry={nodes.tshirt022.geometry}
              material={materials.Shoes}
              skeleton={nodes.tshirt022.skeleton}
            />
            <skinnedMesh
              name="tshirt023"
              geometry={nodes.tshirt023.geometry}
              material={nodes.tshirt023.material}
              skeleton={nodes.tshirt023.skeleton}
            />
            <skinnedMesh
              name="tshirt024"
              geometry={nodes.tshirt024.geometry}
              material={materials["Shoes feet"]}
              skeleton={nodes.tshirt024.skeleton}
            />
            <skinnedMesh
              name="tshirt025"
              geometry={nodes.tshirt025.geometry}
              material={materials["Shoes feet"]}
              skeleton={nodes.tshirt025.skeleton}
            />
            <skinnedMesh
              name="tshirt026"
              geometry={nodes.tshirt026.geometry}
              material={materials["Shoes feet"]}
              skeleton={nodes.tshirt026.skeleton}
            />
            <skinnedMesh
              name="tshirt027"
              geometry={nodes.tshirt027.geometry}
              material={materials["Shoes feet"]}
              skeleton={nodes.tshirt027.skeleton}
            />
            <skinnedMesh
              name="tshirt028"
              geometry={nodes.tshirt028.geometry}
              material={materials["ShoeLace right"]}
              skeleton={nodes.tshirt028.skeleton}
            />
            <skinnedMesh
              name="tshirt029"
              geometry={nodes.tshirt029.geometry}
              material={materials["shirt black"]}
              skeleton={nodes.tshirt029.skeleton}
            />
            <skinnedMesh
              name="tshirt030"
              geometry={nodes.tshirt030.geometry}
              material={materials["hair black"]}
              skeleton={nodes.tshirt030.skeleton}
            />
            <skinnedMesh
              name="tshirt033"
              geometry={nodes.tshirt033.geometry}
              material={nodes.tshirt033.material}
              skeleton={nodes.tshirt033.skeleton}
            />
            <skinnedMesh
              name="tshirt034"
              geometry={nodes.tshirt034.geometry}
              material={nodes.tshirt034.material}
              skeleton={nodes.tshirt034.skeleton}
            />
            <skinnedMesh
              name="tshirt036"
              geometry={nodes.tshirt036.geometry}
              material={nodes.tshirt036.material}
              skeleton={nodes.tshirt036.skeleton}
            />
            <skinnedMesh
              name="tshirt037"
              geometry={nodes.tshirt037.geometry}
              material={nodes.tshirt037.material}
              skeleton={nodes.tshirt037.skeleton}
            />
            <skinnedMesh
              name="tshirt039"
              geometry={nodes.tshirt039.geometry}
              material={nodes.tshirt039.material}
              skeleton={nodes.tshirt039.skeleton}
            />
            <skinnedMesh
              name="tshirt040"
              geometry={nodes.tshirt040.geometry}
              material={nodes.tshirt040.material}
              skeleton={nodes.tshirt040.skeleton}
            />
            <skinnedMesh
              name="tshirt041"
              geometry={nodes.tshirt041.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt041.skeleton}
            />
            <skinnedMesh
              name="tshirt042"
              geometry={nodes.tshirt042.geometry}
              material={nodes.tshirt042.material}
              skeleton={nodes.tshirt042.skeleton}
            />
            <skinnedMesh
              name="tshirt043"
              geometry={nodes.tshirt043.geometry}
              material={nodes.tshirt043.material}
              skeleton={nodes.tshirt043.skeleton}
            />
            <skinnedMesh
              name="tshirt045"
              geometry={nodes.tshirt045.geometry}
              material={nodes.tshirt045.material}
              skeleton={nodes.tshirt045.skeleton}
            />
            <skinnedMesh
              name="tshirt046"
              geometry={nodes.tshirt046.geometry}
              material={nodes.tshirt046.material}
              skeleton={nodes.tshirt046.skeleton}
            />
            <skinnedMesh
              name="tshirt048"
              geometry={nodes.tshirt048.geometry}
              material={nodes.tshirt048.material}
              skeleton={nodes.tshirt048.skeleton}
            />
            <skinnedMesh
              name="tshirt049"
              geometry={nodes.tshirt049.geometry}
              material={nodes.tshirt049.material}
              skeleton={nodes.tshirt049.skeleton}
            />
            <skinnedMesh
              name="tshirt051"
              geometry={nodes.tshirt051.geometry}
              material={nodes.tshirt051.material}
              skeleton={nodes.tshirt051.skeleton}
            />
            <skinnedMesh
              name="tshirt052"
              geometry={nodes.tshirt052.geometry}
              material={nodes.tshirt052.material}
              skeleton={nodes.tshirt052.skeleton}
            />
          </group>
          <mesh
            name="Pull_Up_Bar"
            geometry={nodes.Pull_Up_Bar.geometry}
            material={materials.set26}
            position={[0, 0.16, -0.12]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.66}
          />
        </group>
      </group>
    );
  }

  if (modelName === "bicepcurls") {
    return (
      <group ref={group} {...props} dispose={null}>
        <group
          name="Scene"
          position={[0, -3, 0]}
          rotation={[0, 0, 0]}
          scale={scaleMul * 950}
        >
          <group name="Armature">
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh
              name="tshirt"
              geometry={nodes.tshirt.geometry}
              material={materials.tshirt}
              skeleton={nodes.tshirt.skeleton}
            />
            <skinnedMesh
              name="tshirt002"
              geometry={nodes.tshirt002.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt002.skeleton}
            />
            <skinnedMesh
              name="tshirt008"
              geometry={nodes.tshirt008.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt008.skeleton}
            />
            <skinnedMesh
              name="tshirt031"
              geometry={nodes.tshirt031.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt031.skeleton}
            />
            <skinnedMesh
              name="tshirt033"
              geometry={nodes.tshirt033.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt033.skeleton}
            />
            <skinnedMesh
              name="tshirt036"
              geometry={nodes.tshirt036.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt036.skeleton}
            />
            <skinnedMesh
              name="tshirt039"
              geometry={nodes.tshirt039.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt039.skeleton}
            />
            <group name="tshirt048">
              <skinnedMesh
                name="tshirt050"
                geometry={nodes.tshirt050.geometry}
                material={materials["Eye.001"]}
                skeleton={nodes.tshirt050.skeleton}
              />
              <skinnedMesh
                name="tshirt050_1"
                geometry={nodes.tshirt050_1.geometry}
                material={materials["eye black.001"]}
                skeleton={nodes.tshirt050_1.skeleton}
              />
              <skinnedMesh
                name="tshirt050_2"
                geometry={nodes.tshirt050_2.geometry}
                material={materials["eye pinnk.001"]}
                skeleton={nodes.tshirt050_2.skeleton}
              />
            </group>
            <skinnedMesh
              name="tshirt051"
              geometry={nodes.tshirt051.geometry}
              material={materials.face}
              skeleton={nodes.tshirt051.skeleton}
            />
            <skinnedMesh
              name="tshirt054"
              geometry={nodes.tshirt054.geometry}
              material={materials.hands}
              skeleton={nodes.tshirt054.skeleton}
            />
            <skinnedMesh
              name="tshirt055"
              geometry={nodes.tshirt055.geometry}
              material={materials.hands}
              skeleton={nodes.tshirt055.skeleton}
            />
            <skinnedMesh
              name="tshirt056"
              geometry={nodes.tshirt056.geometry}
              material={materials.legs}
              skeleton={nodes.tshirt056.skeleton}
            />
            <skinnedMesh
              name="tshirt057"
              geometry={nodes.tshirt057.geometry}
              material={materials.legs}
              skeleton={nodes.tshirt057.skeleton}
            />
            <skinnedMesh
              name="tshirt058"
              geometry={nodes.tshirt058.geometry}
              material={nodes.tshirt058.material}
              skeleton={nodes.tshirt058.skeleton}
            />
            <skinnedMesh
              name="tshirt059"
              geometry={nodes.tshirt059.geometry}
              material={nodes.tshirt059.material}
              skeleton={nodes.tshirt059.skeleton}
            />
            <skinnedMesh
              name="tshirt060"
              geometry={nodes.tshirt060.geometry}
              material={materials.Jeans}
              skeleton={nodes.tshirt060.skeleton}
            />
            <skinnedMesh
              name="tshirt061"
              geometry={nodes.tshirt061.geometry}
              material={materials["ShoeLace right.001"]}
              skeleton={nodes.tshirt061.skeleton}
            />
            <skinnedMesh
              name="tshirt062"
              geometry={nodes.tshirt062.geometry}
              material={materials.Shoes}
              skeleton={nodes.tshirt062.skeleton}
            />
            <skinnedMesh
              name="tshirt063"
              geometry={nodes.tshirt063.geometry}
              material={materials.Shoes}
              skeleton={nodes.tshirt063.skeleton}
            />
            <skinnedMesh
              name="tshirt064"
              geometry={nodes.tshirt064.geometry}
              material={nodes.tshirt064.material}
              skeleton={nodes.tshirt064.skeleton}
            />
            <skinnedMesh
              name="tshirt065"
              geometry={nodes.tshirt065.geometry}
              material={materials.Shoes}
              skeleton={nodes.tshirt065.skeleton}
            />
            <skinnedMesh
              name="tshirt066"
              geometry={nodes.tshirt066.geometry}
              material={materials.Shoes}
              skeleton={nodes.tshirt066.skeleton}
            />
            <skinnedMesh
              name="tshirt067"
              geometry={nodes.tshirt067.geometry}
              material={nodes.tshirt067.material}
              skeleton={nodes.tshirt067.skeleton}
            />
            <skinnedMesh
              name="tshirt068"
              geometry={nodes.tshirt068.geometry}
              material={materials["Shoes feet.001"]}
              skeleton={nodes.tshirt068.skeleton}
            />
            <skinnedMesh
              name="tshirt069"
              geometry={nodes.tshirt069.geometry}
              material={nodes.tshirt069.material}
              skeleton={nodes.tshirt069.skeleton}
            />
            <skinnedMesh
              name="tshirt070"
              geometry={nodes.tshirt070.geometry}
              material={materials["Shoes feet.001"]}
              skeleton={nodes.tshirt070.skeleton}
            />
            <skinnedMesh
              name="tshirt071"
              geometry={nodes.tshirt071.geometry}
              material={nodes.tshirt071.material}
              skeleton={nodes.tshirt071.skeleton}
            />
            <skinnedMesh
              name="tshirt072"
              geometry={nodes.tshirt072.geometry}
              material={materials["ShoeLace right.001"]}
              skeleton={nodes.tshirt072.skeleton}
            />
            <skinnedMesh
              name="tshirt073"
              geometry={nodes.tshirt073.geometry}
              material={materials["shirt black"]}
              skeleton={nodes.tshirt073.skeleton}
            />
            <skinnedMesh
              name="tshirt074"
              geometry={nodes.tshirt074.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt074.skeleton}
            />
            <skinnedMesh
              name="tshirt075"
              geometry={nodes.tshirt075.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt075.skeleton}
            />
            <skinnedMesh
              name="tshirt076"
              geometry={nodes.tshirt076.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt076.skeleton}
            />
            <skinnedMesh
              name="tshirt077"
              geometry={nodes.tshirt077.geometry}
              material={nodes.tshirt077.material}
              skeleton={nodes.tshirt077.skeleton}
            />
            <skinnedMesh
              name="tshirt078"
              geometry={nodes.tshirt078.geometry}
              material={nodes.tshirt078.material}
              skeleton={nodes.tshirt078.skeleton}
            />
            <skinnedMesh
              name="tshirt079"
              geometry={nodes.tshirt079.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt079.skeleton}
            />
            <skinnedMesh
              name="tshirt080"
              geometry={nodes.tshirt080.geometry}
              material={nodes.tshirt080.material}
              skeleton={nodes.tshirt080.skeleton}
            />
            <skinnedMesh
              name="tshirt081"
              geometry={nodes.tshirt081.geometry}
              material={nodes.tshirt081.material}
              skeleton={nodes.tshirt081.skeleton}
            />
            <skinnedMesh
              name="tshirt082"
              geometry={nodes.tshirt082.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt082.skeleton}
            />
            <skinnedMesh
              name="tshirt083"
              geometry={nodes.tshirt083.geometry}
              material={nodes.tshirt083.material}
              skeleton={nodes.tshirt083.skeleton}
            />
            <skinnedMesh
              name="tshirt084"
              geometry={nodes.tshirt084.geometry}
              material={nodes.tshirt084.material}
              skeleton={nodes.tshirt084.skeleton}
            />
            <skinnedMesh
              name="tshirt085"
              geometry={nodes.tshirt085.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt085.skeleton}
            />
            <skinnedMesh
              name="tshirt086"
              geometry={nodes.tshirt086.geometry}
              material={nodes.tshirt086.material}
              skeleton={nodes.tshirt086.skeleton}
            />
            <skinnedMesh
              name="tshirt087"
              geometry={nodes.tshirt087.geometry}
              material={nodes.tshirt087.material}
              skeleton={nodes.tshirt087.skeleton}
            />
            <skinnedMesh
              name="tshirt088"
              geometry={nodes.tshirt088.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt088.skeleton}
            />
            <skinnedMesh
              name="tshirt089"
              geometry={nodes.tshirt089.geometry}
              material={nodes.tshirt089.material}
              skeleton={nodes.tshirt089.skeleton}
            />
            <skinnedMesh
              name="tshirt090"
              geometry={nodes.tshirt090.geometry}
              material={nodes.tshirt090.material}
              skeleton={nodes.tshirt090.skeleton}
            />
            <skinnedMesh
              name="tshirt091"
              geometry={nodes.tshirt091.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt091.skeleton}
            />
            <skinnedMesh
              name="tshirt092"
              geometry={nodes.tshirt092.geometry}
              material={nodes.tshirt092.material}
              skeleton={nodes.tshirt092.skeleton}
            />
            <skinnedMesh
              name="tshirt093"
              geometry={nodes.tshirt093.geometry}
              material={nodes.tshirt093.material}
              skeleton={nodes.tshirt093.skeleton}
            />
            <skinnedMesh
              name="tshirt094"
              geometry={nodes.tshirt094.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt094.skeleton}
            />
            <skinnedMesh
              name="tshirt095"
              geometry={nodes.tshirt095.geometry}
              material={nodes.tshirt095.material}
              skeleton={nodes.tshirt095.skeleton}
            />
            <skinnedMesh
              name="tshirt096"
              geometry={nodes.tshirt096.geometry}
              material={nodes.tshirt096.material}
              skeleton={nodes.tshirt096.skeleton}
            />
            <skinnedMesh
              name="tshirt097"
              geometry={nodes.tshirt097.geometry}
              material={materials["Hair Black.001"]}
              skeleton={nodes.tshirt097.skeleton}
            />
          </group>
        </group>
      </group>
    );
  }
};

export default AdvancedWorkoutModel;
