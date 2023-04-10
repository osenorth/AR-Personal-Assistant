import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, OrbitControls } from "@react-three/drei";
import XrHitModelContainer from "../components/XRHitModelContainer"

export default function Test()
{
    return (
        <>
        <h1>Test</h1>
        <XrHitModelContainer />
        </>
    )
}