import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, OrbitControls } from "@react-three/drei";
import XrHitModelContainer from "../components/XRHitModelContainer";
import "./test.module.css";

export default function Test()
{
    return (
        <>
        <h1>Testing Three.js WebXR Environment</h1>
        <XrHitModelContainer />
        </>
    )
}