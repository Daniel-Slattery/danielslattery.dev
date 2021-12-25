import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import useTextCanvas from './useTextCanvas';


const TextCanvas = () => {

const canvasRef = useRef()

useEffect(() => {
  const canvasHeight = window.innerHeight/2;
  const canvasWidth = window.innerWidth/2;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasWidth / canvasHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    console.log(scene.children);
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    console.log(scene.children);
    camera.position.z = 3;

    renderer.render(scene, camera);
    // const { renderer } = useTextCanvas(canvasRef.current)

    // Cleanup on unmount, otherwise stuff will linger in GPU
    return () => {
      renderer.forceContextLoss();
      renderer.dispose();
      cube.geometry.dispose();
      cube.material.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default TextCanvas
